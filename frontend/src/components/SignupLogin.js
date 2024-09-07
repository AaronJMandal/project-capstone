import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupLogin.css";
import LoginButton from "./LoginButton";
import axios from "axios";

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
    onSubmit: async (values) => {
      try {
        if (signUpLogin === "login") {
          await axios.post(
            `https://dev-as4r7h34b1gbix7e.us.auth0.com/oauth/token`,
            {
              grant_type: "password",
              username: values.email,
              password: values.password,
              client_id: "sJ2bu4kyRPQOkQZiFDLwuyj65JULihwS",
              scope: "openid profile email",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          window.location.href = "http://localhost:3000/dashboard";
        } else {
          await axios.post(
            `https://dev-as4r7h34b1gbix7e.us.auth0.com/dbconnections/signup`,
            {
              client_id: "sJ2bu4kyRPQOkQZiFDLwuyj65JULihwS",
              connection: "Username-Password-Authentication",
              email: values.email,
              password: values.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        console.error("Authentication error:", error);
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
