import { jwtDecode } from "jwt-decode";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Dashboard = () => {
  const token = localStorage.getItem("id_token");
  console.log(token);
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      return (
        <div>
          Welcome, {decodedToken.email}
          <LogoutButton />
        </div>
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

export default Dashboard;
