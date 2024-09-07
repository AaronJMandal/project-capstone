import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Hello {user.name}!</h1>
      {isAuthenticated && <LogoutButton />}
    </div>
  );
};

export default Dashboard;
