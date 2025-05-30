"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { svgMappings } from "../CreatePost/svg_mappings";
import parse from 'html-react-parser';

function CaseStudyPreview({ content }) {

  return (
    <div className="space-y-4 bg-black">
      <section id="project-overview" className="">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#FFFFFF]">
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[#ffffff99]">
            {content?.overview?.description}
          </CardContent>
        </Card>
      </section>

      <section id="Challenge" className="space-y-4">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#FFFFFF]">
              Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[#FFFFFF99]">
            <div className="columns-1 md:columns-2 gap-x-10">
              <ul className="list-disc pl-5 space-y-2">
                {content?.challenge?.points?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

          </CardContent>
        </Card>
      </section>

      <section id="Our-Solution" className="space-y-4 ">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#FFFFFF]">
              Our Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <div className="flex flex-col md:flex-row gap-6">
              <Image
                src={content?.solution?.image ? content?.solution?.image : ""}
                alt="Solution Dashboard"
                width={438}
                height={348}
                className=" rounded-xl"
              />

              <div className="w-full md:w-1/2 text-sm text-[#FFFFFF99] space-y-4">
                <p>
                  {content?.solution?.intro}
                </p>
                <ul className="list-none pl-0 space-y-2">
                  {content?.solution?.points?.map((point, index) => (
                    <li key={index} className="">{parse(point)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="Impact/Outcome" className="space-y-4">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#FFFFFF]">
              Impact/Outcome
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#FFFFFF99]">
            <div className="bg-[#FFFFFF0A] p-4 rounded-lg">
              <h4 className="text-lg font-medium text-[#FFFFFFCC]">
                Simplified Event Management
              </h4>
              <p className=" mt-4 text-[#FFFFFF8F]">
                70% faster event setup with centralized tools. Reduced
                administrative overhead, allowing organizers to focus on
                execution.
              </p>
            </div>
            <div className="bg-[#FFFFFF0A] p-4 rounded-lg">
              <h4 className="text-lg font-medium text-[#FFFFFFA3]">
                Operational Efficiency
              </h4>
              <p className=" mt-4 text-[#FFFFFF8F]">
                Easy to manage multiple events and check the earning from each
                event separately.
              </p>
            </div>
            <div className="bg-[#FFFFFF0A] p-4 rounded-lg">
              <h4 className="text-lg font-medium text-[#FFFFFFCC]">
                Scalability
              </h4>
              <p className=" mt-4 text-[#FFFFFF8F]">
                Built for growth with dynamic forms that adapt to any event
                type, making future updates quick and effortless.
              </p>
            </div>
            <div className="bg-[#D9004C] text-white rounded-lg text-center grid place-content-center p-4 ">
              <span className="text-3xl">70%</span>

              <span className=" text-lg "> Faster event setup</span>
            </div>
            <div className="bg-[#9F00D9] text-white rounded-lg text-center grid place-content-center p-4 ">
              <span className="text-3xl">85%</span>

              <span className=" text-lg "> Attendee engagement</span>
            </div>
            <div className="bg-[#D97400] text-white rounded-lg text-center grid place-content-center p-4 ">
              <span className="text-3xl">100%</span>

              <span className=" text-lg "> Client Satisfaction</span>
            </div>

          </CardContent>
        </Card>
      </section>
      <section className='bg-[#020608] '>
        <div className=' w-[86%] max-w-7xl py-10 mx-auto '>
          <div className="text-center ">
            <h2 className="text-4.5xl font-normal text-white text-opacity-80 ">Our Technology Stack</h2>
          </div>
          <div className="flex justify-center gap-16 flex-wrap mt-10 mb-8">
            {content?.tech_stack?.selectedTech?.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
                style={{
                  width: "65.09px",
                  height: "64.06px",
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{ width: "100%", height: "100%" }}
                >
                  {parse(svgMappings[tech.name])}
                </div>
                <span className="text-white text-sm mt-2 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default CaseStudyPreview;
