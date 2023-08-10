import React from "react";
import Button from "../components/button/page";
import FormInput from "../components/form/page";

function Register() {
  return (
    <div className="flex flex-col border-black border-2 w-min px-[100px] py-[50px]">
      <form className="flex flex-col">
        <p>Get started with a free account!!!</p>

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

        <Button className="" onSubmit="">
          Sign up
        </Button>
      </form>
      <p>
        Already have an account? <span>Sign in.</span>
      </p>

      <Button className="" onSubmit="">
        Sign up with Facebook
      </Button>
      <Button className="" onSubmit="">
        Sign up with Google
      </Button>
    </div>
  );
}

export default Register;
