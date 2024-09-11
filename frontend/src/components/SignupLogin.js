import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupLogin.css";
import LoginButton from "./LoginButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const apiBaseUrl = "http://localhost:3010";

const SignupLogin = () => {
  const [formState, setFormState] = useState("signup");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

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
        if (formState === "signup") {
          // Signup request
          const response = await axios.post(`${apiBaseUrl}/api/signup`, values);
          // console.log(values);
          console.log("Signup successful:", response.data.policy);

          navigate("/confirm");
        } else {
          // Login request
          const response = await axios.post(`${apiBaseUrl}/api/login`, values);
          console.log("Login successful:", response.data);
          localStorage.setItem("access_token", response.data.accessToken);
          localStorage.setItem("id_token", response.data.idToken);
          console.log(response.data.accessToken);
          console.log(response.data.idToken);
          navigate("/dashboard");
        }
      } catch (error) {
        const policy = error.response.data.policy;
        setErrors(policy);
        console.error("Error found:", error);
      }
    },
  });

  const changeToLogin = () => {
    setFormState("login");
  };

  const changeToSignUp = () => {
    setFormState("signup");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        {formState === "signup" ? (
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
            {formState === "signup" && (
              <div>
                <button type="submit">Signup</button>
                <button type="button" onClick={changeToLogin}>
                  Login
                </button>
              </div>
            )}
            {formState === "login" && (
              <div>
                <button type="button" onClick={changeToSignUp}>
                  Signup
                </button>
                <button type="submit">Login</button>
                {/* <LoginButton /> */}
              </div>
            )}
          </div>
        </div>
      </div>

      <PasswordReq className="error">
        '* At least 8 characters in length\n' + '* Contain at least 3 of the
        following 4 types of characters:\n' + ' * lower case letters (a-z)\n' +
        ' * upper case letters (A-Z)\n' + ' * numbers (i.e. 0-9)\n' + ' *
        special characters (e.g. !@#$%^&*)',
      </PasswordReq>
    </form>
  );
};

export default SignupLogin;

const PasswordReq = styled.div`
  position: absolute;
  width: 30ch;
  right: 10rem;
  top: 5rem;
`;
