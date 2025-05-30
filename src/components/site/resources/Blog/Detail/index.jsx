import Link from "next/link"
import Hero from "./Hero"
import { ArrowLeft } from "lucide-react"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaMailchimp,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Opportunity from "@/components/site/Home/Opportunity";

function index({post}) {
  return (
    <>
    <Hero post={post}/>
     <section className="bg-[#00091A] py-[4vh]">
      <div className="w-[86%] max-w-7xl flex justify-between items-center  mx-auto text-white">
        <Link
          href="/blog-post"
          className="bg-[#FFFFFF17] w-max px-3 py-2 rounded-lg text-[14px] text-white flex items-center gap-2  hover:bg-[#FFFFFF2A] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
         <div className="flex items-center ms-1 gap-2">
            <span className=" rounded-full p-2 bg-[#3B5998]">
              <FaFacebookF size={14} className="    text-white cursor-pointer" />
            </span>
            <span className=" rounded-full p-2 bg-[#1DA1F2]">
              <FaTwitter size={14} className="   text-white cursor-pointer" />
            </span>
            <span className=" rounded-full p-2 bg-[#ee2a7b]">
              <FaInstagram size={14} className="   text-white cursor-pointer" />
            </span>
            <span className=" rounded-full p-2 bg-[#BD081C]">
              <FaPinterest
                size={14}
                className="   text-white cursor-pointer"
              />
            </span>
          </div>
      </div>
      </section>
      <section className="bg-[#00091A] "><div className="w-[86%]   relative max-w-7xl  mx-auto py-12 gap-x-1 grid grid-cols-[32%_68%]">
    <Sidebar post={post}/>
    <Content post={post}/>
    </div>
    </section>
     <Opportunity/>

    </>
  )
}

export default index