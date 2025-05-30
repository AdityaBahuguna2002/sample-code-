import Card1 from "@/components/site/common/Cards/Card1";
import SectionHeader from "@/components/site/common/SectionHeader"

function Transforming() {

   const services = [
  {
    icon: "/Industries/healthcare/Transforming/ai.png",
    title: "Artificial Intelligence and Machine Learning",
    description: "We use AI/ML to analyze complex medical data, providing clinical insights for better treatment and cost reduction.",
  },
  {
    icon: "/Industries/healthcare/Transforming/iot.png",
    title: "Internet of Medical Things",
    description: "We enable cross-device connectivity for proactive care through IoT medical device software with real-time data monitoring.",
  },
  {
    icon: "/Industries/healthcare/Transforming/code.png",
    title: "Low Code Solutions",
    description: "We rapidly develop scalable, user-friendly healthcare apps, allowing quick adaptation and feature integration with minimal downtime.",
  },
  {
    icon: "/Industries/healthcare/Transforming/digital.png",
    title: "Digital Engineering",
    description: "Our services transform digital landscapes, implementing EHRs and automating workflows for a better patient experience using AI, cloud, and IoT.",
  },
  {
    icon: "/Industries/healthcare/Transforming/health.png",
    title: "Electronic Health Record (EHR) Software",
    description: "We implement EHRs for efficient patient data management, improving decision-making and the clinician-patient bond.",
  },
  {
    icon: "/Industries/healthcare/Transforming/crm.png",
    title: "Healthcare CRM",
    description: "We customize Salesforce Health Cloud to enhance healthcare process visibility, improve patient experience, and manage patient portals effectively.",
  },
];
      
  return (
    <>
    <section className=" bg-[#00091A]">
        <div className=" pt-10 pb-20 mx-auto max-w-7xl w-[86%]">
    <SectionHeader
    title="Transforming Health Care with Technology "
    subtitle="We digitize healthcare by focusing on data, providing tools for engagement and automation. Our experts personalize and transform care delivery. "
    classes="w-[50vw]"
    />
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <Card1 key={index} {...service} />
          ))}
        </div>
        </div>
    </section>
    </>
  )
}

export default Transforming