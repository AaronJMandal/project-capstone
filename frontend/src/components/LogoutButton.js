import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("id_token");
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
