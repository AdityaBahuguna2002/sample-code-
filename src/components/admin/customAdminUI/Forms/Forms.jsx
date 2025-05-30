"use client";
import React from "react";
import { uploadFeaturedImage } from '@/lib/api/admin/postApi';
import { removeFeaturedImage } from '@/lib/api/admin/postApi';
import { set } from "react-hook-form";

const Forms = ({
  postData,
  setPostData,
  uploadedUrl,
  setUploadedUrl,
  labelName
}) => {
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleRemoveImage = async () => {
    setUploadedUrl(null);
    if (uploadedUrl) await removeFeaturedImage(uploadedUrl);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    const response = await uploadFeaturedImage(formData);
    setUploadedUrl(response.url);
  };

  return (
    <>
      <label className="block mb-2 text-gray-700">{labelName}</label>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={postData.title}
        onChange={handleChange}
        className="w-full border outline-none border-gray-300 rounded-lg p-2 mb-4"
      />

      <label className="block mb-2 text-gray-700">Slug</label>
      <input
        type="text"
        name="slug"
        placeholder="slug"
        value={postData.slug}
        onChange={handleChange}
        className="w-full border outline-none border-gray-300 rounded-lg p-2 mb-4"
      />

      <label className="block mb-2 text-gray-700">Description</label>
      <div>
      <textarea
        name="description"
        placeholder="Description"
        value={postData.description}
        onChange={handleChange}
        className="w-full border overflow-hidden outline-none min-h-[6rem] h-auto border-gray-300 rounded-lg p-2 mb-4 "
      />

      </div>
      
      <label className="block mb-2 text-gray-700">Featured Image</label>
      {uploadedUrl ? (
        <button
          onClick={handleRemoveImage}
          className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Remove Image
        </button>
      ) : (
        <>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Upload
          </label>
        </>
      )}

      {uploadedUrl && (
        <div className="mt-4">
          <img
            src={uploadedUrl}
            alt="Preview"
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      )}
    </>
  );
};

export default Forms;
