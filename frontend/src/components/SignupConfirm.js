import LoginButton from "./LoginButton";

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
