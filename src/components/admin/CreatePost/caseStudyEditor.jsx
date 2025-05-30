"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { svgMappings } from "./svg_mappings";
import SelectedCategories from "@/components/admin/customAdminUI/Categories/SelectedCategories";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent } from "@tiptap/react";
import { uploadContentImage } from "@/lib/api/admin/postApi";
import { Toast } from "@/components/admin/customAdminUI/Toast/Toast";

const RichTextEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded p-2 relative">
      {editor && (
        <div className="mb-2 space-x-2">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2 py-1 rounded text-sm border ${editor.isActive("bold") ? "bg-blue-500 text-white" : ""}`}
          >
            Bold
          </button>
        </div>
      )}
      <EditorContent editor={editor} className="min-h-[100px]" />
    </div>
  );
};

const CaseStudyEditor = ({ content, setContent, isEdit }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedTech, setSelectedTech] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    { id: "overview", title: "Project Overview" },
    { id: "challenge", title: "Challenge" },
    { id: "solution", title: "Our Solution" },
    { id: "impact", title: "Impact" },
    { id: "outcome", title: "Outcome" },
    { id: "tech_stack", title: "Technology Stack" },
    { id: "testimonials", title: "Testimonials" }, // New section added
  ];

  const ObjectOfKeys = Object.keys(svgMappings).map((value, index) => ({
    id: index,
    name: value,
  }));

  useEffect(() => {
    if (content.tech_stack?.selectedTech) {
      setSelectedTech(content.tech_stack.selectedTech);
    }
  }, []);

  useEffect(() => {
    setContent((prev) => ({
      ...prev,
      tech_stack: {
        ...prev.tech_stack,
        selectedTech,
      },
    }));
  }, [selectedTech]);

  const handleTextChange = (section, field, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleRemoveItem = (section, field, index) => {
    const updatedArray = [...(content[section]?.[field] || [])];
    updatedArray.splice(index, 1);
    handleTextChange(section, field, updatedArray);
  };

  const handleImageUpload = (e, section, index = null) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      uploadContentImage(formData)
        .then((response) => {
          if (section === "solution") {
            handleTextChange("solution", "image", response.url);
          } else if (section === "testimonials" && index !== null) {
            const updatedTestimonials = [...(content.testimonials?.points || [])];
            updatedTestimonials[index] = {
              ...updatedTestimonials[index],
              image: response.url,
            };
            handleTextChange("testimonials", "points", updatedTestimonials);
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error.error);
          Toast({ message: "Error uploading image", type: "error", duration: 5000 });
        });
    }
  };

  const handleImageRemove = (section, index = null) => {
    if (section === "solution") {
      handleTextChange("solution", "image", null);
    } else if (section === "testimonials" && index !== null) {
      const updatedTestimonials = [...(content.testimonials?.points || [])];
      updatedTestimonials[index] = {
        ...updatedTestimonials[index],
        image: null,
      };
      handleTextChange("testimonials", "points", updatedTestimonials);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-64 flex-shrink-0">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeSection === section.id
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 space-y-6">
        {activeSection === "overview" && (
          <Card className="bg-transparent border shadow">
            <CardHeader>
              <CardTitle>
                <textarea
                  value={content.overview?.title || "Project Overview"}
                  onChange={(e) =>
                    handleTextChange("overview", "title", e.target.value)
                  }
                  className="text-3xl font-bold bg-transparent border-none w-full resize-none focus:outline-none"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={content.overview?.description || ""}
                onChange={(e) =>
                  handleTextChange("overview", "description", e.target.value)
                }
                className="text-sm bg-transparent border rounded p-2 w-full min-h-[150px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter project overview description..."
              />
            </CardContent>
          </Card>
        )}

        {activeSection === "challenge" && (
          <Card className="bg-transparent border shadow">
            <CardHeader>
              <CardTitle>
                <textarea
                  value={content.challenge?.title || "Challenge"}
                  onChange={(e) =>
                    handleTextChange("challenge", "title", e.target.value)
                  }
                  className="text-3xl font-bold bg-transparent border-none w-full resize-none focus:outline-none"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                {content.challenge?.points?.map((point, index) => (
                  <div key={index} className="relative">
                    <textarea
                      value={point}
                      onChange={(e) => {
                        const newPoints = [...content.challenge.points];
                        newPoints[index] = e.target.value;
                        handleTextChange("challenge", "points", newPoints);
                      }}
                      className="bg-transparent border rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                      rows="2"
                    />
                    <button
                      onClick={() => handleRemoveItem("challenge", "points", index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const newPoints = [...(content.challenge?.points || []), ""];
                  handleTextChange("challenge", "points", newPoints);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add Challenge Point
              </button>
            </CardContent>
          </Card>
        )}

        {activeSection === "solution" && (
          <Card className="bg-transparent border shadow">
            <CardHeader>
              <CardTitle>
                <textarea
                  value={content.solution?.title || "Our Solution"}
                  onChange={(e) =>
                    handleTextChange("solution", "title", e.target.value)
                  }
                  className="text-3xl font-bold bg-transparent border-none w-full resize-none focus:outline-none"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <textarea
                value={content.solution?.intro || ""}
                onChange={(e) =>
                  handleTextChange("solution", "intro", e.target.value)
                }
                className="text-sm bg-transparent border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter solution introduction..."
                rows="3"
              />
              {content.solution?.image && (
                <div className="relative inline-block">
                  <img
                    src={content.solution.image}
                    alt="Solution"
                    className="max-w-xs rounded shadow"
                  />
                  <button
                    onClick={() => handleImageRemove("solution")}
                    className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Remove
                  </button>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "solution")}
                className="block"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {(content.solution?.points || []).map((point, index) => (
                  <div key={index} className="relative">
                    <RichTextEditor
                      value={point}
                      onChange={(newContent) => {
                        const newPoints = [...content.solution.points];
                        newPoints[index] = newContent;
                        handleTextChange("solution", "points", newPoints);
                      }}
                    />
                    <button
                      onClick={() => handleRemoveItem("solution", "points", index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const newPoints = [...(content.solution?.points || []), "<p></p>"];
                  handleTextChange("solution", "points", newPoints);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add Solution Point
              </button>
            </CardContent>
          </Card>
        )}

        {activeSection === "impact" && (
          <Card className="bg-transparent border shadow">
            <CardHeader>
              <CardTitle>
                <textarea
                  value={content.impact?.title || "Impact"}
                  onChange={(e) =>
                    handleTextChange("impact", "title", e.target.value)
                  }
                  className="text-3xl font-bold bg-transparent border-none w-full resize-none focus:outline-none"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(content.impact?.points || []).map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 w-full p-5 relative bg-blue-950 rounded-lg shadow-lg"
                >
                  <input
                    className="bg-transparent text-white border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Impact Heading"
                    value={point.heading}
                    onChange={(e) => {
                      const updated = [...content.impact.points];
                      updated[index].heading = e.target.value;
                      handleTextChange("impact", "points", updated);
                    }}
                  />
                  <textarea
                    className="bg-transparent text-white border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Impact Description"
                    value={point.description}
                    onChange={(e) => {
                      const updated = [...content.impact.points];
                      updated[index].description = e.target.value;
                      handleTextChange("impact", "points", updated);
                    }}
                    rows="3"
                  />
                  <button
                    onClick={() => handleRemoveItem("impact", "points", index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                onClick={() => {
                  const newPoints = [
                    ...(content.impact?.points || []),
                    { heading: "", description: "" },
                  ];
                  handleTextChange("impact", "points", newPoints);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add Impact
              </button>
            </CardContent>
          </Card>
        )}

        {activeSection === "outcome" && (
          <Card className="bg-transparent border shadow">
            <CardHeader>
              <CardTitle>
                <textarea
                  value={content.outcome?.title || "Outcome"}
                  onChange={(e) =>
                    handleTextChange("outcome", "title", e.target.value)
                  }
                  className="text-3xl font-bold bg-transparent border-none w-full resize-none focus:outline-none"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(content.outcome?.points || []).map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 w-full p-5 relative bg-blue-950 rounded-lg shadow-lg"
                >
                  <textarea
                    className="bg-transparent text-white border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Outcome Description"
                    value={point.description}
                    onChange={(e) => {
                      const updated = [...content.outcome.points];
                      updated[index].description = e.target.value;
                      handleTextChange("outcome", "points", updated);
                    }}
                    rows="3"
                  />
                  <button
                    onClick={() => handleRemoveItem("outcome", "points", index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                onClick={() => {
                  const newPoints = [
                    ...(content.outcome?.points || []),
                    { description: "" },
                  ];
                  handleTextChange("outcome", "points", newPoints);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add Outcome
              </button>
            </CardContent>
          </Card>
        )}

        {activeSection === "tech_stack" && (
          <Card className="bg-transparent border shadow">
            <CardHeader>
              <CardTitle>
                <textarea
                  value={content["tech_stack"]?.title || "Technology Stack"}
                  onChange={(e) =>
                    handleTextChange("tech_stack", "title", e.target.value)
                  }
                  className="text-3xl font-bold bg-transparent border-none w-full resize-none focus:outline-none"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(content.tech_stack?.items || []).map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg relative">
                    {item.image && (
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                        />
                        <button
                          onClick={() => {
                            const updatedItems = [...content.tech_stack.items];
                            updatedItems[index].image = null;
                            handleTextChange("tech_stack", "items", updatedItems);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    <div className="flex-1">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => {
                          const updatedItems = [...content.tech_stack.items];
                          updatedItems[index].name = e.target.value;
                          handleTextChange("tech_stack", "items", updatedItems);
                        }}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Technology name"
                      />
                    </div>
                    {!item.image && (
                      <div className="flex items-center">
                        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-sm">
                          Upload Image
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const formData = new FormData();
                                formData.append("image", file);
                                uploadContentImage(formData)
                                  .then((response) => {
                                    const updatedItems = [...content.tech_stack.items];
                                    updatedItems[index].image = response.url;
                                    handleTextChange("tech_stack", "items", updatedItems);
                                  })
                                  .catch((error) => {
                                    console.error("Error uploading image:", error);
                                    Toast({
                                      message: "Error uploading image",
                                      type: "error",
                                      duration: 5000
                                    });
                                  });
                              }
                            }}
                          />
                        </label>
                      </div>
                    )}
                    <button
                      onClick={() => {
                        const updatedItems = content.tech_stack.items.filter((_, i) => i !== index);
                        handleTextChange("tech_stack", "items", updatedItems);
                      }}
                      className="absolute top-1 right-1 text-gray-500 hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const newItems = [
                    ...(content.tech_stack?.items || []),
                    { name: "", image: null }
                  ];
                  handleTextChange("tech_stack", "items", newItems);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add Technology
              </button>
            </CardContent>
          </Card>
        )}
        {activeSection === "testimonials" && (
          <Card className="bg-transparent border shadow">
            <CardHeader>
              <CardTitle>
                <textarea
                  value={content.testimonials?.title || "Testimonials"}
                  onChange={(e) =>
                    handleTextChange("testimonials", "title", e.target.value)
                  }
                  className="text-3xl font-bold bg-transparent border-none w-full resize-none focus:outline-none"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(content.testimonials?.points || []).map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 w-full p-5 relative  rounded-lg shadow-lg"
                >
                  <textarea
                    className="bg-transparent text-black border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Testimonial Content"
                    value={point.content}
                    onChange={(e) => {
                      const updated = [...content.testimonials.points];
                      updated[index].content = e.target.value;
                      handleTextChange("testimonials", "points", updated);
                    }}
                    rows="4"
                  />
                  <input
                    className="bg-transparent text-black border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Author Name"
                    value={point.authorName}
                    onChange={(e) => {
                      const updated = [...content.testimonials.points];
                      updated[index].authorName = e.target.value;
                      handleTextChange("testimonials", "points", updated);
                    }}
                  />
                  <input
                    className="bg-transparent text-black border rounded p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Author Title"
                    value={point.authorTitle}
                    onChange={(e) => {
                      const updated = [...content.testimonials.points];
                      updated[index].authorTitle = e.target.value;
                      handleTextChange("testimonials", "points", updated);
                    }}
                  />
                  {point.image && (
                    <div className="relative inline-block">
                      <img
                        src={point.image}
                        alt="Author"
                        className="max-w-[100px] rounded-full shadow"
                      />
                      <button
                        onClick={() => handleImageRemove("testimonials", index)}
                        className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "testimonials", index)}
                    className="block"
                  />
                  <button
                    onClick={() => handleRemoveItem("testimonials", "points", index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                onClick={() => {
                  const newPoints = [
                    ...(content.testimonials?.points || []),
                    { content: "", authorName: "", authorTitle: "", image: null },
                  ];
                  handleTextChange("testimonials", "points", newPoints);
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Add Testimonial
              </button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CaseStudyEditor;
