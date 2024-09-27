import DashboardAuth from "./DashboardAuth";
import styled from "styled-components";
import IntroBoxes from "./IntroBoxes";
import LiveExorcism from "./LiveExorcism";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Pricing from "./Pricing";
import Appointments from "./Appointments";

const headGif = require("../imgs/head.gif");
const arrowGif = require("../imgs/arrowgif.gif");

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <DashboardAuth />
      {isAuthenticated && (
        <>
          <Container>
            <img src={headGif} alt="Spirits and Such Consultation Office"></img>
          </Container>
          <IntroBoxes />
          <CenteredDiv>
            <img src={arrowGif} alt="arrow" style={{ height: "150px" }}></img>
          </CenteredDiv>
          <Pricing />
          <LiveExorcism />
          <Appointments />
        </>
      )}
    </div>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredDiv = styled(Container)``;
