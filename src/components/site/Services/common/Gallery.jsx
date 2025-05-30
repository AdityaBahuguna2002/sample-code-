"use client";

import SectionHeader from "@/components/site/common/SectionHeader";
import { useState } from "react";

const cardsSection = {
  heading: "Discover the Cynoteck Difference",
  description: "Recognized for fast growth, trusted partnerships, and cutting-edge AI solutions.",
  cards: [
    {
      id: 1,
      title: "Proven Expertise",
      description:
        "We’re a certified Salesforce CREST Partner and Microsoft Solutions Partner, helping businesses with CRM and cloud technologies that really work."
    },
    {
      id: 2,
      title: "Recognized Excellence",
      description:
        "Named a Clutch Global Leader 2025 and one of the Top 100 Fastest-Growing Companies by Clutch — proof of our steady growth and strong results."
    },
    {
      id: 3,
      title: "Innovation in AI",
      description:
        "Received the Times Power Brand 2024 award for our work in Artificial Intelligence, highlighting our focus on practical AI solutions."
    },
    {
      id: 4,
      title: "Strong Delivery Team",
      description:
        "Completed over 160 projects with a dedicated team of 250+ developers, delivering reliable and scalable solutions every time."
    }
  ]
};

export default function Gallery() {
  const [selected, setSelected] = useState(cardsSection.cards[0].id);

  return (
    <section className=" bg-[#010743]">
      <div className=" w-[86%] py-16 max-w-7xl mx-auto ">
        <SectionHeader
        title={cardsSection.heading}
        subtitle={cardsSection.description}/>
    <div className="flex  gap-4 w-full min-h-[400px] mt-10 ">
      {cardsSection.cards.map((card,i) => (
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
