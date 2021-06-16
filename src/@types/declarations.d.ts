import { HTMLAttributeReferrerPolicy } from "react";

export type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSizes = "xs" | "sm" | "md" | "lg" | "xlg" | "xxlg";
export type Sizes = "sm" | "md" | "lg";
export type TextColors = "black" | "white" | "hotpink";
export type Subjects =
  | "New Web App"
  | "New Website"
  | "SEO optimisation"
  | "UI & UX Design",
  | "inquiry"
  | "feedback"
  | "";
export type ButtonTypes = "submit" | "button" | "reset";
export type InputTypes =
  | "text"
  | "password"
  | "email"
  | "tel"
  | "checkbox"
  | "radio";
export type TargetTypes = "_blank" | "_self" | "_parent" | "_top";
export interface ISource {
  srcSet: string;
  media: string; // "(min-width:650px)"
}
export interface IButtonProps {
  type: ButtonTypes;
  buttonText: string;
  loading?: boolean;
  disabled?: boolean;
  size: Sizes;
  clickHandler: (event: any) => void;
  link?: boolean;
  href?: string;
}
export interface IResponseMessageProps {
  message: string;
  handleClick: () => void;
}
export interface IHeroBannerProps {
  title: string;
  subTitle: string;
  paragraphs: string[];
  buttonText: string;
}
export interface IExtendedHeroBannerProps extends IHeroBannerProps {
  heroBannerImage: IHeroBannerImageProps;
  link: boolean;
  href: string;
}
export interface IHeroBannerImageProps {
  title: string;
  src: string;
  alt: string;
  sources: ISource[];
}
export interface IServiceCardProps extends IHeroBannerImageProps {
  id?: number;
  description: string;
  href: string;
}
export interface INavLink {
  id?: number;
  linkText: string;
  href: string;
  logo?: boolean;
  target?: TargetTypes;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  external?: boolean;
  alt?: string;
  src?: string;
  sources?: ISource[];
}
export interface IListItem {
  id: number;
  text: string;
  email?: string;
  tel?: string;
  href?: string;
}
export type JustifyAndAlignOptions =
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "center"
  | "left"
  | "right"
  | "normal"
  | "baseline"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "safe"
  | "unsafe";
export type FlexDirections =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";
export type WrapOptions = "wrap" | "nowrap" | "wrap-reverse";
export type FlexItemSizes = 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface IBodyTextProps {
  bold?: boolean;
  emphasise?: boolean;
  color: TextColors;
  size: Sizes;
  children: any;
}
export interface IBorderProps {
  color: "pink" | "orange" | "dark";
}
export interface IHeadingProps {
  variant: HeadingVariants;
  size: HeadingSizes;
  children: string;
  color: TextColors;
}
export interface IPictureProps {
  sources: ISource[];
  grayScale?: boolean;
  logo?: boolean;
  src: string;
  alt: string;
  title?: string;
}
export interface ICardProps {
  picture: IPictureProps;
  id: number;
  title: string;
  content: string;
  domain: string;
}
export interface IGutterProps {
  p?: number;
  pl?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  m?: number;
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
}

export interface IContactFormState {
  name: string;
  email: string;
  message: string;
  subject: Subjects;
}
