import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="py-6 container mx-auto grid grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blogs._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
