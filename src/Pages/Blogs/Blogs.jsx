import React from "react";
import { useLoaderData } from "react-router-dom";
import PageBannerBlogs from "../../Shared/PageBanner/PageBannerBlogs";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="">
      <PageBannerBlogs />
      <div className="py-16 container mx-auto grid grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blogs._id} blog={blog} />
      ))}
    </div>
    </div>
  );
};

export default Blogs;
