import { jwtDecode } from "jwt-decode";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const DashboardAuth = () => {
  const token = localStorage.getItem("id_token");
  console.log(token);
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      return (
        <NavBar>
          <FaUser style={{ color: "#1a87af" }} />
          Welcome, {decodedToken.email}!
          <LogoutButton />
        </NavBar>
      );
    } catch (error) {
      console.error("Invalid token", error);
    }
  } else {
    console.error("No token found");
  }

  return (
    <div>
      Please log in here
      <LoginButton />
    </div>
  );
};

export default DashboardAuth;

const NavBar = styled.nav`
  display: flex;
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px;
`;
