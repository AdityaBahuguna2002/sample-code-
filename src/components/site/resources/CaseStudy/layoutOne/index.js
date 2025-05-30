import React from 'react'
import Sidebar from './Sidebar'
import Content from "./Content"
import TechStack from '../../../Industries/healthcare/TechStack'
import Testimonial from '../../../Home/Testimonial'
import Opportunity from '../../../Home/Opportunity'

export default function index({post}) {
  const content = JSON.parse(post.content);
  console.log(content)
  return (
    <>
  <section className=' bg-[#00091A]'>
    <div className="w-[86%] relative max-w-7xl  mx-auto py-12 gap-x-6 grid grid-cols-[23%_77%]">
    <Sidebar/>
    <Content content={content} post={post}/>
    </div>
    </section>
    <TechStack tech={content.tech_stack.items} />
    <Testimonial testimonial={content.testimonials.points[0]}/>
    <Opportunity/>
    </>
  )
}
