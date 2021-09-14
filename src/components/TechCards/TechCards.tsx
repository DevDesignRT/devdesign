import React, { FC } from "react";
import { technologies } from "../../data/technologies";
import TechCard from "../TechCard/TechCard";

const TechCards: FC = () => {
  return (
    <div className="row">
      {technologies.map((technology) => {
        return (
          <div key={technology.id} className="col-4 col-md-2">
            <TechCard technology={technology} />
          </div>
        );
      })}
    </div>
  );
};

export default TechCards;
