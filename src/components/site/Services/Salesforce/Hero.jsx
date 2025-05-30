"use client";
import { Button } from "@/components/site/customSiteUI/button";
import Link from "next/link";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
function Hero() {
  const data = {
    image: "/Services/Salesforce/Hero/hero.jpg", 
    heading: " Salesforce Consulting Services ",
    subHeading:
      "Optimize operations, drive growth, and maximize ROI with tailored Salesforce strategies",
    buttonTitle: "Get Free Consultation",
    quote:
      "Unlike competitors, Cynoteck Technology Solutions Pvt. Ltd. can bridge the gap between business needs and coding functions",
    quoteAuthor: "Aria Ziatabari",
  };

  return (
    <section className="bg-[#00091A] py-[3vh]">
      <div className="w-[86%] max-w-7xl relative py-8 text-white mx-auto">
        <div
          style={{
            backgroundImage: `url(${data.image})`,
          }}
          className="bg-cover bg-center relative bg-no-repeat flex rounded-md justify-center"
        >
          <div
            className="absolute inset-0 rounded-md"
            style={{
              background: "linear-gradient(90deg, #0D0057 10%, rgba(36, 17, 142, 0) 100%)",
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-3 mb-4">
            <div className="p-9 col-span-2">
              <h1
                style={{
                  background: "linear-gradient(90deg, #FFFFFF 60%, rgba(213, 217, 229, 0.67) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-light w-[52vw] text-6xl"
              >
                {data.heading}
              </h1>
              <p className="w-[40vw] text-white mb-16 text-opacity-[72%] font-normal text-xl mt-8">
                {data.subHeading}
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 transition-all font-medium text-sm text-white px-8 py-6 rounded-md"
                asChild
              >
                <Link href="/">{data.buttonTitle}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div
        style={{
            background: "linear-gradient(110deg, #0277F9 0.09%, rgba(0, 7, 67, 0) 26%), #010743"
            
        }}
        className="  -mt-8 relative z-10  flex px-6 gap-1 py-4 rounded-lg w-[50%] mx-auto">
            <BiSolidQuoteAltLeft size={50} />
            <div>
          <p className="text-white text-opacity-[72%] text-[18px] mt-10 ">  {data.quote}</p>
          <p className="text-right font-medium text-opacity-[72%] text-white text-sm mt-2">- {data.quoteAuthor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
