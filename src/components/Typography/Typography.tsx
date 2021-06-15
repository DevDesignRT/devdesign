import React, { FC } from "react";
import { IHeadingProps } from "../../@types/declarations";

const Typography: FC<IHeadingProps> = (props) => {
  const { variant, size, children, color } = props;
  return (
    <>
      {variant === "h1" ? (
        <h1 className={"heading heading--" + size + " heading--" + color}>
          {children}
        </h1>
      ) : variant === "h2" ? (
        <h2 className={"heading heading--" + size + " heading--" + color}>
          {children}
        </h2>
      ) : variant === "h3" ? (
        <h3 className={"heading heading--" + size + " heading--" + color}>
          {children}
        </h3>
      ) : variant === "h4" ? (
        <h4 className={"heading heading--" + size + " heading--" + color}>
          {children}
        </h4>
      ) : variant === "h5" ? (
        <h5 className={"heading heading--" + size + " heading--" + color}>
          {children}
        </h5>
      ) : variant === "h6" ? (
        <h6 className={"heading heading--" + size + " heading--" + color}>
          {children}
        </h6>
      ) : (
        <div>incorrect variant passed</div>
      )}
    </>
  );
};

export default Typography;
