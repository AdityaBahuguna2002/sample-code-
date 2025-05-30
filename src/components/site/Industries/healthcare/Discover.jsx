"use client";

import SectionHeader from "@/components/site/common/SectionHeader";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Proven Mastery",
    description: "From analytics to secure data management, our certified professionals deliver solutions tailored to your industry's unique needs.",
  },
  {
    id: 2,
    title: "Trusted Team",
    description: "With 40+ certified Salesforce experts and over 100,000 hours of experience, we build high-impact solutions aligned with your vision.",
  },
  {
    id: 3,
    title: "Industry Reach",
    description: "56+ clients across healthcare and beyond. 300+ successful custom implementations—each one built to scale and succeed.",
  },
  {
    id: 4,
    title: "Process Strength",
    description: "Strategic planning and compliance-first execution have earned us a 70% repeat business rate—and our clients' lasting trust.",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState("cardUno");

  return (
    <section className=" bg-[#010743]">
      <div className=" w-[86%] py-16 max-w-7xl mx-auto ">
        <SectionHeader
        title="Discover the Cynoteck Difference"
        subtitle="Secure, Scalable Salesforce Solutions That Earn Long-Term Trust. "/>
    <div className="flex  gap-4 w-full min-h-[400px] mt-10 ">
      {cards.map((card,i) => (
        <div
          key={card.id}
          className={`relative flex-1  cursor-pointer transition-all duration-500  overflow-hidden  ${
            selected === card.id ? "flex-[2.5] bg-[#0133D2]   " : " bg-[#0C1F59]"
          }`}
          style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
