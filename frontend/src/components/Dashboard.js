import DashboardAuth from "./DashboardAuth";
import styled from "styled-components";
import IntroBoxes from "./IntroBoxes";

const headGif = require("../imgs/head.gif");
const arrowGif = require("../imgs/arrowgif.gif");

const Dashboard = () => {
  return (
    <div>
      <DashboardAuth />
      <Container>
        <img src={headGif} alt="Spirits and Such Consultation Office"></img>
      </Container>
      <IntroBoxes />
      <CenteredDiv>
        <img src={arrowGif}></img>
      </CenteredDiv>
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
