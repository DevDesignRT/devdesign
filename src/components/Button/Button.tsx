import React, { FC } from "react";
import { Link } from "gatsby";
import { IButtonProps } from "../../@types/declarations";
import ArrowIcon from "./ArrowIcon";

const Button: FC<IButtonProps> = ({ type, size, buttonText, link, href }) => {
  return (
    <>
      {link ? (
        <Link to={href} className={`button button--${size}`}>
          {buttonText}
          <ArrowIcon />
        </Link>
      ) : (
        <button type={type} className={`button button--${size}`}>
          {buttonText}
          <ArrowIcon />
        </button>
      )}
    </>
  );
};

export default Button;
