import React from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import AutoFitLayout from "./AutoFitLayout";
import { blogLists } from "@/constants";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <Section id="blog">
      <SectionHeading className="mt-10 text-3xl font-bold lg:text-5xl">Blogs</SectionHeading>

      <AutoFitLayout>
        {blogLists.map((blog, idx) => (
          <BlogCard key={blog.title} {...blog} idx={idx} />
        ))}
      </AutoFitLayout>
    </Section>
  );
}
