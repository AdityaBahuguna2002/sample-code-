"use client";
import React from "react";
import "./content.css"


function Content({post}) {
  return (
    <div className="space-y-4">
      <section  className="tiptap">
      {post?.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
      </section>
    </div>
  );
}

export default Content;
