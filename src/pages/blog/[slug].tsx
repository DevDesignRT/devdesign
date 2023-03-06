import React, { FC } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { heroBannerBlogData } from "../../utils/heroBannerData";
import Blog from "../../@types/blog";
import { useLocation } from "@reach/router";
import blogPosts from "../../data/blogPosts";
import CreatedStamp from "../../components/CreatedStamp/CreatedStamp";
import { IHeroBannerImageProps } from "../../@types/declarations";
import BlogPostLayout from "../../components/Layout/BlogPostLayout";

const BlogPostPage: FC = () => {
  const { title, buttonText, href, link } = heroBannerBlogData;
  const location = useLocation();
  const blogPost = blogPosts.find(
    (blogPost: Blog) => blogPost.slug === location.pathname.split("/")[2]
  );
  return (
    <BlogPostLayout title={blogPost?.title as string}>
      <HeroBanner
        link={link}
        href={href}
        title={title}
        subTitle={blogPost?.title as string}
        paragraphs={[`Time to read: ${blogPost?.timeToRead}`]}
        buttonText={buttonText}
        heroBannerImage={(blogPost?.cover as unknown) as IHeroBannerImageProps}
      />
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>{blogPost?.title}</h3>
              <CreatedStamp
                createdAt={new Date(
                  blogPost?.createdAt as string
                ).toLocaleDateString("us")}
                createdBy="Roman Tuomisto"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: (blogPost?.body as unknown) as string,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </BlogPostLayout>
  );
};

export default BlogPostPage;
