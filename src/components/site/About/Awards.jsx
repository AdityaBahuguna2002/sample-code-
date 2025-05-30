import Image from 'next/image';
import React from 'react'

function Awards() {
    const badges = [
  {
    type: "Accredited",
    image: "/About/Awards/sales.png",
    subtitle: "Health Cloud",
  },
  {
    type: "Certified",
    image: "/About/Awards/clutch.png",
    subtitle: "Identity and Access Management Architect",
  },
  {
    type: "Certified",
    image: "/About/Awards/firms.png",
    subtitle: "Identity and Access Management Architect",
  },
  {
    type: "Certified",
    image: "/About/Awards/tech.png",
    subtitle: "Identity and Access Management Architect",
  },
  {
    type: "Certified",
    image: "/About/Awards/clutch100.png",
    subtitle: "Identity and Access Management Architect",
  },
  {
    type: "Certified",
    image: "/About/Awards/times.png",
    subtitle: "Identity and Access Management Architect",
  },
];
  return (
     <section className="bg-[#000743]  ">
      <div className="w-[86%] mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-10">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-[#1A223180] border border-[#9BCFFF1A] py-4 px-2 rounded-lg shadow-lg flex flex-col items-center gap-4  text-center"
            >
              <Image src={badge.image} alt={badge.title||"badge"} width={140} height={140} className="  " />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards