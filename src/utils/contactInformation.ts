import { IListItem, IPictureProps } from "../@types/declarations";

export const ContactInformation: IListItem[] = [
  {
    text: "Roman Tuomisto - Developer",
    id: 1,
  },
  {
    text: "Email: devdesignrt@gmail.com",
    email: "devdesignrt@gmail.com",
    id: 2,
  },
  {
    text: "Phone: +358504919485",
    tel: "+358504919485",
    id: 3,
  },
];

export const Avatar: IPictureProps = {
  alt: "Avatar of: Roman Tuomisto - Software Engineer",
  src:
    "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623748157/YelpCamp/roman-dev.png",
  sources: [
    {
      srcSet:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623748157/YelpCamp/roman-dev.png",
      media: "(min-width:650px)",
    },
  ],
};

export const CompanyInformation: IListItem[] = [
  {
    text: "Roman Tuomisto",
    id: 1,
  },
  {
    text: "Y-tunnus: 3183627-3",
    id: 2,
  },
  {
    text: "Email: devdesign@gmail.com",
    email: "devdesign@gmail.com",
    id: 3,
  },
  {
    text: "Phone: +358504919485",
    tel: "+358504919485",
    id: 4,
  },
];
