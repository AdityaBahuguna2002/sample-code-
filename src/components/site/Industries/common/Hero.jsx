"use client";

import { Button } from "@/components/site/customSiteUI/button";
import Link from "next/link";

function Hero() {
  const data = {
    image: "/Industries/Healthcare/Hero/Image1.jpg",
    heading: "Experience the Future of Industry Solutions ",
    subHeading:
      "Accelerate growth and future-proof your business with secure, AI-powered and industry-specific solutions from Cynoteck. ",
    buttonTitle: "Talk to our Expert",
  };

  return (
    <section className="bg-[#00091A] py-[3vh] ">
      <div className="w-[86%] py-8 max-w-7xl   text-white  mx-auto ">
        <div
          style={{
            backgroundImage: ` url(${data?.image})`
          }}
          className=" bg-cover bg-center relative bg-no-repeat  flex rounded-md  justify-center"
        >
          <div className="absolute inset-0  bg-custom-gradient-4 rounded-md"></div>
          <div className=" relative z-10 grid grid-cols-3 mb-4 ">
            <div className=" p-9  col-span-2  ">
              <h1
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 45.6%, rgba(213, 217, 229, 0.67) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-light w-[60%] text-6xl"
              >
                {data?.heading}
              </h1>
              <p className=" w-[60%]  text-white mb-16 text-opacity-[72%] font-normal text-xl mt-8">
                {data?.subHeading}
              </p>
              <Button
                className="bg-primary-800 font-medium text-sm text-white px-8 py-6 rounded-md"
                asChild
              >
                <Link href="/">{data?.buttonTitle}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
