import React, { FC } from "react";
import { IResponseMessageProps } from "../../@types/declarations";

const ResponseMessage: FC<IResponseMessageProps> = ({ message }) => {
  return (
    <div className="responseMessage">
      <h3>thaks</h3>
      <p>{message}</p>
    </div>
  );
};

export default ResponseMessage;
