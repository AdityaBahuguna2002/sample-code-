"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
function Card1({ caseStudy }) {
  return (
    <Card className=" flex flex-col  border-none !bg-[rgba(155,207,255,0.1)]   rounded-xl ">
      <CardHeader>
        <img
          src="/postType/caseStudy/cs1.png"
          alt={caseStudy.title}
          className="  rounded-lg"
        />
      </CardHeader>
      <CardContent className="flex-1 gap-3 flex flex-col">
  <CardTitle className="text-lg text-[#FFFFFFA3] font-semibold">
    {caseStudy.title}
  </CardTitle>
  <p className="text-sm text-[rgba(255,255,255,0.56)] mt-3">
    {caseStudy.description}
  </p>
  <Link
    className="w-full mt-auto flex justify-between items-center text-[rgba(130,195,255,1)]"
    href={"/blog-post/"+caseStudy.slug}
  >
    <span>View Blog</span>
    <MdArrowOutward className="text-white" size={25} />
  </Link>
</CardContent>

    </Card>
  );
}

export default Card1;
