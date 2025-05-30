"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Sidebar({ post }) {
  const [selectedSection, setSelectedSection] = useState("");

  const tableOfContent = JSON.parse(post.tableOfContent);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) setSelectedSection(hash);
  }, []);

  const handleHashChange = () => {
    const hash = window.location.hash.replace("#", "");
    setSelectedSection(hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Card className="bg-[#1C1C1E] sticky top-0 h-screen  border-none bg-transparent shadow-none">
      <CardContent className="p-4 pt-0">
        <p className="text-lg font-medium text-white">Tapan Pandey | {new Date(post.actualPublishedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className=" bg-[#FFFFFF17] rounded-lg mt-10 border  border-[#FFFFFF0A] py-4 ps-3 pr-6">
          <div className="   flex gap-2 items-center">
            <Avatar className="h-12 w-12 ">
              <AvatarImage src="/resources/blog/detail/author.png" alt="User" />
              <AvatarFallback className="bg-gray-200 text-gray-700">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-white">Tapan Pandey</p>
              <p className=" text-[14px] text-opacity-[64%] text-white  ">
                Author
              </p>
            </div>
          </div>
          <hr className=" mt-3  border border-[#82C3FF] " />
          <p className=" mt-3 text-white text-[14px] ">
            AI Consultant at Cynoteck, brings nearly 15 years of IT experience. He has contributed extensively to R&D in file systems across Windows and Linux, with deep expertise in programming and system architecture.
          </p>
          <Link href="#" className="  text-[14px] text-[#82C3FF] " >Read More</Link>
        </div>
        <div className=" bg-[#FFFFFF17] rounded-lg mt-5 border border-[#FFFFFF0A] py-4 ps-3 pr-6">
          <h3 className="text-[18px] font-medium text-[#82C3FF]">
            Table of Content
          </h3>
          {tableOfContent ? (
            <ul className="text-[14px] mt-4 space-y-3">
              {tableOfContent.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center gap-2 hover:text-[#82C3FF] ${selectedSection === item.id
                        ? "text-[#82C3FF] font-semibold"
                        : "text-gray-400"
                      }`}
                  >
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="text-[14px] mt-4 space-y-3">
              <li>
                <a
                  href="#What-is-AI-for-Sales?"
                  className={`flex items-center gap-2 hover:text-[#82C3FF] ${selectedSection === "project-overview"
                      ? "text-[#82C3FF] font-semibold"
                      : "text-gray-400"
                    }`}
                >
                  <span>What is AI for Sales?</span>
                </a>
              </li>
              <li>
                <a
                  href="#Key-AI-Trends-That-Are-Changing-Sales-for-the-Better"
                  className={`flex items-center gap-2 hover:text-[#82C3FF] ${selectedSection === "Challenge"
                      ? "text-[#82C3FF] font-semibold"
                      : "text-gray-400"
                    }`}
                >
                  <span>Key AI Trends That Are Changing Sales for the Better</span>
                </a>
              </li>
              <li>
                <a
                  href="#Key-Factors-to-Consider-When-Choosing AI-Powered-Sales-Tools"
                  className={`flex items-center gap-2 hover:text-[#82C3FF] ${selectedSection === "Our-Solution"
                      ? "text-[#82C3FF] font-semibold"
                      : "text-gray-400"
                    }`}
                >
                  <span>Key Factors to Consider When Choosing AI-Powered Sales Tools</span>
                </a>
              </li>
              <li>
                <a
                  href="#Some-Quick-Tips-to-Choose-the-Right-AI Solution"
                  className={`flex items-center gap-2 hover:text-[#82C3FF] ${selectedSection === "Impact/Outcome"
                      ? "text-[#82C3FF] font-semibold"
                      : "text-gray-400"
                    }`}
                >
                  <span>Some Quick Tips to Choose the Right AI Solution</span>
                </a>
              </li>
            </ul>
          )}

        </div>
      </CardContent>
    </Card>
  );
}

export default Sidebar;
