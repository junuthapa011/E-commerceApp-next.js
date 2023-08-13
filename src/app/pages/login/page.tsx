import React from "react";
import Button from "../../components/button/page";
import FormInput from "../../components/form/page";
import WelcomeMsg from "@/app/components/welcome-msg/page";

function Register() {
  return (
    <>
      <div className="flex justify-center mb-4">
        <p className="text-color font-island font-bold text-6xl">Dream Labs</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex">
          <div className="w-[35vw]">
            <WelcomeMsg />
          </div>
          <div className="border-solid  border-2 rounded-tr-lg rounded-br-lg bg-transparent-75 px-[30px] pt-[50px] ">
            <p className="text-color font-semibold text-2xl mb-[10px] pl-16">
              Welcome back!!!
            </p>

            <FormInput
              htmlFor="Username"
              name="Username"
              type="text"
              placeholder="Enter your username..."
            >
              Username
            </FormInput>

            <FormInput
              htmlFor="Password"
              name="Password"
              type="password"
              placeholder="Enter your password..."
            >
              Password
            </FormInput>

            <FormInput
              htmlFor="Remember"
              name="Remember"
              type="checkbox"
              placeholder="true"
            >
              Remember
            </FormInput>
            <Button
              className="text-white signin-button-bg p-2 mt-2 border-solid border-2 border-text-color rounded-md w-full"
              onSubmit=""
            >
              Sign up
            </Button>

            <p className="text-color flex justify-center">
              Already have an account?
              <span className="text-blue-600 cursor">Sign in.</span>
            </p>
            <p className="flex justify-center text-slate-300 py-2">
              <span>_________________________</span>
              <span> or </span>
              <span>_________________________</span>
            </p>

            <Button
              className="flex items-center text-white fb-button-bg p-1 mt-1 border-solid border-2 border-text-color rounded-md w-full"
              type="submit"
              onSubmit=""
            >
              <img
                src="/images/facebook-logo.png"
                width="35px"
                height="35px"
                className=""
              />
              <p className="pl-14">Sign up with Facebook</p>
            </Button>

            <Button
              className="flex items-center justify-start text-white google-button-bg p-1 mt-1 border-solid border-2 border-text-color rounded-md w-full"
              type="submit"
              onSubmit=""
            >
              <img src="/images/google-logo.jpg" width="35px" height="35px" />
              <p className="pl-14">Sign up with Google</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
