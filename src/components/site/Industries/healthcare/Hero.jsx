"use client";

import { Button } from "@/components/site/customSiteUI/button";
import Link from "next/link";

function Hero() {
  const data = {
    image: "/Industries/Healthcare/Hero/Image1.jpg",
    heading: "Next-Gen IT Services for a Healthier Future",
    subHeading:
      "We deliver enterprise-grade Healthcare IT Services—from secure patient portals to AI-powered analytics platforms—built for compliance, efficiency, and better outcomes.",
    buttonTitle: "Get Free Consultation",
  };

  return (
    <section className="bg-[#00091A] py-[3vh]">
      <div className="w-[86%] max-w-7xl mx-auto py-8">
        <div
          style={{
            backgroundImage: `url(${data?.image})`,
            minHeight: "500px" // Adjust this value as needed
          }}
          className="bg-cover bg-center relative bg-no-repeat flex items-center rounded-md"
        >
          <div className="absolute inset-0 bg-custom-gradient-4 rounded-md"></div>
          <div className="relative z-10 w-full px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="max-w-2xl"> {/* Controls the width of the text content */}
              <h1
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 45.6%, rgba(213, 217, 229, 0.67) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              >
                {data?.heading}
              </h1>
              <p className="text-white text-opacity-72 font-normal text-lg md:text-xl mb-8">
                {data?.subHeading}
              </p>
              <Button
                className="bg-primary-800 hover:bg-primary-900 font-medium text-sm text-white px-8 py-6 rounded-md transition-colors"
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