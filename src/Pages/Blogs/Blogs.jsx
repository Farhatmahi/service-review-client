import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import PageBannerBlogs from "../../Shared/PageBanner/PageBannerBlogs";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  useTitle('Blogs')
  return (
    <div className="">
      <PageBannerBlogs />
      <div className="py-16 container lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blogs._id} blog={blog} />
      ))}
    </div>
    </div>
  );
};

export default Blogs;
