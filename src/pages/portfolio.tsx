import React, { FC } from "react";
import { ICardProps } from "../@types/declarations";
import Card from "../components/Card/Card";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import {
  heroBannerPortfolioData,
  heroBannerPortfolioPicture,
} from "../utils/heroBannerData";
import { ProfileProjects } from "../utils/profileProjects";

const Portfolio: FC = () => {
  const {
    title,
    subTitle,
    paragraphs,
    buttonText,
    href,
    link,
  } = heroBannerPortfolioData;
  return (
    <Layout>
      <HeroBanner
        link={link}
        href={href}
        title={title}
        subTitle={subTitle}
        buttonText={buttonText}
        paragraphs={paragraphs}
        heroBannerImage={heroBannerPortfolioPicture}
      />
      <section>
        <div className="container">
          <div className="row my-5">
            {ProfileProjects.map((ProfileProject: ICardProps) => {
              return (
                <div key={ProfileProject.id} className="col-6 col-md-4">
                  <Card
                    id={ProfileProject.id}
                    title={ProfileProject.title}
                    content={ProfileProject.content}
                    picture={ProfileProject.picture}
                    domain={ProfileProject.domain}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
