import Card1 from "@/components/site/common/Cards/Card1"
import SectionHeader from "@/components/site/common/SectionHeader"

function Transforming() {

   const services = [
  {
    icon: "/Services/Salesforce/Products/marketing.png",
    title: "Marketing Cloud",
    description: "Our Marketing Cloud services help you engage with customers in real time by capturing and unifying data across multiple channels. Enhance automation, analytics, and campaign performance with tailored marketing solutions."
  },
  {
    icon: "/Services/Salesforce/Products/sales.png",
    title: "Sales Cloud",
    description: "We streamline your entire sales process with Salesforce Sales Cloud—automating tasks, tracking leads, and enabling access from any device. Our solutions empower sales teams to close deals faster and more efficiently."
  },
  {
    icon: "/Services/Salesforce/Products/service.png",
    title: "Service Cloud",
    description: "Our Service Cloud implementation improves service quality and responsiveness. Deliver seamless customer support across all channels with unified data and personalized experiences for faster issue resolution."
  },
  {
    icon: "/Services/Salesforce/Products/community.png",
    title: "Salesforce Communities (Experience Cloud)",
    description: "We build custom Salesforce Communities to connect customers, partners, and employees. From self-service portals to knowledge bases and forums, our solutions improve engagement and collaboration."
  },
  {
    icon: "/Services/Salesforce/Products/field.png",
    title: "Field Service",
    description: "Our Field Service solutions enhance scheduling, execution, and real-time tracking. We help you streamline operations and deliver faster, role-specific service with tailored mobile solutions."
  },
  {
    icon: "/Services/Salesforce/Products/einstein.png",
    title: "Salesforce Einstein",
    description: "We integrate Salesforce Einstein to bring AI-driven insights to your business. From predictive analytics to intelligent bots, our solutions help you make smarter decisions and improve customer experiences."
  },
  {
    icon: "/Services/Salesforce/Products/app.png",
    title: "App Cloud",
    description: "Our team designs and delivers robust applications using Salesforce App Cloud. Whether it's a custom enterprise app or an AppExchange solution, we ensure scalability, performance, and alignment with your business goals."
  },
  {
    icon: "/Services/Salesforce/Products/health.png",
    title: "Health Cloud",
    description: "We implement Salesforce Health Cloud to give healthcare providers a 360° view of patients. From EMR integration to care timelines, our solutions enhance engagement, efficiency, and outcomes across the care journey."
  },
  {
    icon: "/Services/Salesforce/Products/appexchange.png",
    title: "AppExchange App Development",
    description: "Our AppExchange development services support ISVs and consulting partners from concept to launch. We handle design, security, compliance, and deployment to bring your app to market faster and with confidence."
  }
];
      
  return (
    <>
    <section className=" bg-[#00091A]">
        <div className=" pt-10 pb-20 max-w-7xl mx-auto w-[86%]">
    <SectionHeader
    title=" Salesforce Products We Specialize In"
    subtitle="We offer core solutions that integrate seamlessly with your current sales stack. Our team can deliver the Salesforce flagship products listed below."
    classes="w-[87vw]"
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