"use client";
import React, { useState } from "react";
import SectionHeader from "@/components/site/common/SectionHeader";
import { Button } from "@/components/site/customSiteUI/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Application Services",
    image: "/Industries/Healthcare/Services/image1.png",
    content: "We excel at crafting intuitive and forward-thinking mobile applications for healthcare, including telemedicine and remote monitoring solutions. We can also update your current healthcare system."
  },
  {
    title: "Patient Engagement Solutions",
    image: "/Industries/Healthcare/Services/image1.png",
    content: "We develop tailored patient engagement solutions with personalized communication, enabling remote health monitoring through virtual care and data from wearables and IoT devices."
  },
  {
    title: "Digital Analytics",
    image: "/Industries/Healthcare/Services/image1.png",
    content: "Our team collaborates to build valuable mobile healthcare applications, from remote diagnosis to care management, enhancing patient involvement and care coordination."
  },
  {
    title: "Mobile Solutions",
    image: "/Industries/Healthcare/Services/image1.png",
    content: "Our team collaborates to build valuable mobile healthcare applications, from remote diagnosis to care management, enhancing patient involvement and care coordination." 
  },
  {
    title: "Healthcare Business Intelligence",
    image: "/Industries/Healthcare/Services/image1.png",
    content: "Cynoteck's healthcare business intelligence tools drive healthier financial, clinical, and operational outcomes, enhancing patient experience and enabling personalized, effective care."
  },
  {
    title: "Remote Patient Monitoring",
    image: "/Industries/Healthcare/Services/image1.png",
    content: "We develop comprehensive remote patient monitoring software, enabling virtual patient oversight and seamless care delivery through wearables and IoT integration, without disrupting your workflow.  "
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="bg-[#00091A]">
      <div className="w-[86%] max-w-7xl mx-auto text-white py-10">
        <SectionHeader
          classes="  md:w-[55vw]"
          title="Our Healthcare IT Services"
          subtitle="Explore our core Healthcare IT Services, tailored to modern clinical, operational, and patient engagement needs."
        />

        <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row gap-7">
          <div className="w-full md:w-1/3 space-y-4 mb-5">
            {services.map((service, index) => (
              <button
                key={index}
                onMouseEnter={() => setSelectedService(service)}
                className={`relative block w-full duration-300 text-left px-4 py-3 rounded-lg transition-all ${
                  selectedService.title === service.title
                    ? "text-white text-xl text-opacity-80 font-bold"
                    : "text-white text-opacity-65 font-normal hover:text-opacity-80 hover:bg-white/10"
                }`}
                style={{
                  borderImageSource:
                    selectedService.title === service.title
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)"
                      : "none",
                  background:
                    selectedService.title === service.title
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 104.82%)"
                      : "transparent",
                }}
              >
                {service.title}
              </button>
            ))}

            <Button
              className="bg-primary-800 hover:bg-white hover:border hover:border-primary-800 hover:text-primary-800 w-full font-medium text-sm text-white px-8 py-6 rounded-md transition-colors"
              asChild
            >
              <Link href="/">Consult with Us</Link>
            </Button>
          </div>
          
          <div className="w-full md:w-2/3 bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center">
              <p className="text-base md:text-lg w-full md:w-4/5 text-center mx-auto font-normal mb-8">
                {selectedService.content}
              </p>
              <div className="relative w-full h-48 md:h-60">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;