"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import { useAuth } from "@/app/context/authContext";
import { publishOrDraftPost, updatePost } from "@/lib/api/admin/postApi";
import {useMutation} from "@tanstack/react-query";
import { usePost } from "@/app/context/postContext";
import { Toast } from "@/components/admin/customAdminUI/Toast/Toast";
import { useRouter } from "next/navigation";
import { managePostLocalStorage } from "@/lib/storage/localStorage";
import { extractHeadings } from "@/utils/toc"; 
import table from "daisyui/components/table";



const Tabs = ({ tabs, isEdit, postType, postId }) => {
  
  // #️⃣ contexts and hooks
  const router = useRouter();// for redirect
  const { auth } = useAuth();// auth context
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const {
      postData,
      selectedTags,
      content,
      uploadedUrl,
      categories
    } = usePost(); // post context
  
  const storageKey = managePostLocalStorage(isEdit, postType); // localstorage key 
    
  const { mutateAsync } = useMutation({ // creating / editing post

    mutationFn: isEdit ? updatePost : publishOrDraftPost,
    onSuccess: (response) => {
      Toast({ message: response.message, type: "success" });
      router.push(`/admin/${postType}/allItem`);
    },

    onError: (error) => {
      Toast({ 
        message: error.error || "Failed to publish post", 
        type: "error" 
      });
    }
  });

  //create meta data 
  const getMetaData = (status) => ({
    title: postData.title,
    slug: postData.slug,
    description: postData.description,
    keywords: selectedTags.map((tag) => tag.name).join(", "),
    ogTitle: postData.title,
    ogDescription: postData.description,
    ogImage: "https://cynoteck.com/wp-content/uploads/2025/04/Cynoteck-1.png",
    twitterCard: "summary_large_image",
    twitterCreator: auth?.twitterHandle || "",
    noIndex: status === "draft",
    noFollow: status === "draft",
    datePublished: status === "published" ? new Date().toISOString() : null,
    dateModified: new Date().toISOString(),
    authorName: auth?.name || "Anonymous",
    publisherName: "https://cynoteck.com/#organization",
    publisherLogo: "https://cynoteck.com/wp-content/uploads/2025/04/Cynoteck-1.png",
    focusKeyword: selectedTags.map((tag) => tag.name).join(", "),
  });

  const handleSubmit = async (status = "draft") => {
   
    const {htmlWithIds , headings} = extractHeadings(content);
    
    
    await mutateAsync({
      id : isEdit ? postId : null,
      title: postData.title,
      slug: postData.slug,
      description: postData.description,
      actualPublishedDate : postData?.publishedDate || null,
      selectedTags,
      categories,
      postType,
      content : postType === "case-study" ? JSON.stringify(content) : htmlWithIds,
      uploadedUrl,
      status,
      tableOfContent: headings,
      meta: getMetaData(status),
    });
    // localStorage.removeItem(storageKey);
  };

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  const renderActionButtons = () => (
    <div className="flex gap-2">
      <button
        onClick={() => handleSubmit("draft")}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
      >
        Save Draft
      </button>
      {auth?.role === "editor" && (
        <button
          onClick={() => handleSubmit("published")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Publish
        </button>
      )}
    </div>
  );

  return (
    <Box sx={{ 
      width: "100%", 
      typography: "body1", 
      maxWidth: "100vw", 
      overflowX: "hidden" 
    }}>
      <TabContext value={activeTab}>
        <Box sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          borderBottom: 1, 
          p: 2 
        }}>
          <TabList onChange={handleTabChange} aria-label="Post tabs">
            {tabs.map((tab) => (
              <Tab 
                key={tab.value} 
                label={tab.label} 
                value={tab.value} 
              />
            ))}
          </TabList>

          {activeTab === "edit" && renderActionButtons()}
        </Box>

        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Tabs;