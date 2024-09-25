import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: "absolute", top: "20px", right: "20px" }}>
      <Button
        onClick={() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("id_token");
          navigate("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;

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

  &:hover {
    transform: scale(1.1);
    background-color: grey;
  }
`;
