"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/site/common/SectionHeader";
import { Button } from "@/components/site/customSiteUI/button";
import Link from "next/link";
import Tabs from "@/components/site/common/Tabs";

const industriesSection = {
  headline: "Industries We Work For",
  description:
    "Cynoteck simplifies technology with end-to-end solutions, enabling businesses across industries to focus on growth.",
  services: [
    {
      title: "IT-Healthcare",
      description:
        "Cynoteck provides HIPAA-compliant, secure digital solutions for healthcare organizations. From EHR/EMR integrations and telehealth platforms to patient portals and mobile health apps, our solutions are designed to improve care delivery and operational efficiency across global markets.",
      image: "/Industries/Healthcare/Services/image1.png"
    },
    {
      title: "Media & Entertainment",
      description:
        "We build scalable, high-performance solutions for OTT platforms, mobile streaming apps, Smart TV integrations, and FAST channels. Our services support the media lifecycle, from content distribution to monetization, empowering clients in entertainment and educational sectors to innovate and grow.",
      image: "/Industries/Healthcare/Services/image1.png"
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Cynoteck develops end-to-end e-commerce platforms, integrating payment gateways, real-time inventory, logistics, and CRM systems. Whether B2B, B2C, or marketplace models, our solutions enhance customer experience and drive online business success.",
      image:"/Industries/Healthcare/Services/image1.png"
    },
    {
      title: "Service Industry",
      description:
        "From IT consulting to business process outsourcing, Cynoteck supports service providers with workflow automation, custom software development, and data-driven platforms. Our solutions optimize operations for businesses in travel, consulting, education, and more.",
      image: "/Industries/Healthcare/Services/image1.png"
    },
    {
      title: "Legal",
      description:
        "We create secure legal tech solutions for document management, case tracking, billing, and client engagement. Our platforms help legal professionals improve efficiency, reduce manual workloads, and ensure data privacy compliance.",
      image:"/Industries/Healthcare/Services/image1.png"
    },
    {
      title: "Manufacturing",
      description:
        "Our team builds custom software for production automation, IoT integration, inventory control, and supply chain management. We support both discrete and process manufacturing, enhancing visibility, traceability, and operational control.",
      image:"/Industries/Healthcare/Services/image1.png"
    },
    {
      title: "Utilities",
      description:
        "We deliver technology solutions for gas, electricity, water, and waste management sectors. From smart billing systems to infrastructure monitoring tools, our services support operational reliability, compliance, and customer satisfaction in utility networks.",
      image: "/Industries/Healthcare/Services/image1.png"
    }
  ],
  cta: "Book Free Consultation"
};


const CoreServices = () => {
  const tabs = industriesSection?.services.map((service) => ({
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
          title={industriesSection.headline}
          subtitle={industriesSection.description}
          classes="max-w-[550px] text-base leading-relaxed"
        />
        <div className="max-w-6xl mx-auto mt-10">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
