import React from "react";

function WelcomeMsg() {
  return (
    <>
      <div className="flex flex-col items-center border-solid border-2 rounded bg-transparent-75 px-[30px] py-[60px]">
        <p className="text-color text-cursive font-bold text-2xl">
          We make your wish list come true
        </p>
        <img src="/images/girlshopping.webp" height="500px" width="300px" />
      </div>
    </>
  );
}

export default WelcomeMsg;
