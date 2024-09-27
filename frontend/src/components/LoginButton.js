import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;

const Button = styled.button`
  font-family: "Tiny5", sans-serif;
  font-weight: 600;
  font-size: 1em;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  background-color: lightgrey;
  border-radius: 5px;
  position: relative;
  // z-index: 1;
  transition: all 0.3s ease-in;
  margin: 10px;

  &:hover {
    transform: scale(1.1);
    background-color: grey;
  }
`;
