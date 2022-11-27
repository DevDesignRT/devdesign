import React, { FC } from "react";
import { Link } from "gatsby";
import { IButtonProps } from "../../@types/declarations";
import Icon from "../Icon/Icon";

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
          <Icon iconName="arrowRight" />
        </Link>
      ) : loading ? (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
        >
          {buttonText}
          <Icon iconName="loading" />
        </button>
      ) : type === "submit" ? (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
        >
          {buttonText}
          <Icon iconName="arrowRight" />
        </button>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
          onClick={clickHandler}
        >
          {buttonText}
          <Icon iconName="arrowRight" />
        </button>
      )}
    </>
  );
};

export default Button;
