"use client";
import React from "react";
import Button from "../../components/button/page";
import WelcomeMsg from "@/app/components/welcome-msg/page";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

function Register() {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/, "*Enter valid email*")
      .required("*Please enter your email*"),
    username: Yup.string().required("*Please enter your username*"),
    password: Yup.string()
      .min(8)
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/gm,
        "*Password must contain one uppercase, one lowercase & atleast one symbol @#$%^&+= *"
      )
      .required("*Please enter your password*"),
    confirmPassword: Yup.string()
      .required("*Please confirm password*")
      .oneOf([Yup.ref("password")], "*Passwords must match*"),
  });

  const router = useRouter();

  const submitHandler = async (values: typeof initialValues) => {
    try {
      const response = await fetch("https://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        router.push("/pages/login");
      } else {
        alert("Invalid entries");
      }
    } catch (error) {
      console.log("An error occured", error);
    }
    // localStorage.setItem("registeredUser", JSON.stringify(values));
    // router.push("/pages/login");
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
            <p className="text-color font-semibold text-2xl mb-[10px]">
              Get started with a free account!!!
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitHandler}
            >
              <Form className="flex flex-col">
                <label htmlFor="email" className="text-color font-semibold">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  placeholder="Enter your email address..."
                  className="outline-slate-300 border-solid border-2 rounded-md p-1 mt-1"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />

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
                  htmlFor="password"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password..."
                  className="outline-slate-300 border-solid border-2 rounded-md p-1 mt-1"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />

                <label
                  htmlFor="ConfirmPassword"
                  className="text-color font-semibold"
                >
                  Confirm Password
                </label>
                <Field
                  htmlFor="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password..."
                  className="outline-slate-300 border-solid border-2 rounded-md p-1 mt-1"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-600"
                />

                <Button className="text-white signin-button-bg p-2 mt-2 border-solid border-2 border-text-color rounded-md w-full hover:underline">
                  Sign up
                </Button>
              </Form>
            </Formik>
            <p className="text-color flex justify-center">
              Already have an account?
              <span
                className="text-blue-600 hover:underline hover:cursor-pointer"
                onClick={() => router.push("/pages/login")}
              >
                Sign in.
              </span>
            </p>
            <p className="flex justify-center text-slate-300 py-2">
              <span>_________________________</span>
              <span> or </span>
              <span>_________________________</span>
            </p>

            <button
              className="flex items-center text-white fb-button-bg p-1 mt-1 border-solid border-2 border-text-color rounded-md w-full"
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
              <p className="pl-14 hover:underline">Sign up with Facebook</p>
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
              <p className="pl-14 hover:underline">Sign up with Google</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
