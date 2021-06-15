import {
  IExtendedHeroBannerProps,
  IHeroBannerImageProps,
} from "../@types/declarations";

export const heroBannerMainPicture: IHeroBannerImageProps = {
  title: "DevDesign heroimage",
  src:
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623477162/YelpCamp/heroimage.png",
  alt: "DevDesign heroimage",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623477162/YelpCamp/heroimage.png",
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
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623492503/YelpCamp/webdev.png",
  alt: "DevDesign Webdevelopment",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623492503/YelpCamp/webdev.png",
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
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623504349/YelpCamp/mobiledev.png",
  alt: "DevDesign Responsive mobilefirst design",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623504349/YelpCamp/mobiledev.png",
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
