"use client";

import SectionHeader from "@/components/site/common/SectionHeader";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Certified Expertise",
    description:
      "We are Gold Microsoft Partner, Salesforce CREST Partner, with 10+ years of experience in Business Central, Salesforce, and custom development.",
  },
  {
    id: 2,
    title: "Global Success",
    description:
      "Have completed 150+ projects delivered across 15+ countries with a 95% client satisfaction rate and strong, lasting partnerships.",
  },
  {
    id: 3,
    title: "Cost-Efficient Delivery",
    description:
      "Our collaboration models are designed to reduce costs and deliver optimal value within your business constraints.",
  },
  {
    id: 4,
    title: "Dedicated Support",
    description:
      "Our reliable support with fast issue resolution helps you keep your operations running smoothly, with minimal downtime.",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(cards[0].id);

  return (
    <section className=" bg-[#010743]">
      <div className=" w-[86%] py-16 max-w-7xl mx-auto ">
        <SectionHeader
        title="Discover the Cynoteck Difference"
        subtitle="Cynoteck combines certified expertise, global delivery, cost-efficient models, and dedicated support to drive lasting business success. ."/>
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
