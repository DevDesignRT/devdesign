import { INavLink, Subjects } from "../@types/declarations";

export const navLinks: INavLink[] = [
  { href: "/", linkText: "DevDesign", id: 1 },
  { href: "/portfolio", linkText: "Portfolio", id: 2 },
  { href: "/contact", linkText: "Contact", id: 3 },
  { href: "/blog", linkText: "Blog", id: 4 },
  {
    href: "https://www.facebook.com/devdesignrt",
    linkText: "Facebook",
    external: true,
    id: 5,
  },
];

export const SubjectOptions: Subjects[] = [
  "",
  "New Web App",
  "New Website",
  "SEO optimisation",
  "UI & UX Design",
  "inquiry",
  "feedback",
];
