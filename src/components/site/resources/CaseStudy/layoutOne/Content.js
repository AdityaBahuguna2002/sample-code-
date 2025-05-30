"use client";
import React from "react";
import Hero from "./Hero";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import parse from 'html-react-parser';

function Content({ content, post }) {
  const { overview, challenge, solution, outcome, impact} = content;
  const colors = ["bg-[#D9004C]", "bg-[#9F00D9]", "bg-[#D97400]"];

  return (
    <div className="space-y-4">
      <Hero post={post} />
      <section id="project-overview" className="">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#FFFFFF]">
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[#ffffff99]">
            {overview ? overview?.description : "A rapidly growing health-tech startup approached Cynoteck to digitize and streamline their event management operations. Traditionally reliant on manual coordination and third-party tools, the client faced challenges in managing large-scale medical conferences, registrations, and on-site logistics."}
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
            <div className=" columns-1 md:columns-2 gap-x-12 gap-y-2">
              <ul className="list-disc pl-5 space-y-2">
                {challenge?.points?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
                {/* <li>
                  Manual event coordination led to frequent errors and delays.
                </li>
                <li>
                  No centralized system for managing attendees, speakers, and
                  schedules.
                </li>
                <li>
                  Difficulty in tracking real-time updates and on-site check-in.
                </li>
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Lack of data insights to measure event success or plan
                  improvements.
                </li>
                <li>
                  Limited scalability as event size and frequency increased.
                </li> */}
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
                src={solution?.image}
                alt="Solution Dashboard"
                width={438}
                height={348}
                className=" rounded-xl"
              />

              <div className="w-full md:w-1/2 text-sm text-[#FFFFFF99] space-y-4">
                <p>
                  {solution?.intro}
                </p>
                <ul className="list-none pl-0 space-y-2">
                  {solution?.points?.map((point, index) => (
                    <li key={index}>{parse(point)}</li>
                  ))}
                  {/* <li className="">
                    <span className="text-[#ffffff] font-medium">
                      A web dashboard
                    </span>
                    <span>
                      &nbsp; for admins to manage events, speakers, and
                      attendees.
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#ffffff] font-medium">
                      Mobile apps
                    </span>
                    <span>
                      &nbsp; for real-time access to schedules, notifications,
                      and check-ins.
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#ffffff] font-medium">
                      Automated workflows
                    </span>
                    <span>
                      &nbsp; for registration, ticketing, and reminders.
                    </span>
                  </li>
                  <li className="">
                    <span className="text-[#ffffff] font-medium">
                      Role-based access control
                    </span>
                    <span>&nbsp; to manage different users seamlessly.</span>
                  </li>
                  <li className="">
                    <span className="text-[#ffffff] font-medium">
                      Built-in analytics
                    </span>
                    <span>&nbsp; to track engagement and event success.</span>
                  </li> */}
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
            {impact.points.map((point, index) => {
              return (
                <div key={index} className="bg-[#FFFFFF0A] rounded-[16px] w-[282.333px] h-[248px] p-[24px]">
                  <div className="flex flex-col gap-2 h-full">
                    <h4 className="text-lg font-medium text-[#FFFFFFCC]">
                      {point.heading}
                    </h4>
                    <p className="text-[#FFFFFF8F] flex-grow">
                      {point.description}
                    </p>
                  </div>
                </div>
              )

            })}
            {/* <div className="bg-[#FFFFFF0A] p-4 rounded-lg">
              <h4 className="text-lg font-medium text-[#FFFFFFCC]">
                
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
            </div> */}

          </CardContent>
        </Card>
      </section>
      <section id="Impact/Outcome" className="space-y-4">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#FFFFFF99]">
            {/* {impact.points.map((point, index) => {
              return (
                <div key={index} className="bg-[#FFFFFF0A] rounded-[16px] w-[282.333px] h-[248px] p-[24px]">
                  <div className="flex flex-col gap-2 h-full">
                    <h4 className="text-lg font-medium text-[#FFFFFFCC]">
                      {point.heading}
                    </h4>
                    <p className="text-[#FFFFFF8F] flex-grow">
                      {point.description}
                    </p>
                  </div>
                </div>
              )

            })} */}
            {/* <div className="bg-[#FFFFFF0A] p-4 rounded-lg">
              <h4 className="text-lg font-medium text-[#FFFFFFCC]">
                
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
            </div> */}
            {outcome.points.map((point, index) => {
              const match = point.description.match(/[%+]/);
              const splitChar = match ? match[0] : ""; // Either '%' or '+'
              const outcomeDescriptionSplit = point.description.split(/[%+]/);

              return (
                <div
                  key={index}
                  className={`${colors[index % colors.length]} text-white rounded-[16px] text-center p-4 w-[285px] h-[114px]`}
                >
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <span className="text-3xl leading-none">
                      {outcomeDescriptionSplit[0]}
                      {splitChar}
                    </span>
                    <span className="text-lg leading-none">
                      {outcomeDescriptionSplit[1]}
                    </span>
                  </div>
                </div>
              );
            })}


          </CardContent>
        </Card>
      </section>


    </div>
  );
}

export default Content;
