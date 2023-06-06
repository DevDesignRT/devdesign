import { IListItem, ITeamMember } from "../@types/declarations";

export const ContactInformation: IListItem[] = [
  {
    text: "Roman Tuomisto - Developer",
    id: 1,
  },
  {
    text: "Email: devdesign@devdesign.fi",
    email: "devdesign@devdesign.fi",
    id: 2,
  },
  {
    text: "Phone: +358504919485",
    tel: "+358504919485",
    id: 3,
  },
];

export const TeamMembers: ITeamMember[] = [
  {
    avatar: {
      alt: "Avatar of: Roman Tuomisto - Senior FullStack Web Developer",
      src:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623748157/DevDesign/roman-dev.png",
      sources: [
        {
          srcSet:
            "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1623748157/DevDesign/roman-dev.png",
          media: "(min-width:650px)",
        },
      ],
    },
    information: {
      jobTitle: "Senior FullStack Web Developer",
      name: "Roman Tuomisto",
      experience: "6+ years of experience",
    },
  },
  {
    avatar: {
      alt: "Avatar of: Joseph Heidari - FullStack Web Develpoer and DevOps",
      src:
        "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1630143572/DevDesign/joseph-heidari.jpg",
      sources: [
        {
          srcSet:
            "https://res.cloudinary.com/romantuomisto-cloud/image/upload/v1630143572/DevDesign/joseph-heidari.jpg",
          media: "(min-width:650px)",
        },
      ],
    },
    information: {
      jobTitle: "FullStack Web Develpoer and DevOps",
      name: "Joseph Heidari",
      experience: "6+ years of experience",
    },
  },
];

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
    text: "Email: devdesign@devdesign.fi",
    email: "devdesign@devdesign.fi",
    id: 3,
  },
  {
    text: "Phone: +358504919485",
    tel: "+358504919485",
    id: 4,
  },
];
