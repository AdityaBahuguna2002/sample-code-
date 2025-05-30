'use client'
import Carousel from '@/components/site/Caraousel'
function Hero() {
   const data = [
  {
    image: "/Home/Hero/image1.jpg",
    heading: "Salesforce Consulting & Implementation",
    subHeading: "360 Degree customer view - Empower your business with Salesforce. We help create Salesforce solutions with customer experience at the core.",
    buttonTitle: "Get Started"
  },
  {
    image: "/Home/Hero/image2.png",
    heading: "No-Code / Low-Code Platform Development",
    subHeading: "Streamline and automate your business process with rapid application development & value-driven approach.",
    buttonTitle: "Get Started"
  },
  {
    image: "/Home/Hero/image3.jpg",
    heading: "Product Engineering & Digital Transformation",
    subHeading: "Modernize your technology ecosystem, redefine your processes and transform your digital experiences at every touchpoint with our end-to-end IT solutions, designed to keep you ahead.",
    buttonTitle: "Get Started"
  },
  {
    image: "/Home/Hero/image4.jpg",
    heading: "Generative AI & Intelligent Enterprise Solutions",
    subHeading: "Create future-proof AI solutions, drive business value through actionable business-relevant insights and intelligent chatbots.",
    buttonTitle: "Get Started"
  }
];

  return <section className="bg-[#00091A] py-[3vh] " >
<div className="w-[86%] max-w-7xl py-8   text-white  mx-auto ">
 <Carousel data={data} />
</div>
  </section>;
}

export default Hero;
