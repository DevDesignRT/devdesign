import React, { FC } from "react";
import { IBorderProps } from "../../@types/declarations";

const Border: FC<IBorderProps> = ({ color }) => {
  return <aside className={`border border--${color}`}></aside>;
};

export default Border;
