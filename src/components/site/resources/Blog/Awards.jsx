import SectionHeader from "@/components/site/common/SectionHeader";
import Image from "next/image";

const badges = [
    {
        type: "Accredited",
        image: "/Services/Salesforce/Awards/salesforce.png",
        subtitle: "Health Cloud",
    },
    {
        type: "Certified",
        image: "/Services/Salesforce/Awards/top_clutch.png",
        subtitle: "Identity and Access Management Architect",
    },
    {
        type: "Certified",
        image: "/Services/Salesforce/Awards/clutch_growth.png",
        subtitle: "Identity and Access Management Architect",
    },
    {
        type: "Certified",
        image: "/Services/Salesforce/Awards/global_clutch.png",
        subtitle: "Identity and Access Management Architect",
    },
    {
        type: "Certified",
        image: "/Services/Salesforce/Awards/tech_reviewer.png",
        subtitle: "Identity and Access Management Architect",
    },
];

function Awards() {
    return (
        <section className="bg-[#00091A] pb-20 text-white ">
            <div className="w-[86%] mx-auto max-w-7xl ">
                <SectionHeader title="Best In Class Service" />
                <div className=" flex gap-20  justify-center items-center  mx-auto mt-10  ">
                    <Image
                        src="/Services/Salesforce/Awards/main.png"
                        alt="Clutch Awards"
                        width={294}
                        height={274}
                        className="   "
                    />
                    <div className=" space-y-6 w-[40%] text-white text-opacity-70 text-sm ">
                        <p className="">
                            We are proud to be a Salesforce CREST Partner and a Microsoft Solutions Partner, helping businesses navigate digital transformation with cutting-edge CRM and cloud solutions.
                        </p>
                        <p>            
                            Our dedication to excellence has earned us recognition as a Clutch Global Leader 2025, along with a spot among Clutch’s Top 100 Fastest-Growing Companies. Our forward-thinking approach to Artificial Intelligence has also been celebrated with the Times Power Brand 2024 Award for Excellence in AI.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 border border-[#9BCFFF1A] py-4 px-2 rounded-lg shadow-lg flex flex-col items-center gap-4  text-center"
                        >
                            <p className=" font-bold text-[18px] text-white text-opacity-80 ">{badge.type}</p>
                            <Image src={badge.image} alt={badge.title || "badge"} width={140} height={140} className="mb-4" />
                            <p className="text-sm text-white text-opacity-70">{badge.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Awards;
