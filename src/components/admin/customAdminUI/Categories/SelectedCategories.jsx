import React from 'react'

const SelectedCategories = ({
  selectedCategories,
  setSelectedCategories,
  setSearchTerm,
  searchTerm,
  uniqueCategories,
  label,
}) => {
  const handleSelect = (cat) => {
    // Avoid duplicates
    if (!selectedCategories.find((c) => c.id === cat.id)) {
      setSelectedCategories([...selectedCategories, cat]);
    }
    setSearchTerm("");
  };

  const handleUnselect = (category) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat.id !== category.id));
  };

  const filteredCategories = uniqueCategories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Select {label}</h2>

      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {searchTerm && (
        <ul className="max-h-40 overflow-y-auto border rounded-md mb-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <li
                key={cat.id}
                onClick={() => handleSelect(cat)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {cat.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No matches found</li>
          )}
        </ul>
      )}

      <h3 className="text-lg font-medium mb-2">{`Selected ${label}`}</h3>
      {selectedCategories.length > 0 ? (
        <ul className="max-h-60 overflow-y-auto border rounded-md">
          {selectedCategories.map((cat) => (
            <li
              key={cat.id}
              className="flex justify-between items-center p-2 border-b last:border-b-0"
            >
              <span>{cat.name}</span>
              <button
                onClick={() => handleUnselect(cat)}
                className="text-red-500 hover:text-red-700 hover:cursor-pointer"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No categories selected yet.</p>
      )}
    </>
  );
};

export default SelectedCategories;
