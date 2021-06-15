import React, { FC } from "react";

interface ITextAreaProps {
  value: string;
  required?: boolean;
  rows?: number;
  label: string;
  name: string;
  id: string;
  changeHandler: (event: any) => void;
}

const TextArea: FC<ITextAreaProps> = (props) => {
  const { value, required, rows, name, id, label, changeHandler } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        rows={rows || 4}
        required={required}
        className="textArea form-control"
        onChange={(event: any) => changeHandler(event)}
        value={value}
      ></textarea>
    </>
  );
};

export default TextArea;
