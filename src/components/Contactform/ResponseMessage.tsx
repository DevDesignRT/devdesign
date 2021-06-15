import React, { FC } from "react";
import { IResponseMessageProps } from "../../@types/declarations";
import Button from "../Button/Button";
import CheckIcon from "../Icons/CheckIcon";

const ResponseMessage: FC<IResponseMessageProps> = ({
  message,
  handleClick,
}) => {
  return (
    <div className="responseMessage">
      <div className="responseMessage--header">
        <span>
          <CheckIcon />
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
