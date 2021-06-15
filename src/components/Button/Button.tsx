import React, { FC } from "react";
import { Link } from "gatsby";
import { IButtonProps } from "../../@types/declarations";
import ArrowIcon from "./ArrowIcon";
import LoadingIcon from "./LoadingIcon";

const Button: FC<IButtonProps> = ({
  type,
  size,
  buttonText,
  disabled,
  link,
  href,
  loading,
}) => {
  return (
    <>
      {link ? (
        <Link to={href} className={`button button--${size}`}>
          {buttonText}
          <ArrowIcon />
        </Link>
      ) : loading ? (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
        >
          {buttonText}
          <LoadingIcon />
        </button>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
        >
          {buttonText}
          <ArrowIcon />
        </button>
      )}
    </>
  );
};

export default Button;
