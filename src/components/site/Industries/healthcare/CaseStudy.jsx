"use client";
import SectionHeader from "../../common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Caraousel/carousel.css";
function CaseStudy() {

  const caseStudies = {
    sectionTitle: "Case Studies: Transforming Healthcare with Technology ",
    description: "With our technical expertise as a leading healthcare software development firm, we have created multiple innovative apps for healthcare organizations. Here are some of our standout projects.",
    studies: [
      {
        id: 1,
        title: "Cornea Care",
        description: "Cornea Care specializes in dry eye treatment, offering customized solutions for managing records, scheduling appointments, and tracking symptoms, ensuring timely patient care.",
        readMoreLink: "https://cynoteck.com/portfolio/mobile-app-to-manage-dry-eye-diseases/",
        features: [
          "Treatment Tracking",
          "Appointment Management",
          "Notifications & Reminders"
        ]
      },
      {
        id: 2,
        title: "Beck Health System",
        description: "Beck Health System, a healthcare startup, delivers advanced medical services and innovative solutions to improve patient outcomes and operational efficiency.",
        readMoreLink: "https://cynoteck.com/portfolio/transforming-beck-health-system/",
        features: [
          "AI-Powered Assistant",
          "Efficient Data Handling",
          "Improved Patient Engagement"
        ]
      },
      {
        id: 3,
        title: "UME",
        description: "UME, a US healthcare organization with 150+ California locations, partnered with Cynoteck to streamline and automate their claims evaluation process for efficient service delivery.",
        features: [
          "Patient History Access",
          "Automated Tracking & Reporting",
          "Real-Time Workflow Automation"
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

                    <div>
                      <h2 className=" text-white text-4xl  text-opacity-80">{study.title}</h2>
                      <p className=" text-sm text-white text-opacity-70 mt-2 ">{study.description}</p>
                      <div className=" flex flex-wrap gap-x-4 gap-y-3 mt-4">
                        {study.features.map((item, index) =>
                          <span className=" text-primary-300 px-4 py-2 rounded-lg bg-opacity-5 bg-white text-sm " key={index} >{item}</span>
                        )}
                      </div>
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
