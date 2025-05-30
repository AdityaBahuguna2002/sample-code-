import React from 'react'
import SectionHeader from '../common/SectionHeader'

function Life() {
     const images = [
    "/About/Life/image1.png",
    "/About/Life/image2.png",
    "/About/Life/image3.png",
    "/About/Life/image3.png",
    "/About/Life/image5.png",
    "/About/Life/image6.png",
    "/About/Life/image7.png",
  ];
  return (
    <section className=' bg-[#0C2E91]'>
    <div className=' w-[86%] py-20 mx-auto'>
 <SectionHeader
        classes="w-[55vw]"
          title="Life at Cynoteck"
          subtitle="Everyday moments that make Cynoteck more than just a workplace."
        />
         <div className="max-w-6xl mt-14 mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.slice(0, 2).map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Team activity ${idx + 1}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.slice(2, 5).map((src, idx) => (
            <div key={idx + 2} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Team activity ${idx + 3}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.slice(5, 7).map((src, idx) => (
            <div key={idx + 5} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Team activity ${idx + 6}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </section>
  )
}

export default Life