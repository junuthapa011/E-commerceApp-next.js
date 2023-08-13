import React from "react";

function WelcomeMsg() {
  return (
    <>
      <div className="flex flex-col items-center border-solid border-2 rounded-tl-lg rounded-bl-lg bg-transparent-75 px-[30px] py-[60px]">
        <p className="text-color text-cursive font-bolder text-xl mb-20">
          We make your wish list come true
        </p>
        <img src="/images/girlshopping.webp" height="500px" width="300px" />
      </div>
    </>
  );
}

export default WelcomeMsg;
