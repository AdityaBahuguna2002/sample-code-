"use client";
import SectionHeader from "../../common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../Caraousel/carousel.css";
function CaseStudy() {

 const caseStudies= {
  sectionTitle: "Success Stories Across Industries",
  description: "Explore how we've helped organizations in diverse sectors solve complex challenges, streamline operations, and unlock growth through smart digital solutions.",
  studies: [
    {
      id: 1,
      title: "Retro APP BV",
      challenge:
        "Our client wants a mobile app that acts like a virtual tour guide, the feature he wants in the app is (to give tourists correct, interesting, and location-based information). Another challenge for us is to make the app run fluently on every platform with our easy-to-use design for people visiting new cities.",
      solution:
        "Cynoteck created a working mobile app that can be used on different devices and meets all the client's needs. The app had a user-friendly design, a map with GPS for directions, and a system to manage content. Tourists could enjoy audio tours, get notifications based on their location, and easily find places they wanted to visit. The app was built to grow, helping Retro APP BV to add more cities without any trouble."
    },
    {
      id: 2,
      title: "CorneaCare",
      challenge:
        "The client was looking for a system to manage treatment records and appointment timing. He also wants to manage and track symptoms such as light sensitivity, redness of eye, and other daily experiences.",
      solution:
        "We provide two prototypes of an app one is a patient app that manages records and progress, and the other is a doctor app that accesses patient data and reports. Additionally, we have incorporated a check-in feature for appointment reminders and admin panels.",
      features: [
        "Treatment Tracking",
        "Appointment Management",
        "Notifications & Reminders"
      ]
    },
    {
      id: 3,
      title: "N-Fuzed",
      challenge:
        "The client, a licensed cannabis product manufacturer in the U.S., faced major operational inefficiencies due to fragmented systems—LeafLink for sales, Expensify for expense tracking, and QuickBooks for finance. This disjointed setup created challenges in consolidating business data, delayed decision-making, and limited visibility into critical metrics. With rapid growth and increasing operational demands, the need to centralize business functions became urgent.",
      solution:
        "Cynoteck delivered an integrated solution using Microsoft Dynamics Business Central (DBC) as the unified platform. Through custom extensions and bi-directional data flows, LeafLink and Metric were synced with DBC, while QuickBooks and Expensify were also seamlessly connected. Power BI was implemented to visualize real-time financial and sales data. The phased migration ensured zero downtime, while the scalable architecture positioned the client for sustained growth and improved productivity."
    }
  ],
  
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
                    <h3 className="text-white text-opacity-80 mb-4">Solution</h3>
                    <p className="text-white text-opacity-80 mb-4"> {study.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {study.features?.map((item, index) => (
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
