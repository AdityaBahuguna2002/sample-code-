import Opportunity from "../../Home/Opportunity"
import Gallery from "./Gallery"
import Faq from "@/components/site/common/Faq"
import Hero from "./Hero"
import CaseStudy from "./CaseStudy"
import Services from "./Services"
import Stats from "./Stats"
import TechStack from "./TechStack"
import Transforming from "./Transforming"


function HealthCare() {
   const faqs = [
  {
    question: "Can Cynoteck create individualized mobile apps for healthcare?",
    answer: `
      <p className="text-[16px]">Yes, we create customized and intuitive mobile apps as part of our comprehensive Healthcare IT Services offering.</p>
    `,
  },
  {
    question: "How can patient engagement solutions benefit my practice?",
    answer: `
      <p className="text-[16px]">Our solutions provide customized communication and remote monitoring, increasing patient engagement and care.</p>
    `,
  },
  {
    question: "What advantages do mobile healthcare applications provide?",
    answer: `
      <p className="text-[16px]">They enhance patient engagement, provide technical innovation, improve care coordination, and facilitate better decision-making.</p>
    `,
  },
  {
    question: "How can healthcare business intelligence benefit my organization?",
    answer: `
      <p className="text-[16px]">Our solutions drive healthier financial, clinical, and operational results, enhancing patient experience and efficiency.</p>
    `,
  },
  {
    question: "What information can digital analytics tell you?",
    answer: `
      <p className="text-[16px]">Our predictive analytics predict patient outcomes, enabling clinicians to make informed decisions.</p>
    `,
  },
];
  return (
    <>
    <Hero/>
    <Stats/>
    <Services />
    {/* <Transforming/>
    <TechStack/> */}
    <CaseStudy/>
    <Gallery/>
    {/* <Faq faqs={faqs} /> */}
    <Opportunity/>
    </>
  )
}

export default HealthCare;