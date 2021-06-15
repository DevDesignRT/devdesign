import React from "react";
import { IServiceCardProps } from "../@types/declarations";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Picture from "../components/Picture/Picture";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import {
  heroBannerMainData,
  heroBannerMainPicture,
} from "../utils/heroBannerData";
import { indexPageSEO } from "../utils/profileProjects";
import { services } from "../utils/services";

const App = () => {
  const {
    title,
    subTitle,
    paragraphs,
    buttonText,
    href,
    link,
  } = heroBannerMainData;
  return (
    <Layout>
      <HeroBanner
        link={link}
        href={href}
        title={title}
        subTitle={subTitle}
        paragraphs={paragraphs}
        buttonText={buttonText}
        heroBannerImage={heroBannerMainPicture}
      />
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Our Services</h3>
            </div>
            {services.map((service: IServiceCardProps) => {
              return (
                <div key={service.id} className="col-md-4 col-sm-6">
                  <ServiceCard
                    href={service.href}
                    title={service.title}
                    alt={service.alt}
                    src={service.src}
                    sources={service.sources}
                    description={service.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h3>
                DevDesign tarjoaa HAKUKONEOPTIMOINTI - SEO (SEARCH ENGINE
                OPTIMIZATION) Palvelua vuodesta 2016.
              </h3>
              <article className="flexSection">
                <Picture
                  alt={indexPageSEO.alt}
                  sources={indexPageSEO.sources}
                  src={indexPageSEO.src}
                />
                <p>
                  Hakukoneoptimoinnin tehtävä on parantaa näkyvyyttä
                  hakukoneissa, tekemällä toimenpiteitä, joilla pyritään
                  parantamaan verkkosivuston sijoitusta Googlen luonnollisissa
                  hakutuloksissa tiettyjä hakusanoja käytettäessä. Suomalaiset
                  hakevat Googlessa jopa yli 30 miljoonaa kertaa päivittäin -
                  näin ollen hakukoneista saatujen asiakkaiden määrä on erittäin
                  suuri! Tietoa etsitään usein tarpeen, tuotteen tai palvelun
                  nimellä.
                </p>
              </article>
              <p>
                Hakukoneoptimoinnilla varmistat, että yrityksesi kotisivut
                löytyvät hakutuloksista silloin, kun juuri sinun toimialasi
                tuotteita ja palveluja etsitään sekä voit saavuttaa
                mahdollisimman hyvän näkyvyyden luonnollisissa hakutuloksissa
                juuri sinun toimialasi kannalta tärkeimmillä hakutermeillä.
              </p>
              <p>
                DevDesign tarjoaa SEO-palvelut räätälöitynä juuri teidän tarpeen
                mukaan. Varmista Sivujesi näkyvyys jo tänään pyytämällä juuri
                sinun yrityksellesi sopiva tarjous.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
