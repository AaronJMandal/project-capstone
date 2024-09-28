import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const background = require("../imgs/windowxp.png");
const apiBaseUrl = "https://capstone-be-ajm.vercel.app";

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
        console.error("Error found:", error);
        // const policy = error.response.data.policy;
        setErrors(error);
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
    <FormContainer onSubmit={formik.handleSubmit}>
      <Container>
        <Header>
          {formState === "signup" ? "Need an account? Sign up here!" : "Login"}
        </Header>
        <Inputs>
          <InputField>
            <Input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              placeholder="Email Address"
            />
            {formik.errors.email && formik.touched.email && (
              <Error>{formik.errors.email}</Error>
            )}
            {errors && <Error>{errors.response.data.message}</Error>}
          </InputField>
          <InputField>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password && (
              <Error>{formik.errors.password}</Error>
            )}
          </InputField>
          <Buttons>
            {formState === "signup" ? (
              <>
                <Button type="submit">Signup</Button>
                <Button type="button" onClick={changeToLogin}>
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button type="button" onClick={changeToSignUp}>
                  Signup
                </Button>
                <Button type="submit">Login</Button>
                <Button
                  type="button"
                  onClick={() =>
                    console.log(localStorage.getItem("access_token"))
                  }
                >
                  Test Token
                </Button>
              </>
            )}
          </Buttons>
        </Inputs>
      </Container>

      <PasswordReq>
        '* At least 8 characters in length\n' + '* Contain at least 3 of the
        following 4 types of characters:\n' + ' * lower case letters (a-z)\n' +
        ' * upper case letters (A-Z)\n' + ' * numbers (i.e. 0-9)\n' + ' *
        special characters (e.g. !@#$%^&*)',
      </PasswordReq>
    </FormContainer>
  );
};

export default SignupLogin;

// Styled Components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${background});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 5rem;
  padding: 4rem;
  height: 400px;
  width: 500px;
  max-width: 600px;
  border-radius: 3%;
  font-size: large;
`;

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 3em;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.div`
  margin: 1rem;
`;

const Input = styled.input`
  padding: 5px 30px;
  border-radius: 4px;
  background: white;
  opacity: 0.9;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
`;

const Button = styled.button`
  background: rgba(0, 255, 255, 0.7);
  border-radius: 3px;
  padding: 3px;
  margin: 10px;
  color: ivory;
  font-weight: 600;
`;

const Error = styled.div`
  background: coral;
  padding: 5px;
  margin-top: 5px;
`;

const PasswordReq = styled.div`
  position: absolute;
  width: 30ch;
  right: 10rem;
  top: 5rem;
`;
