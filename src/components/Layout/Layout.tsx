import React from "react";
import { Helmet } from "react-helmet";
import "../../styles/main.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Border from "../HeroBanner/Border";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          DevDesign{" "}
          {` - ${
            typeof window !== "undefined"
              ? window.location.pathname.substring(
                  1,
                  window.location.pathname.length
                )
              : ""
          } Helsinki`}
        </title>
        <link rel="canonical" href="https://www.devdesign.fi" />
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
        <Border color="pink" />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
