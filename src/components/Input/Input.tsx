import React, { FC } from "react";
import { InputTypes } from "../../@types/declarations";

interface IInputProps {
  type: InputTypes;
  label: string;
  required: boolean;
  disabled: boolean;
  name: string;
  changeHandler: (event: any) => void;
  value: string;
}

const Input: FC<IInputProps> = ({
  type,
  label,
  required,
  disabled,
  name,
  changeHandler,
  value,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        className="input form-control"
        onChange={(event: any) => changeHandler(event)}
        value={value}
        required={required}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
