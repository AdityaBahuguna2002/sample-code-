"use client";

import { useEffect, useState } from "react";
import { managePostLocalStorage } from "@/lib/storage/localStorage";
import { usePost } from "@/app/context/postContext";
import Forms from "../customAdminUI/Forms/Forms";
import SelectedCategories from "../customAdminUI/Categories/SelectedCategories";
import TextEditor from "../customAdminUI/TextEditor/TextEditor";
import CaseStudyEditor from "./caseStudyEditor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Post = ({ isEdit, postType, tagData, postEditData }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  const {
    postData, setPostData,
    selectedTags, setSelectedTags,
    content, setContent,
    uploadedUrl, setUploadedUrl,
    searchTerm, setSearchTerm,
  } = usePost();

  const storageKey = managePostLocalStorage(isEdit, postType);

  if (isEdit && !postEditData) {
    return <div>Loading post data...</div>;
  }

  useEffect(() => {
    if (isEdit && postEditData) {
      setPostData({
        title: postEditData.title || "",
        slug: postEditData.slug || "",
        description: postEditData.description || "",
        publishedDate: postEditData.publishedDate || null,
      });
      setUploadedUrl(postEditData.featuredImage || null);
      setContent(postType === "case-study" ? JSON.parse(postEditData.content) : postEditData.content);
      setSelectedTags(
        tagData?.map((tag) => ({
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
        })) || []
      );
      setIsHydrated(true);
    } else if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setPostData(parsed.postData ?? {});
          setSelectedTags(parsed.selectedTags ?? []);
          setContent(parsed.content ?? "");
          setUploadedUrl(parsed.uploadedUrl ?? null);
          setSearchTerm(parsed.searchTerm ?? "");
        } catch (error) {
          console.error("Failed to parse local storage:", error);
        }
      }
      setIsHydrated(true);
    }
  }, [isEdit, postEditData, storageKey]);

  useEffect(() => {
    if (!isHydrated) return;
    const payload = {
      postData,
      selectedTags,
      content,
      uploadedUrl,
      searchTerm,
    };
    localStorage.setItem(storageKey, JSON.stringify(payload));
  }, [isHydrated, postData, selectedTags, content, uploadedUrl, searchTerm, storageKey]);

  const uniqueTags = [...new Set(tagData)];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Forms
            postData={postData}
            setPostData={setPostData}
            uploadedUrl={uploadedUrl}
            setUploadedUrl={setUploadedUrl}
            labelName="Title"
          />
        </div>

        <div className="flex-1">
          <SelectedCategories
            selectedCategories={selectedTags}
            setSelectedCategories={setSelectedTags}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            uniqueCategories={uniqueTags}
            label="Tags"
          />
        </div>
      </div>

      <div className="w-full max-w-sm">
        <label className="block mb-2 text-sm font-medium text-gray-700">Actual Publish Date</label>
        <DatePicker
          selected={postData.publishedDate ? new Date(postData.publishedDate) : null}
          onChange={(date) =>
            setPostData((prev) => ({
              ...prev,
              publishedDate: date?.toISOString(),
            }))
          }
          dateFormat="yyyy-MM-dd"
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          placeholderText="yyyy-MM-dd"
        />
      </div>

      {postType === "case-study" ? (
        <CaseStudyEditor setContent={setContent} content={content} isEdit={isEdit} />
      ) : (
        <TextEditor setContent={setContent} content={content} />
      )}
    </div>
  );
};

export default Post;
