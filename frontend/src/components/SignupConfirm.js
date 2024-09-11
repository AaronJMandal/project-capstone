import { jwtDecode } from "jwt-decode";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const SignupConfirm = () => {
  const token = localStorage.getItem("id_token");
  console.log(token);
  return (
    <div>
      Account successfully created!
      <div>
        Please log in here
        <LoginButton />
      </div>
    </div>
  );
};

export default SignupConfirm;
