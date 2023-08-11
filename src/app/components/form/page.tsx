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
      <div className="flex flex-col">
        <label htmlFor={htmlFor} className="text-color">
          {children}
        </label>
        <input name={name} required type={type} placeholder={placeholder} />
      </div>
    </>
  );
}

export default FormInput;
