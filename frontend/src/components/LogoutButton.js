import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
