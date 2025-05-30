"use client";

import { useState, useEffect } from "react";
import ListCategories from "@/components/admin/customAdminUI/Categories/ListCategories";
import SelectedCategories from "@/components/admin/customAdminUI/Categories/SelectedCategories";
import { checkSlugIsValid } from "@/utils/slugValidation";
import { setNewCategory } from "@/lib/api/admin/categoryApi";
import { Toast } from "../customAdminUI/Toast/Toast";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/app/context/authContext";
import { manageCategoryLocalStorage } from "@/lib/storage/localStorage";
import { usePost } from "@/app/context/postContext";

const AddCategory = ({ data, postType, isEdit, categoryEditData }) => {
  const { auth } = useAuth();
  const { categories, setCategories } = usePost();

  const categoriesStorageKey = manageCategoryLocalStorage(isEdit, postType);

  if (isEdit && !categoryEditData) {
    return <div>Loading...</div>;
  }

  const [formData, setFormData] = useState({ name: "", slug: "" });
  const [slugAvailable, setSlugAvailable] = useState(null);
  const [slugError, setSlugError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [uniqueCategories, setUniqueCategories] = useState(data || []);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Load selected categories from localStorage or categoryEditData
  useEffect(() => {
    if (!auth?.id) return;

    const storedData = localStorage.getItem(categoriesStorageKey);

    if (storedData) {
      const previous = JSON.parse(storedData);
      setSelectedCategories(previous);
      setCategories(previous); // Sync context with local storage
    } else {
      setSelectedCategories(categoryEditData || []);
      setCategories(categoryEditData || []); // Sync context with edit data
    }
  }, [auth?.id, postType, categoryEditData, categoriesStorageKey, setCategories]);

  // Sync selectedCategories to localStorage and PostContext
  useEffect(() => {
    if (!auth?.id) return;

    if (selectedCategories.length > 0) {
      localStorage.setItem(categoriesStorageKey, JSON.stringify(selectedCategories));
      setCategories(selectedCategories); // Update context whenever selectedCategories changes
    }
    // } else {
    //   localStorage.removeItem(categoriesStorageKey);
    //   setCategories([]); // Clear context if no categories are selected
    // }
  }, [selectedCategories, categoriesStorageKey, auth?.id, setCategories]);

  // Debug categories state
  useEffect(() => {
    console.log("Current categories in PostContext:", categories);
  }, [categories]);

  const { mutateAsync } = useMutation({
    mutationFn: setNewCategory,
    onSuccess: ({ data: newCategory }) => {
      setUniqueCategories((prev) => [...prev, newCategory]);
      setSelectedCategories((prev) => [...prev, newCategory]);
      setCategories((prev) => [...prev, newCategory]); // Update context with new category
      setFormData({ name: "", slug: "" });
      Toast({ message: "Category added successfully", type: "success" });
    },
    onError: (error) => {
      Toast({ message: error.error || "Failed to add category", type: "error" });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "slug") {
      if (!value.trim()) {
        setSlugAvailable(null);
        setSlugError(null);
        return;
      }
      const { status, message } = checkSlugIsValid(value);
      setSlugError(status ? null : message);
      setSlugAvailable(status);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.slug) {
      Toast({ message: "Name and slug are required", type: "error" });
      return;
    }
    await mutateAsync({ postType, formData });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        {/* Name input */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block mb-2 text-gray-700">Name</label>
          <input
            name="name"
            placeholder="Category Name"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        {/* Slug input */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block mb-2 text-gray-700">Slug</label>
          <input
            name="slug"
            placeholder="slug"
            className={`w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 ${
              slugError ? "focus:ring-red-500 border-red-500" : "focus:ring-blue-500"
            }`}
            onChange={handleChange}
            value={formData.slug}
          />
          {formData.slug && (
            <>
              {slugAvailable && <p className="text-green-500 text-sm">Slug is available</p>}
              {slugError && <p className="text-red-500 text-sm">{slugError}</p>}
            </>
          )}
        </div>

        {/* Selected Categories */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <SelectedCategories
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            uniqueCategories={uniqueCategories}
            label="Categories"
          />
        </div>

        {/* Submit */}
        <div className="flex">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Add
          </button>
        </div>
      </div>

      {/* All Categories List */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ListCategories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          setSearchTerm={setSearchTerm}
          uniqueCategories={uniqueCategories}
        />
      </div>
    </div>
  );
};

export default AddCategory;