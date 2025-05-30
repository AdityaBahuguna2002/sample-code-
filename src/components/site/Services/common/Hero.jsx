"use client";
import { Button } from "@/components/site/customSiteUI/button";
import Link from "next/link";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Hero() {
  const data = {
    image: "/Services/Salesforce/Hero/hero.jpg",
    heading: "Transforming Business operations with End-to-End IT Solutions ",
    subHeading: "Explore our tailored solutions in CRM, Product Engineering, Digital Transformation, AI & Data Analytics to transform your business operations.",
    buttonTitle: "Talk to Our Expert",
    quote: "Unlike competitors, Cynoteck Technology Solutions Pvt. Ltd. can bridge the gap between business needs and coding functions",
    quoteAuthor: "Aria Ziatabari",
  };

  return (
    <section className="bg-[#00091A] py-6 md:py-12">
      <div className="container mx-auto px-4 md:w-[86%] max-w-7xl text-white">
        {/* Hero Image Section */}
        <div
          style={{ backgroundImage: `url(${data.image})` }}
          className="bg-cover bg-center relative bg-no-repeat rounded-lg flex justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, #0D0057 10%, rgba(36, 17, 142, 0) 100%)",
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 py-8 md:py-12 w-full">
            <div className="col-span-1 md:col-span-2 p-6 md:p-10">
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 md:mb-6 max-w-[90%] md:max-w-[60vw] text-white/90"
              >
                {data.heading}
              </h1>
              <p className="text-base md:text-xl text-white/70 font-normal mb-6 md:mb-8 max-w-[90%] md:max-w-[40vw]">
                {data.subHeading}
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 transition-all font-normal text-sm md:text-base text-white px-6 py-3 md:px-4 md:py-4 rounded-md"
                asChild
                aria-label="Contact our expert team"
              >
                <Link href="/contact">{data.buttonTitle}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          style={{
            background: "linear-gradient(110deg, #0277F9 0.09%, rgba(0, 7, 67, 0) 26%), #010743",
          }}
          className="relative z-10 mx-auto mt-4 md:-mt-8 flex gap-4 px-6 py-6 rounded-lg w-full md:w-[60%] lg:w-[50%]"
          aria-label="Testimonial quote"
        >
          <BiSolidQuoteAltLeft size={40} className="flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="text-white/70 text-base md:text-lg mb-2">{data.quote}</p>
            <p className="text-right text-white/70 text-sm md:text-base font-medium">
              - {data.quoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;