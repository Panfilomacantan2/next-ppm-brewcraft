import Image from "next/image";
import React from "react";

type Blog = {
  title: string;
  description: string;
  date: string;
  image: string;
};

type BlogCardProps = {
  idx: number;
  title: string;
  description: string;
  date: string;
  image: string;
};

export default function BlogCard({
  idx,
  title,
  description,
  date,
  image,
}: BlogCardProps) {
  return (
    <div
      className="max-h-96 border shadow-sm hover:shadow-lg"
      data-aos="fade-up"
      data-aos-duration={200 * (idx + 1)}
    >
      <div className="h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm text-foreground">{new Date(date).toDateString()}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
