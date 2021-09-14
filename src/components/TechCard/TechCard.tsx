import React, { FC } from "react";
import { ITechnology } from "../../@types/declarations";

interface ITechCardProps {
  technology: ITechnology;
}

const TechCard: FC<ITechCardProps> = ({ technology }) => {
  const { url, name, image } = technology;
  return (
    <a href={url} target="__blank" referrerPolicy="no-referrer">
      <div className="techCard">
        <picture className="techCard--picture">
          <img src={image} alt={name} />
        </picture>
        <p>{name}</p>
      </div>
    </a>
  );
};

export default TechCard;
