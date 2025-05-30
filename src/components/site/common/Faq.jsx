'use client'
import React, { useState } from "react";

import Link from "next/link";
import { Button } from "../customSiteUI/button";

const Faq = ({faqs}) => {
   

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#00091A] py-12">
      <div className="w-[86%] mx-auto grid grid-cols-[60%_40%] gap-8">
        <div className="">
          <h2 className="text-white text-4.5xl font-normal mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <button
                  className={` ${openIndex === index?"text-primary-300 text-left ":" text-white text-opacity-65"} w-full  font-medium flex justify-between  text-2xl py-3 focus:outline-none`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className={` text-xl`}>{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div
                  className="text-white text-opacity-70 text-sm mt-2"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
                )}
              </div>
            ))}
          </div>
        </div>

        <div >
          <div className="sticky top-8 flex flex-col items-center  bg-[#FFFFFF0A]  p-6 rounded-xl shadow-md border border-[#9BCFFF1A] text-white">
            <h3 className="text-xl text-white text-opacity-80  font-normal">Still Have Questions? Let’s Talk </h3>
            <p className="text-white text-opacity-55 text-lg  mt-2">Our experts are here to help.</p>
            <Button
                className="bg-primary-800 font-medium mt-5 text-sm text-white px-8 py-6 rounded-md"
                asChild
              >
                <Link href="/">Contact Us</Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
