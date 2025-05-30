"use client";
import SectionHeader from "../../common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Caraousel/carousel.css";
function CaseStudy() {

 const caseStudies = {
  sectionTitle: "Empowering Businesses through Digital Excellence",
  description:
    "We collaborate with leading brands across diverse industries to achieve impactful outcomes through cutting-edge CRM solutions, driven by the power of Data, Cloud, and AI.",
  studies: [
    {
      id: 1,
      title: "AI-Powered Cold Therapy Assistant for Beck Health",
      challenge:
        "Beck Health aimed to develop an AI-based assistant for interactive cold therapy guidance, enhancing patient support and streamlining healthcare operations.",
      innovation:
        "Built an AI-powered assistant for real-time therapy guidance, boosting patient engagement, operational efficiency, and data-driven decision-making with seamless product setup.",
      technologyUsed: [
        "Azure App Service",
        "OpenAI",
        "LangChain",
        "SQL Server",
        "Redis",
        "Celery"
      ]
    },
    {
      id: 2,
      title: "Streamlined Financial Operations with D365 Business Central",
      challenge:
        "77 Diamonds faced difficulties in optimizing financial processes, streamlining sales, purchases, banking, and automating vendor payments across multiple locations, aiming for reduced manual work and improved accuracy.",
      innovation:
        "Reconfigured Business Central to enhance financial visibility, automate vendor payments, simplify banking processes, and integrate third-party apps—ensuring zero downtime and seamless operations.",
      technologyUsed: [
        "D365 Business Central",
        "VS Code",
        "AL Programming"
      ]
    },
    {
      id: 3,
      title: "Runn TV: Transforming Media & Streaming with Agility",
      challenge:
        "Runn TV, a startup in the media & streaming space, needed a tech partner with startup agility, deep technical expertise, and domain experience to build a scalable B2C platform.",
      innovation:
        "Engineered a cross-platform mobile app with live and on-demand streaming, custom scheduling, EPG for live channels, and advanced content analytics.",
      technologyUsed: [
        "React JS",
        "Java",
        "MySQL",
        "MongoDB",
        "AWS"
      ]
    }
  ]
};


  return (
    <section
      style={{
        background: "linear-gradient(180.62deg, #0C2E91, #010D24)",
      }}
    >
      <div className="mx-auto max-w-7xl py-16 w-[86%]">
        <SectionHeader
          title={caseStudies.sectionTitle}
          subtitle={caseStudies.description}
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="relative mt-10 pb-16 w-full"
        >
          {caseStudies.studies.map((study, index) => {
            return (
              <SwiperSlide  key={index} className="  flex rounded-md  justify-center">
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
                    <p className="text-white text-opacity-80 mb-4">{study.challenge}</p>
                  </div>


                  <div className="mb-6">
                    <h3 className="text-white text-opacity-80 mb-4">Innovation</h3>
                    <p className="text-white text-opacity-80 mb-4"> {study.innovation}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {study.technologyUsed.map((item, index) => (
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
            )
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default CaseStudy;
