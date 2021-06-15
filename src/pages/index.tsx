import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Picture from "../components/Picture/Picture";
import {
  heroBannerMainData,
  heroBannerMainPicture,
} from "../utils/heroBannerData";
import { indexPageSEO } from "../utils/profileProjects";

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
