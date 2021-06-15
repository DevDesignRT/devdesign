import React, { FC } from "react";
import { IPictureProps, ISource } from "../../@types/declarations";

const Picture: FC<IPictureProps> = (props) => {
  const { src, alt, title, sources, grayScale, logo } = props;
  return (
    <picture>
      {sources &&
        sources.map((source: ISource) => {
          return (
            <source
              key={source.srcSet}
              media={source.media}
              srcSet={source.srcSet}
              className={grayScale ? "image image--grayScale" : " image"}
            />
          );
        })}
      <img
        className={
          grayScale
            ? "image image--grayScale"
            : logo
            ? "image image--logo"
            : " image"
        }
        src={src}
        alt={alt}
        title={title}
        loading="lazy"
      />
    </picture>
  );
};

export default Picture;
