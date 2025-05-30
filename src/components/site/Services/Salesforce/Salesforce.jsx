"use client";
import SectionHeader from "../../common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Caraousel/carousel.css";
import Image from "next/image";

function CaseStudy() {
  const caseStudies = {
    sectionTitle: "Salesforce AppExchange Solutions by Cynoteck",
    description: "Cynoteck focuses on delivering business value while leveraging Salesforce's security, scalability, and reliability.",
    studies: [
      {
        id: 1,
        title: "Dynamic Data View",
        description: "Real-Time Insights Without Code: Enhance Lightning layouts with filters, CSV exports, and responsiveness. Ensure high performance with no maintenance costs.",
        features: [
          "Fast query execution",
          "No recurring fees",
          "High responsiveness"
        ],
        challenge: "Standard Salesforce views lack flexibility for dynamic data presentation",
        innovation: "Delivers configurable data views without custom development",
        image: "/Services/Salesforce/Products/dynamic-data-view.png" // Add appropriate image path
      },
      {
        id: 2,
        title: "CTK Dynamic Related List",
        description: "Create dynamic lists tailored to specific conditions without custom development. Solves the challenge of standard Salesforce related lists lacking filtering capabilities.",
        features: [
          "Fast performance",
          "Low maintenance",
          "Zero recurring fees"
        ],
        innovation: "Condition-based filtering without code",
        image: "/Services/Salesforce/Products/dynamic-related-list.png" // Add appropriate image path
      },
      {
        id: 3,
        title: "DataPro Tools",
        description: "Lightning-ready setup for GDPR, CCPA, and HIPAA compliance. Solves the challenge of manually managing evolving data privacy laws.",
        features: [
          "No usage limits",
          "Professional-grade",
          "Lightning compatible"
        ],
        innovation: "Automated compliance management",
        image: "/Services/Salesforce/Products/datapro-tools.png" // Add appropriate image path
      },
      {
        id: 4,
        title: "Contract Pod AI",
        description: "AI-powered contract management directly in Salesforce. Solves inefficiencies in manual contract processes.",
        features: [
          "Real-time sync",
          "Cost reduction",
          "Lightning Ready"
        ],
        innovation: "AI-driven contract automation",
        image: "/Services/Salesforce/Products/contract-pod-ai.png" // Add appropriate image path
      },
      {
        id: 5,
        title: "CTK Email Parser App",
        description: "Native parsing rules mapped directly to Salesforce objects. Solves inefficient manual email handling.",
        features: [
          "Lightning-native",
          "Flexible parsing",
          "Operational efficiency"
        ],
        innovation: "Automated email-to-record processing",
        image: "/Services/Salesforce/Products/email-parser.png" // Add appropriate image path
      }
    ]
  };

  return (
    <section style={{
      background: "linear-gradient(180.62deg, #0C2E91, #010D24)",
    }}>
      <div className="mx-auto max-w-7xl py-16 w-[86%]">
        <SectionHeader
          title={caseStudies.sectionTitle}
          subtitle={caseStudies.description}
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            }
          }}
          className="relative mt-10 pb-16 w-full"
        >
          {caseStudies.studies.map((study) => (
            <SwiperSlide key={study.id} className="flex rounded-md justify-center">
              <div className="  grid grid-cols-2 gap-6 ">
                <img
                  className=" rounded-md h-full "
                  src="/Industries/Healthcare/Slider/slider1.png"
                  alt="Salesforce"
                />
                <div className=" rounded-md p-8 "
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 104.82%)"
                  }}
                >

                  <h2 className="text-white text-3xl lg:text-4xl font-medium mb-4">{study.title}</h2>

                  <div className="mb-6">
                    <h3 className="text-white text-opacity-80 mb-4">Challenge</h3>
                    <p className="text-white text-opacity-80 mb-4">{study.description}</p>
                  </div>


                  <div className="mb-6">
                    <h3 className="text-white text-opacity-80 mb-4">Innovation</h3>
                    <p className="text-white text-opacity-80 mb-4"> {study.innovation}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {study.features.map((item, index) => (
                      <span
                        key={index}
                        className="text-primary-300 px-4 py-2 rounded-lg bg-white bg-opacity-5 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CaseStudy;