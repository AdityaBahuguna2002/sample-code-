import React from "react";

const ListCategories = ({
  uniqueCategories,
  selectedCategories,
  setSelectedCategories,
  setSearchTerm
}) => {
  const handleSelect = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
    setSearchTerm("");
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">All Categories</h2>
      <ul className="max-h-[calc(100vh-200px)] overflow-y-auto border rounded-md">
        {uniqueCategories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => handleSelect(cat)}
            className={`p-2 hover:bg-gray-100 cursor-pointer ${
              selectedCategories.includes(cat) ? "bg-blue-100" : ""
            }`}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListCategories;
