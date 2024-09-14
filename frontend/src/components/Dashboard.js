import DashboardAuth from "./DashboardAuth";
import styled from "styled-components";

const profile = require("../imgs/profile.png");
const headGif = require("../imgs/head.gif");

const Dashboard = () => {
  return (
    <div>
      <DashboardAuth />
      <Container>
        <img src={headGif} alt="Spirits and Such Consultation Office"></img>
      </Container>
      <GridWrap>
        <GridBox>
          <p> Hello, I'm Reigen Arataka, the new star of the psychic world! </p>
          <br></br>
          <p>
            Don't try to do it alone. Come talk to me!! Honest billing and
            various courses available!!!
          </p>
        </GridBox>
        <img
          src={profile}
          alt="profile"
          style={{ background: "red", padding: "2px" }}
        ></img>
      </GridWrap>
    </div>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 4rem;
`;

const GridBox = styled.p`
  padding: 3rem;
  background: pink;
  font-weight: 500;
  font-size: 1.5em;
  max-width: 25ch;
  border-radius: 3px;
  line-height: 110%;
`;
