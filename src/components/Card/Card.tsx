import React, { FC } from "react";
import { ICardProps } from "../../@types/declarations";
import Border from "../HeroBanner/Border";

const Card: FC<ICardProps> = ({ picture, title, content, domain }) => {
  return (
    <a href={domain} target="__blank">
      <figure className="figure card">
        <div className="card--header">
          <h3>{title}</h3>
        </div>
        <Border color="pink" />
        <img
          src={picture.src}
          className="figure-img img-fluid rounded"
          alt={picture.alt}
        />
        <figcaption className="figure-caption card--content">
          <h3>About project</h3>
          {content}
        </figcaption>
      </figure>
    </a>
  );
};

export default Card;
