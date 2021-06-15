import React, { FC } from "react";
import ContactForm from "../components/Contactform/ContactForm";
import ContactInformation from "../components/ContactInformation/ContactInformation";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Picture from "../components/Picture/Picture";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { Avatar } from "../utils/contactInformation";
import {
  heroBannerContactData,
  heroBannerContactPicture,
} from "../utils/heroBannerData";

const Contact: FC = () => {
  const { src, sources, alt } = Avatar;
  const {
    title,
    subTitle,
    paragraphs,
    buttonText,
    href,
    link,
  } = heroBannerContactData;
  return (
    <Layout>
      <HeroBanner
        link={link}
        href={href}
        title={title}
        subTitle={subTitle}
        paragraphs={paragraphs}
        buttonText={buttonText}
        heroBannerImage={heroBannerContactPicture}
      />
      <section className="mainSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Our Team</h3>
            </div>
            <div className="col-md-3">
              <Picture src={src} alt={alt} sources={sources} />
            </div>
            <div className="col-md-9">
              <h4>Software developer</h4>
              <p>Roman Tuomisto</p>
              <p>Full stack developer</p>
              <p>5+ years of experience</p>
              <SocialLinks />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12">
              <h3>Contact us</h3>
            </div>
            <div className="col-md-6 flexCol">
              <ContactInformation />
              <p>
                We'll get you there with best possible solution, based on your
                requrements and needs.
              </p>
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
