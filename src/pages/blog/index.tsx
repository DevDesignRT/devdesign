import React, { FC } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Layout from "../../components/Layout/Layout";
import blogPosts from "../../data/blogPosts";
import {
  heroBannerBlogData,
  heroBannerBlogPicture,
} from "../../utils/heroBannerData";
import Blog from "../../@types/blog";
import Picture from "../../components/Picture/Picture";
import { Link } from "gatsby";
import Button from "../../components/Button/Button";
import CreatedStamp from "../../components/CreatedStamp/CreatedStamp";

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
                return (
                  <article key={blogPost.slug}>
                    <div className="row">
                      <div className="col-md-2">
                        <Picture
                          sources={blogPost.cover.srcSets}
                          src={blogPost.cover.src}
                          alt={blogPost.cover.alt}
                        />
                      </div>
                      <div className="col-md-7">
                        <h2>{blogPost.title}</h2>
                        <CreatedStamp
                          createdAt={new Date(
                            blogPost?.createdAt as string
                          ).toLocaleDateString("us")}
                          createdBy="Roman Tuomisto"
                        />
                      </div>
                      <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <Button
                          buttonText="Read"
                          size="md"
                          type="button"
                          clickHandler={() => {}}
                          link={true}
                          href={`/blog/${blogPost.slug}`}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogsPage;
