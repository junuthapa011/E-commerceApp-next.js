import React from "react";

interface IProps {
  children: React.ReactNode;
  className: string;
  onSubmit: () => boolean;
}

function Button({ children, className, onSubmit, type }: IProps) {
  return (
    <>
      <button className={className} onSubmit={onSubmit}>
        {children}
      </button>
    </>
  );
}

export default Button;
