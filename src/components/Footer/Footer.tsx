import React from "react";
import ContactInfomation from "../ContactInformation/ContactInformation";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ContactInfomation />
          </div>
          <div className="col-md-4">
            <h4>Follow us</h4>
            <SocialLinks />
          </div>
          <div className="col-md-4">
            <p>
              DevDesign ©2021. All Rights Reserved.
              <br /> Made with &#10084; by{" "}
              <a className="pinkLink" href="https://devdesign.fi">
                DevDesign
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
