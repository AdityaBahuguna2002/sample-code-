"use client";
import React from "react";
import SectionHeader from "@/components/site/common/SectionHeader";
import Tabs from "@/components/site/common/Tabs";

const founding = [
  {
    name: "Udit Handa",
    designation: "CEO",
    image: "/About/Leadership/founder1.png",
  },
  {
    name: "Anshul Verma",
    designation: "President (US Operations)",
    image: "/About/Leadership/founder2.png",
  },
  {
    name: "Amit Kundaliya",
    designation: "Founding Partner",
    image: "/About/Leadership/founder3.png",
  },
];

const business  = [
  {
    name: "Anil Semwal",
    designation: "Director Sales",
    image: "/About/Leadership/founder1.png",
  },
  {
    name: "Bhuwan Joshi",
    designation: "Business Development Manager",
    image: "/About/Leadership/founder2.png",
  },
  {
    name: "Hemant Doshi",
    designation: "Head of U.S. Sales",
    image: "/About/Leadership/founder3.png",
  },
];

const leadership  = [
  {
    name: "Abhishek Singh",
    designation: "CEO",
    image: "/About/Leadership/founder1.png",
  },
  {
    name: "Nitin Dangwal",
    designation: "President (US Operations)",
    image: "/About/Leadership/founder2.png",
  },
  {
    name: "Pooja Sharma",
    designation: "Founding Partner",
    image: "/About/Leadership/founder3.png",
  },
  {
    name: "Vipin Joshi",
    designation: "Founding Partner",
    image: "/About/Leadership/founder3.png",
  },
  {
    name: "Subodh Dharmwan",
    designation: "Founding Partner",
    image: "/About/Leadership/founder3.png",
  },
  {
    name: "Saurabh Bhatt",
    designation: "Founding Partner",
    image: "/About/Leadership/founder3.png",
  },
  {
    name: "Tapan Pandey",
    designation: "Practice Lead- AI & Data Science",
    image: "/About/Leadership/founder3.png",
  },
];

const Services = () => {
  const tabs = [
    {
      title: "Founding Team",
      content: (
        <div className="grid grid-cols-3  gap-y-6 gap-x-6">
          {founding.map((item, index) => (
            <div key={index} className="relative">
              <img src={item.image} alt={item.name} />
              <div className="bg-[#23303E] rounded-xl absolute -bottom-10 inset-x-2 px-4 py-2 shadow-md">
                <p className="text-white text-sm font-bold">{item.name}</p>
                <p className="text-white text-xs font-normal">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Business Development",
      content:  <div className="grid grid-cols-3 gap-y-6 gap-x-6">
          {business.map((item, index) => (
            <div key={index} className="relative">
              <img src={item.image} alt={item.name} />
              <div className="bg-[#23303E] rounded-xl absolute -bottom-10 inset-x-2 px-4 py-2 shadow-md">
                <p className="text-white text-sm font-bold">{item.name}</p>
                <p className="text-white text-xs font-normal">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>,
    },
    {
      title: "Leadership Team",
      content:  <div className="grid grid-cols-3  gap-6 gap-y-16">
          {leadership.map((item, index) => (
            <div key={index} className="relative">
              <img src={item.image} alt={item.name} />
              <div className="bg-[#23303E] rounded-xl absolute -bottom-10 inset-x-2 px-4 py-2 shadow-md">
                <p className="text-white text-sm font-bold">{item.name}</p>
                <p className="text-white text-xs font-normal">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>,
    },
  ];

  return (
    <section className="bg-[#00091A]">
      <div className="w-[86%] max-w-7xl mx-auto text-white py-10">
        <SectionHeader
          classes="w-[55vw]"
          title="Our Leadership"
          subtitle="Guiding vision. Driving Excellence"
        />
        <div className="max-w-6xl mx-auto mt-8">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

export default Services;
