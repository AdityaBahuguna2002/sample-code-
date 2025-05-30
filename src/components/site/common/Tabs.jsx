"use client";
import React, { useState } from "react";

const Tabs = ({ tabs, tabWrapperClass = "", contentWrapperClass = "" }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex relative gap-7">
      <div className={`w-1/3 h-max sticky top-0 space-y-4 ${tabWrapperClass}`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab)}
            className="block w-full text-left px-4 py-3 rounded-lg duration-300"
            style={{
              background:
                selectedTab.title === tab.title
                  ? "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 104.82%)"
                  : "transparent",
              borderImageSource:
                selectedTab.title === tab.title
                  ? "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)"
                  : "none",
            }}
          >
            <span
              className={`${
                selectedTab.title === tab.title
                  ? "text-white text-opacity-80 font-bold text-base"
                  : "text-white text-opacity-65 font-normal text-base"
              }`}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      <div className={`w-2/3 bg-gray-900 p-10 pb-20 rounded-lg shadow-lg ${contentWrapperClass}`}>
        {selectedTab.content}
      </div>
    </div>
  );
};

export default Tabs;
