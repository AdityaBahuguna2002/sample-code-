"use client";
import React, { useState } from "react";
import SectionHeader from "@/components/site/common/SectionHeader";
import Link from "next/link";
import { Button } from "@/components/site/customSiteUI/button";
import Image from "next/image";

const services = [
  {
    title: "Strategic Consulting",
    description: "Aligning Salesforce CRM with your business objectives to drive growth and efficiency",
    features: [
      {
        heading: "Aligning with Business Objectives",
        description: "We align Salesforce CRM with your OKRs to accelerate sales cycles and deliver comprehensive performance insights."
      },
      {
        heading: "Mapping to Features",
        description: "We translate your business requirements into practical Salesforce capabilities, leveraging Flow Builder, assignment rules, and forecasting tools."
      },
      {
        heading: "Edition Recommendation",
        description: "Through careful analysis of API needs and feature requirements, we identify the optimal Sales Cloud edition for your organization."
      },
      {
        heading: "Workflow & Adoption Design",
        description: "We implement strategic automation with Flows, establish effective role hierarchies, and create an onboarding process enhanced by CRM usage analytics."
      }
    ]
  },
  {
    title: "Implementation",
    description: "Complete Salesforce CRM setup tailored to your business processes",
    features: [
      {
        heading: "360° Customer View",
        description: "Integrate data with Service Cloud to provide Leads, opportunities, accounts and activities."
      },
      {
        heading: "Workflow Automation",
        description: "Use Flow Builder to automate activities like tasks on a recurring schedule."
      },
      {
        heading: "Integrated Experience",
        description: "Sync systems with Salesforce APIs for real-time access."
      },
      {
        heading: "Cloud Suite Leverage",
        description: "Utilize App Cloud, Marketing Cloud, and Service Cloud for comprehensive solutions."
      }
    ]
  },
  {
    title: "Customization",
    description: "Tailored Salesforce solutions for your industry-specific needs",
    features: [
      {
        heading: "Industry-Specific Modules",
        description: "Create new entities to store data specific to your requirements."
      },
      {
        heading: "Custom Object Creation",
        description: "Replace fields with custom objects such as Text, Date/Date-Time, Master-Detail Relationships."
      },
      {
        heading: "Workflow Automation",
        description: "Utilize Apex Triggers and Flow Builder to implement Field Updates, Email Alerts, Task Creation, and Outbound Messages."
      },
      {
        heading: "Dashboard Customization",
        description: "Build reports to track territories and segment profitability."
      }
    ]
  },
  {
    title: "Migration",
    description: "Secure and seamless transition to Salesforce platform",
    features: [
      {
        heading: "Data Security",
        description: "Encrypt records throughout migration with support for Territory Management to enhance sales operations."
      },
      {
        heading: "Operational Stability",
        description: "Ensure smooth upgrades using Change Sets, Salesforce CLI, or modern DevOps solutions for seamless deployments."
      },
      {
        heading: "Data Accuracy",
        description: "Validate transfers to maintain data integrity with Salesforce Duplicate Management to prevent duplicates."
      },
      {
        heading: "Migration Strategy",
        description: "Evaluate requirements for an optimal Salesforce transfer."
      }
    ]
  },
  {
    title: "Support and Maintenance",
    description: "Proactive care to ensure Salesforce stability and performance",
    features: [
      {
        heading: "24/7 Support",
        description: "Provide around-the-clock Service Cloud assistance."
      },
      {
        heading: "Data Management",
        description: "Handle uploads and scrubbing to ensure Salesforce correctness."
      },
      {
        heading: "System Maintenance",
        description: "Perform security audits and health checks."
      },
      {
        heading: "Performance Optimization",
        description: "Monitor and optimize system load, query performance, and user experience."
      }
    ]
  }
];

const Types = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="bg-[#00091A]">
      <div className="w-[86%] max-w-7xl mx-auto text-white pt-16 pb-10">
        <SectionHeader
          classes="w-full md:w-[60vw]"
          title="Our Salesforce Development Services"
          subtitle="Our expertise lies in delivering a comprehensive range of Salesforce professional services, offering you more than just Salesforce product applications that perfectly align with your business objectives."
        />

        <div className="max-w-6xl mx-auto mt-11 flex flex-col md:flex-row gap-7">
          <div className="w-full md:w-1/3 space-y-4 mb-5">
            {services.map((service, index) => (
              <button
                key={index}
                onMouseEnter={() => setSelectedService(service)}
                className={`relative block w-full duration-300 text-left px-4 py-3 rounded-lg transition-all ${
                  selectedService.title === service.title
                    ? "text-white text-xl text-opacity-80 font-bold"
                    : "text-white text-opacity-65 font-normal hover:text-opacity-80 hover:bg-white/10"
                }`}
                style={{
                  borderImageSource:
                    selectedService.title === service.title
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)"
                      : "none",
                  background:
                    selectedService.title === service.title
                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 104.82%)"
                      : "transparent",
                }}
              >
                {service.title}
              </button>
            ))}

            <Button
              className="bg-primary-800 hover:bg-white hover:border hover:border-primary-800 hover:text-primary-800 w-full font-medium text-sm text-white px-8 py-6 rounded-md transition-colors"
              asChild
            >
              <Link href="/">Send Your Requirements</Link>
            </Button>
          </div>
          
          <div className="w-full md:w-2/3 bg-gray-900 p-7 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
            <p className="text-white text-opacity-80 mb-6">{selectedService.description}</p>
            
            <div className="grid gap-6">
              {selectedService.features.map((feature, index) => (
                <div key={index} className="border-l-2 border-primary-800 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">{feature.heading}</h4>
                  <p className="text-white text-opacity-70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;