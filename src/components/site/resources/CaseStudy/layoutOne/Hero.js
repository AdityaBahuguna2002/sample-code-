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
import { ChevronLeft } from "lucide-react";

function Hero({post}) {
  return (
    <Card className=" bg-transparent border-none shadow-none">
      <CardHeader className="p-6">
        <CardTitle className="text-4xl  font-medium leading-tight  text-[#FFFFFFCC]">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 pb-0 ">
      <div className="relative w-full h-[416px] rounded-lg overflow-hidden">
  <Image
    src={post.featuredImage}
    alt={post.title || "Event Setup"}
    fill
    className="rounded-[16px] object-cover"
    sizes="(max-width: 768px) 100vw, 895px"
  />
</div>

      </CardContent>
    </Card>
  );
}

export default Hero;