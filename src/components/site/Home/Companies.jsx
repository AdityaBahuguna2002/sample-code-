"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../customSiteUI/button";
import { cn } from "@/utils/utils";

export default function Companies() {
  const [activeCategory, setActiveCategory] = useState("Healthcare");

  const categories = ["Healthcare", "Media & Entertainment", "Retail & E-commerce", "Real Estate"];

  const companyLogos = {
    Healthcare: [
      { name: "JLL", src: "/Home/Companies/Health/image1.png" },
      { name: "Microsoft", src: "/Home/Companies/Health/image2.png" },
      { name: "MobilePOS", src: "/Home/Companies/Health/image3.png" },
      { name: "Womem For Women International", src: "/Home/Companies/Health/image4.png" },
      { name: "LavaBox", src: "/Home/Companies/Health/image5.png" },
    ],
    "Media & Entertainment": [
        { name: "JLL", src: "/Home/Companies/Health/image1.png" },
        { name: "Microsoft", src: "/Home/Companies/Health/image2.png" },
        { name: "MobilePOS", src: "/Home/Companies/Health/image3.png" },
        { name: "Womem For Women International", src: "/Home/Companies/Health/image4.png" },
        { name: "LavaBox", src: "/Home/Companies/Health/image5.png" },
    ],
    "Retail & E-commerce": [
        { name: "JLL", src: "/Home/Companies/Health/image1.png" },
        { name: "Microsoft", src: "/Home/Companies/Health/image2.png" },
        { name: "MobilePOS", src: "/Home/Companies/Health/image3.png" },
        { name: "Womem For Women International", src: "/Home/Companies/Health/image4.png" },
        { name: "LavaBox", src: "/Home/Companies/Health/image5.png" },
    ],
    "Real Estate": [
        { name: "JLL", src: "/Home/Companies/Health/image1.png" },
        { name: "Microsoft", src: "/Home/Companies/Health/image2.png" },
        { name: "MobilePOS", src: "/Home/Companies/Health/image3.png" },
        { name: "Womem For Women International", src: "/Home/Companies/Health/image4.png" },
        { name: "LavaBox", src: "/Home/Companies/Health/image5.png" },
    ],
  };

  return (
    <section className="relative h-min flex  items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute  inset-0 w-screen h-full object-cover ">
        <source src="/Home/Companies/company_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-custom-gradient-3 bg-opacity-50"></div>

      <div className="relative w-[86%] my-20 flex flex-col items-center text-white">
        <span className="text-sm rounded-lg bg-white bg-opacity-5 px-3 py-2 text-[#9BCFFF] tracking-wide">Companies</span>
        <h2 className=" text-3xl lg:text-5xl w-full  lg:w-[800px] text-center text-white text-opacity-80 my-6">
          Trusted by Leading Companies Across Industries
        </h2>
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {categories.map((category) => (
            <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
                "px-6 py-2 text-sm font-normal rounded-full transition-all duration-300 focus:outline-none hover:bg-primary-200 " ,
                activeCategory === category
                  ? "bg-primary-200 text-black shadow-md"
                  : "bg-transparent text-primary-200 border border-primary-200 hover:text-black focus:bg-primary-200"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap  justify-center gap-8 mt-10 lg:mt-4">
          {companyLogos[activeCategory].map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <Image src={company.src} alt={company?.name||"company name"} width={180} height={96} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
