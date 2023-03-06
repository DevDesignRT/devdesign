import React, { FC } from "react";
import Blog from "../../@types/blog";
import Button from "../Button/Button";
import CreatedStamp from "../CreatedStamp/CreatedStamp";
import Picture from "../Picture/Picture";
import "./BlogPostCard.scss";

interface BlogPostCardProps {
  blogPost: Blog;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ blogPost }) => {
  const { title, createdAt, cover, slug } = blogPost;
  return (
    <article className="blogPostCard">
      <div className="row">
        <div className="col-md-2">
          <Picture sources={cover.sources} src={cover.src} alt={cover.alt} />
        </div>
        <div className="col-md-7">
          <h2>{title}</h2>
          <CreatedStamp
            createdAt={new Date(createdAt as string).toLocaleDateString("us")}
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
            href={`/blog/${slug}`}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
