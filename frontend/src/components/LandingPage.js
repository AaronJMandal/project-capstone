import styled from "styled-components";
import { Link } from "react-router-dom";

const header = require("../imgs/spiritsandsuch-header.png");
const reig = require("../imgs/reig.png");

const LandingPage = () => {
  return (
    <DivContainer>
      <img src={header} alt="header"></img>
      <H2>
        The <span style={{ color: "red" }}>GREATEST</span> psychic of the 21st
        century!!
      </H2>
      <img src={reig} style={{ maxWidth: "500px" }} alt="reig"></img>
      <Link style={{ fontSize: "3em", padding: "30px" }} to="/login">
        ➡➡ ENTER HERE ⬅⬅
      </Link>
    </DivContainer>
  );
};

export default LandingPage;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  margin: 10px;
  font-family: "Tiny5", sans-serif;
  font-size: 3em;
`;
