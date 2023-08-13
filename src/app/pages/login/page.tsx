"use client";
import React from "react";
import Button from "../../components/button/page";
// import FormInput from "../../components/form/page";
import WelcomeMsg from "@/app/components/welcome-msg/page";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("*Please valid email address*"),
    password: Yup.string().required("*Please valid your password*"),
  });

  const router = useRouter();
  const submitHandler = (values: typeof initialValues) => {
    const registeredUserJSON = localStorage.getItem("registeredUser");
    if (registeredUserJSON !== null) {
      const registeredUser = JSON.parse(registeredUserJSON);
      if (
        values.username === registeredUser.username &&
        values.password === registeredUser.password
      ) {
        localStorage.setItem("authenticated", "true");
        router.push("/pages/login");
      } else {
        alert("Invalid credentials"); // use toastify
      }
    }
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <h1 className="text-color island-font font-bold text-6xl">
          Dream Labs
        </h1>
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
            <Formik
              initialValues={initialValues}
              onSubmit={submitHandler}
              validationSchema={validationSchema}
            >
              <Form className="flex flex-col">
                <label htmlFor="username" className="text-color font-semibold">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Enter your username..."
                  className="outline-slate-300 border-solid border-2 rounded-md p-1 mt-1"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-600"
                />

                <label htmlFor="password" className="text-color font-semibold">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password..."
                  className="outline-slate-300 border-solid border-2 rounded-md p-1 mt-1"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />

                <Button className="text-white signin-button-bg p-2 mt-2 border-solid border-2 border-text-color rounded-md w-full hover:underline">
                  Sign In
                </Button>
              </Form>
            </Formik>
            <p className="text-color flex justify-center">
              Don't have an account?
              <span className="text-blue-600 hover:underline hover:cursor-pointer">
                Sign Up.
              </span>
            </p>
            <p className="flex justify-center text-slate-300 py-2">
              <span>_________________________</span>
              <span> or </span>
              <span>_________________________</span>
            </p>

            <button
              className="flex items-center text-white fb-button-bg p-1 mt-1 border-solid border-2 border-text-color rounded-md w-full"
              type="submit"
              onClick={() =>
                (window.location.href = "https://www.facebook.com/signup")
              }
            >
              <img
                src="/images/facebook-logo.png"
                width="35px"
                height="35px"
                className=""
              />
              <p className="pl-14 hover:underline">Sign in with Facebook</p>
            </button>

            <button
              className="flex items-center justify-start text-white google-button-bg p-1 mt-1 border-solid border-2 border-text-color rounded-md w-full"
              type="submit"
              onClick={() =>
                (window.location.href =
                  "https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp")
              }
            >
              <img src="/images/google-logo.jpg" width="35px" height="35px" />
              <p className="pl-14 hover:underline">Sign in with Google</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
