import styled from "styled-components";
import { Link } from "react-router-dom";

const header = require("../imgs/spiritsandsuch-header.png");
const reig = require("../imgs/reig.png");

const LandingPage = () => {
  return (
    <DivContainer>
      <img src={header} alt="header"></img>
      <H2>The GREATEST psychic of the 21st century!!</H2>
      <img src={reig} style={{ maxWidth: "500px" }} alt="reig"></img>
      <Link to="/login">➡➡ ENTER HERE ⬅⬅</Link>
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
`;
