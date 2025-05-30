"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  const [selectedSection, setSelectedSection] = useState("");

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
      <CardHeader className="p-4">
        <Link
          href="/case-study"
          className="bg-[#FFFFFF17] w-max px-3 py-2 rounded-lg text-[14px] text-white flex items-center gap-2 mb-4 hover:bg-[#FFFFFF2A] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to casestudy
        </Link>
        <h3 className="text-[14px] font-medium text-[#FFFFFFA3]">Industry</h3>
        <p className="text-sm text-white">Healthcare Technology</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <h3 className="text-[14px] font-medium text-[#FFFFFFA3]">Location</h3>
        <p className="text-sm text-white">Austin, Texas, USA</p>

        <div className="w-max bg-[#FFFFFF17] rounded-lg mt-5 border border-[#FFFFFF0A] py-4 ps-3 pr-6">
          <h3 className="text-[18px] font-medium text-[#82C3FF]">Table of Content</h3>
          <ul className="text-[14px] mt-4 space-y-1">
            <li>
              <a
                href="#project-overview"
                className={`flex items-center gap-2 hover:text-[#82C3FF] ${
                  selectedSection === "project-overview" ? "text-[#82C3FF] font-semibold" : "text-gray-400"
                }`}
              >
                <span className="text-[16px] text-[#82C3FF]">-</span>
                <span>Project Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#Challenge"
                className={`flex items-center gap-2 hover:text-[#82C3FF] ${
                  selectedSection === "Challenge" ? "text-[#82C3FF] font-semibold" : "text-gray-400"
                }`}
              >
                <span className="text-[16px] text-[#82C3FF]">-</span>
                <span>Challenge</span>
              </a>
            </li>
            <li>
              <a
                href="#Our-Solution"
                className={`flex items-center gap-2 hover:text-[#82C3FF] ${
                  selectedSection === "Our-Solution" ? "text-[#82C3FF] font-semibold" : "text-gray-400"
                }`}
              >
                <span className="text-[16px] text-[#82C3FF]">-</span>
                <span>Our Solution</span>
              </a>
            </li>
            <li>
              <a
                href="#Impact/Outcome"
                className={`flex items-center gap-2 hover:text-[#82C3FF] ${
                  selectedSection === "Impact/Outcome" ? "text-[#82C3FF] font-semibold" : "text-gray-400"
                }`}
              >
                <span className="text-[16px] text-[#82C3FF]">-</span>
                <span>Impact/Outcome</span>
              </a>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default Sidebar;