"use client";

import Tabs from "@/components/admin/customAdminUI/Tabs/Tabs";
import AddCategory from "../AddCategory/AddCategory";
import Post from "../CreatePost/Post";
import PreviewDraft from "../previews/Preview";
import { usePost } from "@/app/context/postContext";
import CaseStudyPreview from "../previews/CaseStudyPreview";



const EditPost = ({postType, tags, category, data}) => {

  const {
    postData,
    content, 
    uploadedUrl,
  } = usePost();


  return(
    <
      Tabs
      isEdit = {true}
      postType={postType}
      postId = {data.id}
      tabs={[
              { 
                label: "Edit", 
                value: "edit", 
                content: <Post postType={postType} isEdit={true} tagData={tags.data} postEditData={data} /> 
              },
              {
                label: "Category", 
                value: "category", 
                content: <AddCategory isEdit={true} data={category.data}  postType={postType} categoryEditData={data.Categories}/>
              },
              { 
                label: "Preview", 
                value: "preview", 
                content: postType === "case-study" ? <CaseStudyPreview content={content}/>  : <PreviewDraft postData={postData} featuredImage={uploadedUrl} content={content} /> 
              },
          ]}
    />
  )
}


export default EditPost;