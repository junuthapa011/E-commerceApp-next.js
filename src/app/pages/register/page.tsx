import React from "react";
import Button from "../../components/button/page";
import FormInput from "../../components/form/page";
import WelcomeMsg from "@/app/components/welcome-msg/page";

function Register() {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-color">Dream Labs</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <WelcomeMsg />
        </div>
        <div className="flex flex-col border-solid  border-2 rounded bg-transparent-75 px-[30px] pt-[50px] pb-[20px]">
          <p className="text-color font-semibold text-2xl mb-[10px]">
            Get started with a free account!!!
          </p>

          <FormInput
            htmlFor="Email"
            name="Email"
            type="text"
            placeholder="Enter your email address..."
          >
            Email
          </FormInput>

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
            htmlFor="Confirm Password"
            name="Confirm Password"
            type="password"
            placeholder="Confirm your password..."
          >
            Confirm Password
          </FormInput>

          <Button
            className="text-white signin-button-bg p-2 mt-2 border-solid border-2 border-text-color rounded-md"
            type="submit"
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
            className="flex items-center justify-start text-white fb-button-bg p-2 mt-2 border-solid border-2 border-text-color rounded-md"
            type="submit"
            onSubmit=""
          >
            <img
              src="/images/facebook-logo.png"
              width="35px"
              height="35px"
              className=""
            />
            <p>Sign up with Facebook</p>
          </Button>

          <Button
            className="flex items-center justify-start text-white google-button-bg p-2 mt-2 border-solid border-2 border-text-color rounded-md"
            type="submit"
            onSubmit=""
          >
            <img src="/images/google-logo.jpg" width="35px" height="35px" />
            <p>Sign up with Google</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Register;
