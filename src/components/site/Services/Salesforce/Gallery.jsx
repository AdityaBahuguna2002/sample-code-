"use client";

import SectionHeader from "@/components/site/common/SectionHeader";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Proven Mastery",
    description: "Einstein Analytics, secure data handling, and industry-specific solutions led by certified professionals.",
  },
  {
    id: 2,
    title: "Trusted Team",
    description: "Our 40+ certified Salesforce professionals with 100,000+ work hours deliver high-value solutions aligned with business goals.",
  },
  {
    id: 3,
    title: "Industry Reach",
    description: "We've built partnerships with 56 clients across diverse industries, completing 300+ custom Salesforce implementations.",
  },
  {
    id: 4,
    title: "Process Strength",
    description: "Strategic planning and secure implementation ensure 70% repeat business with maintained data security and compliance.",
  }
];

export default function Gallery() {
  const [selected, setSelected] = useState("cardUno");

  return (
    <section className=" bg-[#010743]">
      <div className=" w-[86%] py-16 max-w-7xl mx-auto ">
        <SectionHeader
        title="Discover the Cynoteck Difference"
        subtitle="Empowering Growth with Data-Driven Innovation"/>
    <div className="flex  gap-4 w-full min-h-[400px] mt-10 ">
      {cards.map((card,i) => (
        <div
          key={card.id}
          className={`relative flex-1  cursor-pointer transition-all duration-500  overflow-hidden  ${
            selected === card.id ? "flex-[2.5] bg-[#0133D2]   " : " bg-[#0C1F59]"
          }`}
          // style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          onMouseOver={() => setSelected(card.id)}
        >
          
          <h1 className="  px-6 text-white text-opacity-15  text-[80px]">{String(++i).padStart(2, "0")}</h1>
          <div
            className={`absolute inset-0 flex flex-col justify-end   p-6  text-white opacity-0 transition-all duration-500 ${
              selected === card.id ? "opacity-100" : "translate-x-8"
            }`}
          >
            
            <div className="  font-normal ">
            <h1 className="text-3xl text-white text-opacity-80 ">{card.title}</h1>
            <h2 className="text-lg mt-4 text-white text-opacity-70 ">{card.description}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  );
}
