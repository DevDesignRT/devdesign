import React, { FC } from "react";
import { IconNames } from "../../@types/declarations";
import { iconsData } from "../Icons/iconsData";

interface IIconProps {
  iconName: IconNames;
}

const Icon: FC<IIconProps> = ({ iconName }) => {
  const IconElement = iconsData[iconName];
  return <span className="icon">{IconElement}</span>;
};

export default Icon;
