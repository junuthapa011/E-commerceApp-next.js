import React from "react";
import Button from "../../components/button/page";
import FormInput from "../../components/form/page";
import WelcomeMsg from "@/app/components/welcome-msg/page";

function Register() {
  return (
    <div className="flex justify-center mt-[150px]">
      <div>
        <WelcomeMsg />
      </div>
      <div className="flex flex-col border-solid  border-2 rounded bg-transparent-75 px-[30px] py-[60px]">
        <p className="text-color">Get started with a free account!!!</p>

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

        <Button className="text-white signin-button-bg " onSubmit="">
          Sign up
        </Button>

        <p className="text-color">
          Already have an account?
          <span className="text-blue-600">Sign in.</span>
        </p>

        <Button className="" onSubmit="">
          Sign up with Facebook
        </Button>
        <Button className="" onSubmit="">
          Sign up with Google
        </Button>
      </div>
    </div>
  );
}

export default Register;
