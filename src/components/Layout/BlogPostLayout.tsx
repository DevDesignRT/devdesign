import React, { FC } from "react";
import { Helmet } from "react-helmet";
import "../../styles/main.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Border from "../HeroBanner/Border";

interface BlogPostLayoutProps {
  title: string;
}

const BlogPostLayout: FC<BlogPostLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DevDesign {` - ${title}`}</title>
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

export default BlogPostLayout;
