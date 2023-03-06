import React, { FC } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Layout from "../../components/Layout/Layout";
import blogPosts from "../../data/blogPosts";
import {
  heroBannerBlogData,
  heroBannerBlogPicture,
} from "../../utils/heroBannerData";
import Blog from "../../@types/blog";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";

const BlogsPage: FC = () => {
  const {
    title,
    subTitle,
    paragraphs,
    buttonText,
    href,
    link,
  } = heroBannerBlogData;
  return (
    <Layout>
      <HeroBanner
        link={link}
        href={href}
        title={title}
        subTitle={subTitle}
        paragraphs={paragraphs}
        buttonText={buttonText}
        heroBannerImage={heroBannerBlogPicture}
      />
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-12 my-4">
              {blogPosts.map((blogPost: Blog) => {
                return <BlogPostCard key={blogPost.slug} blogPost={blogPost} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogsPage;
