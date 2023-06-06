import React from "react";

const ContactInformation = () => {
  return (
    <>
      <h4>DevDesign</h4>
      <p>
        Y-tunnus: <strong>3183627-3</strong>
      </p>{" "}
      <p>Roman Tuomisto</p>
      <address className="address">
        <a
          className="address--contactLink"
          href="mailto:devdesign@devdesign.fi"
        >
          email: devdesign@devdesign.fi
        </a>
        <a
          className="address--contactLink address--contactLink--second"
          href="tel:+358504919485"
        >
          puh: +358504919485
        </a>
      </address>
    </>
  );
};

export default ContactInformation;
