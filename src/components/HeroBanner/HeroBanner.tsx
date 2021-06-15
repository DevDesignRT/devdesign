import React, { FC } from "react";
import { IExtendedHeroBannerProps } from "../../@types/declarations";
import Button from "../Button/Button";
import Picture from "../Picture/Picture";
import Typography from "../Typography/Typography";
import Border from "./Border";

const HeroBaner: FC<IExtendedHeroBannerProps> = ({
  title,
  subTitle,
  paragraphs,
  buttonText,
  heroBannerImage,
  link,
  href,
}) => {
  return (
    <section className="heroBanner">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <Typography
              variant="h1"
              size="xlg"
              color="hotpink"
              children={title}
            />
            <Typography
              variant="h2"
              size="lg"
              color="white"
              children={subTitle}
            />
            {paragraphs &&
              paragraphs.map((paragraph: string) => {
                return <p key={paragraph[0]}>{paragraph}</p>;
              })}
            <Button
              buttonText={buttonText}
              size="md"
              type="button"
              clickHandler={() => {}}
              link={link}
              href={href}
            />
          </div>
          <div className="col-sm-12 col-md-5">
            <Picture
              src={heroBannerImage.src}
              alt={heroBannerImage.alt}
              title={heroBannerImage.title}
              sources={heroBannerImage.sources}
            />
          </div>
        </div>
      </div>
      <Border color="pink" />
    </section>
  );
};

export default HeroBaner;
