import { IServiceCardProps } from "../@types/declarations";

export const services: IServiceCardProps[] = [
  {
    id: 1,
    title: "Web Apps",
    description:
      "Accessible and responsive single page Web apps, with database and api integrations. SEO is included.",
    src:
      "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623792193/YelpCamp/webapps.png",
    alt: "DevDesign, Web apps development",
    sources: [
      {
        srcSet:
          "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623792193/YelpCamp/webapps.png",
        media: "(min-width:650px)",
      },
    ],
    href: "/contact",
  },
  {
    id: 2,
    title: "Websites",
    description:
      "Accessible and responsive websites, with google maps and contact form. SEO is included.",
    src:
      "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623492503/YelpCamp/webdev.png",
    alt: "DevDesign, Website development",
    sources: [
      {
        srcSet:
          "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623492503/YelpCamp/webdev.png",
        media: "(min-width:650px)",
      },
    ],
    href: "/contact",
  },
  {
    id: 3,
    title: "SEO - Search engine optimisation",
    description:
      "SEO optimisation for existing websites or webapps, including google and facebook marketing.",
    src:
      "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623504388/YelpCamp/seo.png",
    alt: "DevDesign, Search engine optimisation",
    sources: [
      {
        srcSet:
          "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623504388/YelpCamp/seo.png",
        media: "(min-width:650px)",
      },
    ],
    href: "/contact",
  },
];
