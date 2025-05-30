import React from 'react'

function Apart() {
  let cards = [
    { image: "/About/Apart/growth.png", heading: "Responsive & Reliable", desc: "We prioritize your timelines with fast support and quick turnarounds, ensuring your business stays on track without delays." },
    { image: "/About/Apart/office.png", heading: "Process-Driven", desc: "Our structured and transparent delivery models provide clarity, predictability, and consistent quality across every phase." },
    { image: "/About/Apart/work.png", heading: "Innovation", desc: "We actively explore and adopt next-gen technologies, bringing fresh thinking and future-ready solutions to every project." },
  ]
  return (
    <>
      <section className=' py-16 bg-[#00091A]'>
        <div className=' w-[86%] mx-auto'>
          <h1 className=' text-white text-center text-3xl font-medium'>What Sets Us Apart</h1>
          <div className=' text-white gap-12   mt-10 grid grid-cols-3 '>
            {cards?.map((item, index) =>
              <div key={index} className=' p-6 hover:bg-[#7e8a8c] duration-200 rounded-xl space-y-5'>
                <img src={item?.image} />
                <h2 className=' text-lg font-medium '>{item?.heading}</h2>
                <p className='text-sm font-medium'>{item?.desc}</p>
              </div>)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Apart