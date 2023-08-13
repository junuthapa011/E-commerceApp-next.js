import React from "react";

interface IProps {
  children: React.ReactNode;
  className: string;
}

function Button({ children, className }: IProps) {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  );
}

export default Button;
