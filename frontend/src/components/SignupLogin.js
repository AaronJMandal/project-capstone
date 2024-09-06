import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupLogin.css";
import LoginButton from "./LoginButton";

const SignupLogin = () => {
  const [signUpLogin, setSignUpLogin] = useState("signup");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("E-mail is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      if (SignupLogin === "login") {
        console.log("Triggering Login");
      } else {
        console.log("Form data", values);
      }
    },
  });

  const changeToLogin = () => {
    setSignUpLogin("login");
  };

  const changeToSignUp = () => {
    setSignUpLogin("signup");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        {signUpLogin === "signup" ? (
          <div className="header">
            <div className="text">Need an account? Sign up here!</div>
          </div>
        ) : (
          <div className="header">
            <div className="text">Login</div>
          </div>
        )}
        <div className="inputs">
          <div className="input">
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              placeholder="Email Address"
            ></input>
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input">
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            ></input>
            {formik.errors.password && formik.touched.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="buttons">
            {signUpLogin === "signup" && (
              <div>
                <button type="submit">Signup</button>
                <button onClick={changeToLogin}>Login</button>
              </div>
            )}
            {signUpLogin === "login" && (
              <div>
                <button onClick={changeToSignUp}>Signup</button>
                <LoginButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupLogin;
