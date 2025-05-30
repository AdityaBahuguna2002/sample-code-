"use client";
import { useState, useEffect } from "react";
import Category from "./Category";
import Sidebar from "./Sidebar";
import Listing from "./Listing";
import Pagination from "../../common/Pagination/Pagination";

function CaseStudySection({ staticData }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategoryIds, setSubcategoryIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, subcategoryIds]);

  if (!staticData) {
    return (
      <div className="text-red-500 bg-[#00091A] p-4">Error: No data available</div>
    );
  }

  const { categories, subcategories, caseStudies } = staticData;

  const filteredSubcategories = selectedCategory
    ? subcategories.filter((sub) => sub.categoryId === selectedCategory.id)
    : subcategories;

  const relevantSubcategoryIds =
    subcategoryIds.length > 0
      ? filteredSubcategories
          .filter((sub) => subcategoryIds.includes(sub.id))
          .map((sub) => sub.id)
      : filteredSubcategories.map((sub) => sub.id);

  const filteredCaseStudies = caseStudies?.filter((study) =>
    relevantSubcategoryIds.includes(study.subCategoryId)
  ) || [];

  const totalItems = filteredCaseStudies.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedCaseStudies =filteredCaseStudies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

  return (
    <div className="bg-[#00091A] pb-10 min-h-screen text-white">
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categoryList={categories}
      />

      <section className="w-[86%] relative max-w-7xl mt-10 mx-auto py-8 gap-x-6 grid grid-cols-[25%_75%]">
        <Sidebar
          subcategories={filteredSubcategories}
          selectedCategoryId={selectedCategory?.id}
          setSubcategoryIds={setSubcategoryIds}
        />

        <div className=" flex flex-col gap-3">
          <Listing caseStudies={paginatedCaseStudies} />

          {totalItems > itemsPerPage && (
 <Pagination
 currentPage={currentPage}
 totalPages={totalPages}
 onPageChange={setCurrentPage}
/>
)}

         
        </div>
      </section>
    </div>
  );
}

export default CaseStudySection;
