import {
  IExtendedHeroBannerProps,
  IHeroBannerImageProps,
} from "../@types/declarations";

export const heroBannerMainPicture: IHeroBannerImageProps = {
  title: "DevDesign heroimage",
  src:
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623477162/DevDesign/heroimage.png",
  alt: "DevDesign heroimage",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623477162/DevDesign/heroimage.png",
      media: "(min-width:650px)",
    },
  ],
};

export const heroBannerMainData: IExtendedHeroBannerProps = {
  title: "DevDesign",
  subTitle: "What we do",
  paragraphs: [
    "Toteutamme juuri teidän tarpeisiinne räätälöidyn verkkosivusto kokonaisuuden titokannasta käyttäjäystävälliseen UX:ään, yli 5-vuoden kokemuksella.",
    "Lue lisää tavastamme toteuttaa verkkosivuston ja saattaa se loppukäyttäjienne käyttöön.",
  ],
  buttonText: "Get in touch ",
  heroBannerImage: heroBannerMainPicture,
  href: "/contact",
  link: true,
};

export const heroBannerPortfolioPicture: IHeroBannerImageProps = {
  title: "DevDesign Webdevelopment",
  src:
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623492503/DevDesign/webdev.png",
  alt: "DevDesign Webdevelopment",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623492503/DevDesign/webdev.png",
      media: "(min-width:650px)",
    },
  ],
};

export const heroBannerPortfolioData: IExtendedHeroBannerProps = {
  title: "Portfolio",
  subTitle: "SEO optimised and accessible webapps",
  paragraphs: [
    "Our projects, that we designed and developed with over 5 years of experience.",
    "Contact us, and we hwlp you to get you closer to your goals.",
  ],
  buttonText: "Get an offer ",
  heroBannerImage: heroBannerPortfolioPicture,
  link: true,
  href: "/contact",
};

export const heroBannerContactPicture: IHeroBannerImageProps = {
  title: "DevDesign Responsive mobilefirst design",
  src:
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623504349/DevDesign/mobiledev.png",
  alt: "DevDesign Responsive mobilefirst design",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623504349/DevDesign/mobiledev.png",
      media: "(min-width:650px)",
    },
  ],
};

export const heroBannerContactData: IExtendedHeroBannerProps = {
  title: "Contact",
  subTitle: "Get in touch with us",
  paragraphs: ["We will find best possible solution for your needs."],
  buttonText: "See our work ",
  heroBannerImage: heroBannerContactPicture,
  link: true,
  href: "/portfolio",
};

export const heroBannerBlogPicture: IHeroBannerImageProps = {
  title: "DevDesign Responsive mobilefirst design blog",
  src:
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1678002254/DevDesign/blog.svg",
  alt: "DevDesign Responsive mobilefirst design blog",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/c_scale,w_650/v1678002254/DevDesign/blog.svg",
      media: "(min-width:650px)",
    },
  ],
};

export const heroBannerBlogData: IExtendedHeroBannerProps = {
  title: "DevDesign Blog",
  subTitle: "Dev Blog",
  paragraphs: ["Anything from infra to frontend development."],
  buttonText: "All blog posts",
  heroBannerImage: heroBannerContactPicture,
  link: true,
  href: "/blog",
};
