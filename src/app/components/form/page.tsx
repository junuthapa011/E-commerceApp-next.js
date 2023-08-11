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
        <label htmlFor={htmlFor} className="text-color font-semibold">
          {children}
        </label>
        <input
          name={name}
          required
          type={type}
          placeholder={placeholder}
          className="outline-slate-300 border-solid border-2 rounded-md p-1 mt-1"
        />
      </div>
    </>
  );
}

export default FormInput;
