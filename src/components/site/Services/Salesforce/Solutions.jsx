import SectionHeader from "@/components/site/common/SectionHeader";
import StatsSection from "@/components/site/common/StatsSection";

export default function Solutions() {
const solutions = [
    {
      title: "Customized Solutions",
      description: "By utilizing Salesforce customization solutions such as Apex, Visualforce, and Aura Components to maintain flawless user experience.",
    },
    {
      title: "Global Expertise",
      description: "Clients throughout the world trust us, and we have a strong AppExchange presence.",
    },
    {
      title: "Guaranteed Results",
      description: "With over 15+ years of experience, we solve complex challenges and deliver measurable Salesforce results.",
    },
  ];

  const stats = [
  { 
    value: "40,000+", 
    label: "Bespoke Deployments Hours" 
  },
  { 
    value: "75+", 
    label: "Enterprise Client Partnerships" 
  },
  { 
    value: "100+", 
    label: "Certified Expertise Badges" 
  },
  { 
    value: "80+", 
    label: "Seamless Org Migrations" 
  }
];
  return (
    <section className="relative   flex items-center justify-center  ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute bg-custom-gradient-2 inset-0 w-screen h-[100%]      object-cover  `}
      >
        <source src="/Home/Solutions/bg_solution.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 bg-[#00091A] bg-opacity-50"></div> */}

      <div className="relative w-[86%] mt-20 mb-8  max-w-7xl     mx-auto text-white ">
        {/* <div className="   ">
            <h2 className=" ms-4  text-secondary-300 font-normal text-2xl mb-4">
              Future-Ready Solutions
            </h2>
            <h1 className="text-4xl  font-normal ">
              Engineering Excellence <br /> for the Digital Age
            </h1>
          </div> */}

        <SectionHeader
          title=" Your Trusted Salesforce Partner"
          subtitle=" Certified Salesforce CREST Partner delivering tailored, scalable solutions that boost productivity and revenue. Experts in Apex, Visualforce, and Lightning for seamless business transformation."
          classes="w-[55vw]"
        />

        <div className="grid md:grid-cols-3 mt-12 gap-6 ">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className=" p-6 rounded-xl  bg-custom-gradient-1  transition"
            >
              <h3 className="text-2xl text-opacity-[64%] font-bold">
                {solution.title}
              </h3>
              <p className="text-white font-normal text-opacity-[56%] mt-3">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        <div className=" mt-4">
          <StatsSection stats={stats} />
        </div>
      </div>
    </section>
  );
}
