import Hero from "./Hero";
import BlogSection from "./BlogSection";
import { blogSectionData } from "./staticData/caseStudies";
import Awards from "./Awards";
import Gallery from "../../Industries/common/Gallery";
import Opportunity from "./Opportunity";

const Blog = ()=>{
    return (
    <>
        <Hero/>
        <BlogSection staticData={blogSectionData}/>
        <Awards/>
        <Gallery/>
        <Opportunity />
    </>
   
    )
}

export default Blog;