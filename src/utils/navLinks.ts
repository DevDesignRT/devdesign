import { INavLink, Subjects } from "../@types/declarations";

export const navLinks: INavLink[] = [
  { href: "/", linkText: "DevDesign", id: 1 },
  { href: "/portfolio", linkText: "Portfolio", id: 2 },
  { href: "/contact", linkText: "Contact", id: 3 },
  {
    href: "https://www.facebook.com/devdesignrt",
    linkText: "Facebook",
    external: true,
    id: 4,
  },
];

export const SubjectOptions: Subjects[] = ["", "inquiry", "feedback"];
