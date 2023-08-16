import React from "react";
interface IProps {
  // title: string;
  children: React.ReactNode;
  className: string;
}
function Navbar({ children, className }: IProps) {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}

export default Navbar;
