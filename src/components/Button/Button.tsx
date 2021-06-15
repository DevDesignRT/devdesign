import React, { FC } from "react";
import { Link } from "gatsby";
import { IButtonProps } from "../../@types/declarations";
import ArrowIcon from "../Icons/ArrowIcon";
import LoadingIcon from "../Icons/LoadingIcon";

const Button: FC<IButtonProps> = ({
  type,
  size,
  buttonText,
  disabled,
  link,
  href,
  loading,
  clickHandler,
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
      ) : type === "submit" ? (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
        >
          {buttonText}
          <ArrowIcon />
        </button>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
          onClick={clickHandler}
        >
          {buttonText}
          <ArrowIcon />
        </button>
      )}
    </>
  );
};

export default Button;
