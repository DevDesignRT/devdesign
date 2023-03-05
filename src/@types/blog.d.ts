import { ISource } from "./declarations";

export interface Image {
  src: string;
  sources: ISource[];
  alt: string;
  title: string;
}

interface Blog {
  title: string;
  body: string;
  cover: Image;
  slug: string;
  createdAt: string | Date;
  timeToRead: string;
}

export default Blog;
