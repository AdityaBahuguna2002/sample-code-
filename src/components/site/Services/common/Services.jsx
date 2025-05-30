"use client";

import React from "react";
import SectionHeader from "@/components/site/common/SectionHeader";
import Tabs from "@/components/site/common/Tabs";

const services = [
  {
    title: "Cloud & CRM Solutions",
    description:
      "Empower your business with scalable Cloud and CRM solutions tailored to enhance customer interactions and streamline business operations. We specialize in Salesforce, Microsoft Dynamics 365, and Power Platform to centralize data and optimize workflows.",
    image: "/Services/Core/img1.png",
  },
  {
    title: "Artificial Intelligence & Data Analytics",
    description:
      "Leverage the power of AI and Data Analytics to transform data into actionable insights. Our solutions automate decision-making and optimize business processes for smarter, faster outcomes.",
    image: "/Services/Core/img2.png",
  },
  {
    title: "Microsoft Dynamics 365",
    description:
      "Unify your business operations with Microsoft Dynamics 365. Our solutions simplify data integration, streamline processes, and enhance customer service to drive efficiency and growth.",
    image: "/Services/Core/img5.png",
  },
  {
    title: "Product Engineering",
    description:
      "Accelerate innovation with our Product Engineering solutions. We design and build scalable applications that enhance business performance and seamlessly integrate with your ecosystem.",
    image: "/Services/Core/img3.png",
  },
  {
    title: "Salesforce Consulting & Implementation",
    description:
      "Maximize your Salesforce investment with tailored consulting and seamless implementation. We optimize Salesforce to drive business growth, improve engagement, and streamline operations.",
    image: "/Services/Core/img4.png",
  },
];

const CoreServicesTabs = () => {
  const tabs = services.map((service) => ({
    title: service.title,
    content: (
      <div className="bg-[#111827]  rounded-lg shadow-lg">
        <p className="text-lg text-center mx-auto font-normal leading-relaxed max-w-[50vw]">
          {service.description}
        </p>
        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="mt-12 h-60 mx-auto rounded-lg object-cover"
          />
        )}
        <div className="text-center mt-6">
          <p className="text-white text-base font-medium cursor-pointer">Learn More</p>
        </div>
      </div>
    ),
  }));

  return (
    <section className="bg-[#00091A]">
      <div className="w-[86%] max-w-7xl mx-auto text-white py-10">
        <SectionHeader
          title="Our Core Service Areas"
          subtitle="We offer innovative IT solutions across CRM, Application Development, AI, and Digital Transformation to accelerate growth and optimize operations."
          classes="max-w-[550px] text-base leading-relaxed"
        />
        <div className="max-w-6xl mx-auto mt-10">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

export default CoreServicesTabs;
