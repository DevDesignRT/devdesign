import React, { FC } from "react";
import { IResponseMessageProps } from "../../@types/declarations";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const ResponseMessage: FC<IResponseMessageProps> = ({
  message,
  handleClick,
}) => {
  return (
    <div className="responseMessage">
      <div className="responseMessage--header">
        <span>
          <Icon iconName="check" />
        </span>
        <h3>Thank you for contacting us!</h3>
      </div>
      <p>{message}</p>
      <Button
        buttonText="Close"
        type="button"
        size="lg"
        clickHandler={handleClick}
      />
    </div>
  );
};

export default ResponseMessage;
