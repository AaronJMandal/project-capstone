import styled from "styled-components";
const profile = require("../imgs/profile.png");
const harm = require("../imgs/harm.png");
const love = require("../imgs/loved.png");
const photo = require("../imgs/photo.png");

const IntroBoxes = () => {
  return (
    <>
      <GridWrap>
        <GridBox>
          <WhiteStroke>
            Hello, I'm Reigen Arataka, the new star of the psychic world!
          </WhiteStroke>
          <br></br>
          <WhiteStroke>
            Don't try to do it alone. Come talk to me!! Honest billing and
            various courses available!!!
          </WhiteStroke>
        </GridBox>
        <img
          src={profile}
          alt="profile"
          style={{
            background: "red",
            padding: "2px",
            boxShadow: "20px 15px teal",
          }}
        ></img>
      </GridWrap>

      <GridWrap>
        <GridBox bgcolor="lightblue">
          <CustomGridBox>
            <img src={harm} alt="harm" style={{ maxWidth: "300px" }}></img>
            <br></br>
            <span style={{ color: "#CF524E" }}>
              Those of you troubled with "spiritual harm", are they causing you
              trouble with your neighbours!?
            </span>
            <br></br>
            <span style={{ color: "yellow" }}>"Rapping Sounds"</span>
            <br></br> "Paralyzed" when you're trying to sleep "Poltergeists,"
            etc...
          </CustomGridBox>
        </GridBox>
        <GridBox bgcolor="rgba(245, 251, 133)">
          <img src={love} alt="loved" style={{ maxWidth: "350px" }}></img>
          <span style={{ color: "darkred" }}>
            Do you want to hear the voice of your loved one again...? Those able
            to do "seances"
          </span>{" "}
          <span style={{ color: "#357847" }}>
            are considered modern-day necromancers. Why not put an end to those
            pesky inheritance battles?
          </span>
        </GridBox>
      </GridWrap>

      <GridWrap>
        <GridBox bgcolor="#ACD657">
          <CustomGridBox>
            <img
              src={photo}
              style={{ maxWidth: "250px" }}
              alt="phototext"
            ></img>
            <br></br>
            <span style={{ color: "darkgreen", fontSize: "1.1em" }}>
              Spirit Photography Evaluation
            </span>
            <br></br>I will also evaluate any other possible cursed items you
            have and exorcise them!
          </CustomGridBox>
        </GridBox>
      </GridWrap>
    </>
  );
};

export default IntroBoxes;

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
  background: ${(props) => props.bgcolor || "#d5969e"};
  font-weight: 500;
  font-size: 1.5em;
  max-width: 25ch;
  border-radius: 3px;
  line-height: 110%;
  box-shadow: 20px 15px teal;
`;

const CustomGridBox = styled.div`
  text-align: center;
`;

const WhiteStroke = styled.p`
  font-weight: 700;
  font-size: 1.2em;
  color: white;
  -webkit-text-stroke: 1.2px black;
`;
