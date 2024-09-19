import styled from "styled-components";

const curse = require("../imgs/curse.png");
const calm = require("../imgs/reigencalm.gif");
const dimple = require("../imgs/dimple.gif");

const AppointmentButton = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <GridWrap>
        <GridBox bgcolor="#D69829">
          <img alt="curse" src={curse}></img>
          <h3> Let the clensing begin!!</h3>
          <br></br>
          <ul style={{ color: "black", lineHeight: "50px" }}>
            <li>
              <span style={{ color: "green" }}>20$</span> Option 1: Trial Course
              (offers free Graphical Exorcism or a body clense)
            </li>
            <li>
              Option 2: All-Out Exorcism (For serious cases, billing will be
              discussed after the appointment)
            </li>
          </ul>
        </GridBox>

        <img style={{ width: "250px" }} alt="dimple" src={dimple}></img>
      </GridWrap>
    </div>
  );
};

export default AppointmentButton;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 2rem;
`;

const GridBox = styled.div`
  padding: 1.8em;
  background: ${(props) => props.bgcolor || "#E0EAF8"};
  color: #35e718;
  font-weight: 500;
  font-size: 1.5em;
  //   max-width: 25ch;
  border-radius: 3px;
  line-height: 110%;
  border: solid 3px red;
  text-align: left;
  //   box-shadow: 20px 15px teal;
`;
