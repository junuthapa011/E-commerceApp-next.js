"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@/app/components/button/page";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters")
    .required("Required"),
});

function Test() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            type="text"
            name="email"
            placeholder="Enter your email address..."
          />
          <ErrorMessage name="email" component="div" />

          <Field
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <ErrorMessage name="password" component="div" />

          <Button
            className="text-white signin-button-bg p-2 mt-2 border-solid border-2 border-text-color rounded-md w-full"
            type="submit"
          >
            Sign up
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default Test;
