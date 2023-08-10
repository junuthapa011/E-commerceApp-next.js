import React from "react";

interface IProps {
  children: React.ReactNode;
  className: string;
  onSubmit: () => {};
}

function Button({ children, className, onSubmit }: IProps) {
  return (
    <>
      <button className={className} onSubmit={onSubmit}>
        {children}
      </button>
    </>
  );
}

export default Button;
