// @ts-nocheck

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("*Enter valid username*"),
    password: Yup.string().required("*Enter valid password*"),
  });

  const submitHandler = (values: typeof initialValues) => {
    const registeredUserJSON = localStorage.getItem("registeredUser");

    if (registeredUserJSON !== null) {
      const registeredUser = JSON.parse(registeredUserJSON);

      if (
        values.userName === registeredUser.userName &&
        values.password === registeredUser.password
      ) {
        localStorage.setItem("authenticated", "true");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <p className="text-color italic text-5xl">Dream Labs</p>
      </div>
      <div className="flex justify-end w-[100%] h-[100vh]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form className="flex flex-col mr-[150px] mt-[50px] mb-[50px] p-[50px] border-[2px] border-solid border-slate-300 rounded transparent-bg-color ">
            <h2 className="text-2xl mb-[10px] font-semibold">
              Welcome back!!!
            </h2>
            <div>
              <label htmlFor="userName" className="my-[5px] text-sm font-bold">
                Username:
              </label>
              <Field
                required
                type="text"
                id="userName"
                name="userName"
                className="input flex flex-col justify-around items-left p-[5px]"
                placeholder="Enter your username..."
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-red-600"
              />
            </div>

            <div className="">
              <label htmlFor="password" className="my-[5px] text-sm font-bold">
                Password:{" "}
              </label>
              <Field
                required
                type="password"
                id="password"
                name="password"
                className="input flex flex-col justify-around items-left p-[5px]"
                placeholder="Enter your password..."
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
            </div>
            <button type="submit" className="">
              SIGN IN
            </button>

            <p>Forgot your password?</p>
            <p>
              New user?
              <span className="text-blue-700 underline hover:cursor-pointer">
                Sign Up.
              </span>
            </p>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Login;
