"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaImage,
  FaTrash,
  FaLink,
  FaTable,
  FaUndo,
  FaRedo,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import { useCallback, useEffect, useState } from "react";
import "./TextEditor.css";
import { debounce } from "lodash";

const TextEditor = ({content, setContent }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaTab, setMediaTab] = useState("upload");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      Image.configure({
        inline: true,
        allowBase64: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
      }),
      Placeholder.configure({
        placeholder: "Start writing your post...",
      }),
      Link.configure({
        openOnClick: false,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: "",
    injectCSS: false,
    onCreate: ({ editor }) => {
      editor.options.immediatelyRender = false;
    },
    editorProps: {
      handleDrop: (view, event, slice, moved) => {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          const file = event.dataTransfer.files[0];
          if (file.type.startsWith("image/")) {
            uploadImage(file, (url) => {
              const { schema } = view.state;
              const coordinates = view.posAtCoords({
                left: event.clientX,
                top: event.clientY,
              });
              const node = schema.nodes.image.create({ src: url });
              const transaction = view.state.tr.insert(coordinates.pos, node);
              view.dispatch(transaction);
            });
            return true;
          }
        }
        return false;
      },
    },
    onUpdate: ({ editor }) => {
      debouncedSetContent(editor.getHTML());
      console.log(editor.getJSON())
    },
  });

  // Debounce setContent to avoid excessive updates
  const debouncedSetContent = useCallback(
    debounce((html) => {
      setContent(html);
    }, 300),
    [setContent]
  );

  // Fetch uploaded images
  const fetchUploadedImages = useCallback(async () => {
    setIsLoadingImages(true);
    setUploadError(null);
    try {
      const response = await fetch("/api/admin/posts/listImages", {
        credentials: "include",
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setUploadedImages(result.images || []);
      } else {
        setUploadError(result.message || "Failed to fetch images");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setUploadError("Error fetching images");
    } finally {
      setIsLoadingImages(false);
    }
  }, []);

  // Upload image to server
  const uploadImage = useCallback(
    async (file, callback) => {
      setUploadError(null);
      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("/api/admin/posts/uploadContentImage", {
          method: "POST",
          body: formData,
          credentials: "include",
        });

        const result = await response.json();
        if (response.ok) {
          callback(result.url);
          fetchUploadedImages(); // Refresh image list
        } else {
          setUploadError(result.message || result.error);
        }
      } catch (error) {
        console.error("Upload error:", error);
        setUploadError("Error uploading image");
      }
    },
    [fetchUploadedImages]
  );


  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [editor]);

  // Handle image upload from modal
  const handleImageUpload = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (file && editor) {
        uploadImage(file, (url) => {
          editor.chain().focus().setImage({ src: url }).run();
          setIsMediaModalOpen(false);
        });
      }
    },
    [editor, uploadImage]
  );

  // Handle image selection from uploaded images
  const handleImageSelect = useCallback(
    (url) => {
      if (editor) {
        editor.chain().focus().setImage({ src: url }).run();
        setIsMediaModalOpen(false);
      }
    },
    [editor]
  );

  // Remove selected image
  const removeImage = useCallback(() => {
    if (editor) {
      const { selection } = editor.state;
      const node = editor.state.doc.nodeAt(selection.from);
      if (node && node.type.name === "image") {
        editor
          .chain()
          .focus()
          .deleteRange({
            from: selection.from,
            to: selection.from + node.nodeSize,
          })
          .run();
      }
    }
  }, [editor]);

  // Handle link insertion
  const setLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter the URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    } else {
      editor.chain().focus().unsetLink().run();
    }
  }, [editor]);

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  // Open media modal and fetch images
  const openMediaModal = useCallback(() => {
    setIsMediaModalOpen(true);
    setMediaTab("upload");
    fetchUploadedImages();
  }, [fetchUploadedImages]);

  // Clean up debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSetContent.cancel();
    };
  }, [debouncedSetContent]);

  if (!editor) return null;

  return (
    <div
      className={`flex flex-col m-4 rounded-lg shadow-md w-full h-[80vh] bg-white ${
        isDragging ? "border-2 border-dashed border-blue-500" : "border border-gray-200"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200 rounded-t-lg">
        {/* Text Styles */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("bold") ? "bg-gray-200" : "bg-white"
            }`}
            title="Bold"
          >
            <FaBold size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("italic") ? "bg-gray-200" : "bg-white"
            }`}
            title="Italic"
          >
            <FaItalic size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("underline") ? "bg-gray-200" : "bg-white"
            }`}
            title="Underline"
          >
            <FaUnderline size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("strike") ? "bg-gray-200" : "bg-white"
            }`}
            title="Strikethrough"
          >
            <FaStrikethrough size={15} />
          </button>
        </div>
        {/* Headings */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : "bg-white"
            }`}
            title="Heading 1"
          >
            <LuHeading1 size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : "bg-white"
            }`}
            title="Heading 2"
          >
            <LuHeading2 size={15} />
          </button>
        </div>
        {/* Lists and Quotes */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("bulletList") ? "bg-gray-200" : "bg-white"
            }`}
            title="Bullet List"
          >
            <FaListUl size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("orderedList") ? "bg-gray-200" : "bg-white"
            }`}
            title="Ordered List"
          >
            <FaListOl size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("blockquote") ? "bg-gray-200" : "bg-white"
            }`}
            title="Blockquote"
          >
            <FaQuoteLeft size={15} />
          </button>
        </div>
        {/* Alignment */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("textAlign", { align: "left" }) ? "bg-gray-200" : "bg-white"
            }`}
            title="Align Left"
          >
            <FaAlignLeft size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("textAlign", { align: "center" }) ? "bg-gray-200" : "bg-white"
            }`}
            title="Align Center"
          >
            <FaAlignCenter size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("textAlign", { align: "right" }) ? "bg-gray-200" : "bg-white"
            }`}
            title="Align Right"
          >
            <FaAlignRight size={15} />
          </button>
        </div>
        {/* Links and Tables */}
        <div className="flex gap-1">
          <button
            onClick={setLink}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("link") ? "bg-gray-200" : "bg-white"
            }`}
            title="Link"
          >
            <FaLink size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("table") ? "bg-gray-200" : "bg-white"
            }`}
            title="Insert Table"
          >
            <FaTable size={15} />
          </button>
        </div>
        {/* Images */}
        <div className="flex gap-1">
          <button
            onClick={openMediaModal}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("image") ? "bg-gray-200" : "bg-white"
            }`}
            title="Insert Image"
          >
            <FaImage size={15} />
          </button>
          <button
            onClick={removeImage}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.isActive("image") ? "bg-gray-200" : "bg-white"
            }`}
            title="Remove Image"
          >
            <FaTrash size={15} />
          </button>
        </div>
        {/* Undo/Redo */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.can().undo() ? "bg-white" : "bg-gray-100 opacity-50"
            }`}
            title="Undo"
            disabled={!editor.can().undo()}
          >
            <FaUndo size={15} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${
              editor.can().redo() ? "bg-white" : "bg-gray-100 opacity-50"
            }`}
            title="Redo"
            disabled={!editor.can().redo()}
          >
            <FaRedo size={15} />
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-y-auto p-6 prose max-w-none">
        <EditorContent editor={editor} />
      </div>

      {/* Media Selector Modal */}
      {isMediaModalOpen && (
        <div className="fixed inset-0 bg-[#00091A] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Insert Image</h2>
            <div className="flex gap-2 mb-4 border-b border-gray-200">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  mediaTab === "upload"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setMediaTab("upload")}
              >
                Upload New
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  mediaTab === "select"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setMediaTab("select")}
              >
                Select Uploaded
              </button>
            </div>

            {mediaTab === "upload" && (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {uploadError && <p className="text-red-500 text-sm mt-2">{uploadError}</p>}
              </div>
            )}

            {mediaTab === "select" && (
              <div className="max-h-64 overflow-y-auto">
                {isLoadingImages ? (
                  <p className="text-gray-500">Loading images...</p>
                ) : uploadError ? (
                  <p className="text-red-500">{uploadError}</p>
                ) : uploadedImages.length === 0 ? (
                  <p className="text-gray-500">No images uploaded yet.</p>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {uploadedImages.map((image) => (
                      <img
                        key={image.url}
                        src={image.url}
                        alt={image.name}
                        className="w-full h-24 object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                        onClick={() => handleImageSelect(image.url)}
                        title={image.name}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                onClick={() => setIsMediaModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextEditor;