"use client";

import { useContext, createContext } from "react";
import { useState } from "react";


const postContext = createContext(null);

export const usePost = () => useContext(postContext);


export const PostContextProvider = ({children}) => {
    
    const [postData, setPostData] = useState({
        title:  "",
        slug: "",
        description: "",
        publishedDate: null
    });
    const [selectedTags, setSelectedTags] = useState([]);
    const [content, setContent] = useState("");
    const [uploadedUrl, setUploadedUrl] = useState(null);
    const [featuredImage, setFeaturedImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);


    const resetPostState = () => {
        setPostData({ title: "", slug: "", description: "" }); 
        setSelectedTags([]); 
        setContent(""); 
        setUploadedUrl(null); 
        setFeaturedImage(null); 
        setSearchTerm(""); 
        setCategories([]); 
    };

    return (
        <postContext.Provider 
        value=
        {{
            postData, setPostData,
            selectedTags, setSelectedTags,
            content, setContent,
            uploadedUrl, setUploadedUrl,
            featuredImage, setFeaturedImage,
            searchTerm, setSearchTerm,
            categories, setCategories,
            resetPostState
        }}
        >
            {children}
        </postContext.Provider>
    )
};