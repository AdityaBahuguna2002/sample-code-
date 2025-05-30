import Link from "next/link";
import { Button } from "@/components/site/customSiteUI/button";

export default function Opportunity({heading, description, cta}) {  
  return (
    // <section className="relative h-min flex  items-center bg-no-repeat bg-cover  justify-center"  style={{ backgroundImage: "url('/Home/Opportunity/Opportunity.gif')" }}>
      <section className="relative h-min flex items-center bg-opportunity bg-no-repeat bg-cover justify-center">

      {/* <video autoPlay loop muted playsInline className="absolute object-cover object-top  inset-0 w-screen h-[100%]  ">
        <source src="/Home/Opportunity/Opportunity.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="absolute inset-0 bg-custom-gradient-3 bg-opacity-50"></div>

      <div className="relative max-w-7xl w-[86%] mt-20 mb-48 grid  grid-cols-2 text-white">
        <div className=" flex justify-end ">
        <h2 className="  items-end text-[40px] w-[480px] font-normal   text-white text-opacity-80 ">Stay Up to Date with Our Expert Blogs  </h2>
        </div>
        <div className="   ">
          <p className=" text-white text-opacity-70 text-sm w-[400px] mt-10" >
            Dive into the newest trends, practical advice, and in-depth explanations of Salesforce, Microsoft 365, AI, and emerging technologies. Our Blogs are crafted to inform you with knowledge that sparks innovation and powers business growth.
          </p>
          <Button className="bg-primary-800 text-sm font-medium text-white px-5 py-5 mt-10 rounded-md" asChild>
                <Link href="/">{ cta ? cta : "Explore Opportunities!"} </Link>
              </Button>
        </div>
      </div>
      <div>

      </div>
    </section>
  );
}
