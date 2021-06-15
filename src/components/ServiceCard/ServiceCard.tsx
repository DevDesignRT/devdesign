import React, { FC } from "react";
import { Link } from "gatsby";
import Picture from "../Picture/Picture";
import { IServiceCardProps } from "../../@types/declarations";

const ServiceCard: FC<IServiceCardProps> = ({
  description,
  sources,
  href,
  src,
  alt,
  title,
}) => {
  return (
    <figure className="serviceCard">
      <div className="serviceCard--header">
        <Picture src={src} alt={alt} sources={sources} />
      </div>
      <div className="serviceCard--content">
        <h4>{title}</h4>
        <p>{description}</p>
        <Link to={href}>Get in touch</Link>
      </div>
    </figure>
  );
};

export default ServiceCard;
