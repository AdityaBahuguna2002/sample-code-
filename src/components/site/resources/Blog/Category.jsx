'use client';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function Category({ selectedCategory, setSelectedCategory, categoryList }) {
  const handleValueChange = (newId) => {
    if (newId === 'all') {
      setSelectedCategory(null); 
    } else {
      const category = categoryList.find((cat) => cat.id === newId);
      if (category) setSelectedCategory(category);
    }
  };


  return (
    <section className="bg-[#00091A]">
      <div className="w-[86%] max-w-7xl relative py-8 text-white mx-auto">
        
        <Tabs
          value={selectedCategory?.id??"all"}
          onValueChange={handleValueChange}
          className=" "
          aria-label="Select a category"
        >
          <TabsList className=" flex flex-wrap gap-3 !justify-start  bg-transparent">
          <TabsTrigger
              value={"all"}
               className=" font-normal rounded-md data-[state=active]:bg-[#9BCFFF] data-[state=active]:text-black bg-gray-900 text-[#9BCFFF] border border-blue-400/10"
            >
              All
            </TabsTrigger>
            {categoryList.length > 0 ? (
              categoryList.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id} 
                  className=" font-normal rounded-md data-[state=active]:bg-[#9BCFFF] data-[state=active]:text-black bg-gray-900 text-[#9BCFFF] border border-[#9BCFFF1A]"
                >
                  {cat.name}
                </TabsTrigger>
              ))
            ) : (
              <p className="text-white">No categories available</p>
            )}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}

export default Category;
