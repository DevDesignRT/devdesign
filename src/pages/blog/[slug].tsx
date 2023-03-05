import React, { FC } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Layout from "../../components/Layout/Layout";
import {
  heroBannerBlogData,
  heroBannerBlogPicture,
} from "../../utils/heroBannerData";
import Blog from "../../@types/blog";
import { useLocation } from "@reach/router";
import Picture from "../../components/Picture/Picture";
import { Link } from "gatsby";
import blogPosts from "../../data/blogPosts";
import CreatedStamp from "../../components/CreatedStamp/CreatedStamp";

const BlogPostPage: FC = () => {
  const {
    title,
    subTitle,
    paragraphs,
    buttonText,
    href,
    link,
  } = heroBannerBlogData;
  const location = useLocation();
  const blogPost = blogPosts.find(
    (blogPost: Blog) => blogPost.slug === location.pathname.split("/")[2]
  );
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
    </Layout>
  );
};

export default BlogPostPage;
