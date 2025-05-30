"use client";
import { useEffect } from "react";
import Tabs from "@/components/admin/customAdminUI/Tabs/Tabs";
import Post from "./Post";
import PreviewDraft from "@/components/admin/previews/Preview";
import { usePost } from "@/app/context/postContext";
import { managePostLocalStorage } from "@/lib/storage/localStorage"; // Import utility
import CaseStudyPreview from "@/components/admin/previews/CaseStudyPreview";

const AddPost = ({ data, postType }) => {
  const {
    postData,
    content,
    uploadedUrl,
    resetPostState,
    categories
  } = usePost();

  const storageKey = managePostLocalStorage(false, postType); 

  useEffect(() => {
    // Only reset state if no data exists in localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey);
      if (!stored) {
        resetPostState();
      }
    }
  }, [storageKey, resetPostState]);

  return (
    <Tabs
      isEdit={false}
      postType={postType}
      tabs={[
        {
          label: "Edit",
          value: "edit",
          content: <Post postType={postType} isEdit={false} tagData={data} />,
        },
        {
          label: "Preview",
          value: "preview",
          content: ( postType === "case-study"?<CaseStudyPreview content={content}/> :
            <PreviewDraft
              postData={postData}
              uploadedUrl={uploadedUrl}
              content={content}
              categories={categories}
            />
          ),
        },
      ]}
    />
  );
};

export default AddPost;