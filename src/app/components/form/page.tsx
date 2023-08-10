import React from "react";

interface IProps {
  htmlFor: string;
  children: React.ReactNode;
  name: string;
  type: string;
  placeholder: string;
}

function FormInput({ htmlFor, children, name, type, placeholder }: IProps) {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <input name={name} required type={type} placeholder={placeholder} />
    </>
  );
}

export default FormInput;
