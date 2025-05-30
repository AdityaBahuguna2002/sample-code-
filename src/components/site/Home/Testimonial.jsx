import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../customSiteUI/avatar";
import { Button } from "../customSiteUI/button";
import Link from "next/link";

function Testimonial({testimonial}) {
  const data = {
    name: "Alexander Castillo",
    desc: "Team Cynoteck is professional, efficient, and extremely helpful. They all are very proficient in CRM and have help guided our firm for the last year. Each of the team members at Cynoteck that we have interacted with are a real team player.",
    designation: "Founder – Requestky, LLC",
    image: "https://github.com/shadcn.png",
  };
  return (
    <section className="bg-[#00091A]  py-10 ">
      <div className="  grid lg:grid-cols-[40%_60%] gap-y-5 w-[86%] max-w-7xl mx-auto">
        <div>
          <span className=" ms-2 w-min grid place-content-center px-3 py-2 text-sm text-secondary-300 bg-white bg-opacity-5">
            Testimonials
          </span>
          <h1 className=" lg:w-[365px] leading-[1.3] font-normal text-white text-3xl lg:text-5xl text-opacity-[80%]">
            Our commitment to excellence{" "}
          </h1>
          <h3 className=" lg:w-[280px] mt-4 mb-10 text-white text-opacity-[64%]">
            Our commitment to excellence is reflected in our clients’
            experiences
          </h3>
          <Button
            className="bg-primary-800 text-sm text-white px-4 py-3 rounded-md"
            asChild
          >
            <Link href="/">View All</Link>
          </Button>
        </div>
        <div className=" relative  py-14 lg:py-11 lg:px-8">
          <Image
            src={"/Home/Testimonial/Quote.png"}
            alt="Testimonial-quote"
            className=" -left-5 lg:left-0 top-0 absolute"
            width={102}
            height={80}
          />
          <div className=" rounded-xl bg-custom-gradient-2 p-6 lg:p-10  ">
            <p className="text-white   ">{testimonial? testimonial?.content :data?.desc}</p>
            <div className=" flex justify-end ">
              <div className=" flex mt-10 items-center gap-3 ">
                <Avatar>
                  <AvatarImage src={testimonial?testimonial?.image:data?.image} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className=" text-sm font-medium text-white text-opacity-[72%] ">
                    {testimonial? testimonial?.authorName :data?.name}
                  </p>
                  <p className=" text-[12px] text-white text-opacity-[64%] ">
                    {testimonial? testimonial?.authorTitle : data?.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
