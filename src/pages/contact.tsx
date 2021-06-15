import React, { FC } from "react";
import ContactForm from "../components/Contactform/ContactForm";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Picture from "../components/Picture/Picture";
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
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Picture src={src} alt={alt} sources={sources} />
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
