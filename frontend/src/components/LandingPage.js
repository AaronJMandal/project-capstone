import styled from "styled-components";
import { Link } from "react-router-dom";

const header = require("../imgs/spiritsandsuch-header.png");
const reig = require("../imgs/reig.png");

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const LandingPage = () => {
  return (
    <DivContainer>
      <ImgHeader src={header} alt="header" />
      <H2>
        The <span style={{ color: "red" }}>GREATEST</span> psychic of the 21st
        century!!
      </H2>
      <ImgReig src={reig} />
      <StyledLink to="/login">➡➡ ENTER HERE ⬅⬅</StyledLink>
    </DivContainer>
  );
};

export default LandingPage;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
    @media (max-width: ${breakpoints.tablet}) {

  }

  @media (max-width: ${breakpoints.mobile}) {

`;

const StyledLink = styled(Link)`
  font-size: 3em;

  
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2em;
  }
  @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.5em;
`;

const ImgHeader = styled.img`
  max-width: 100%;
  height: auto;


    @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%; 
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 60%; 
`;

const ImgReig = styled.img`
max-width: 500px;
  height: auto;


    @media (max-width: ${breakpoints.tablet}) {
    max-width: 350px; 
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px; 

`;

const H2 = styled.h2`

  margin: 10px;
  font-family: "Tiny5", sans-serif;
  font-size: 3em;

  
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2em;
  }
  @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.5em;
`;
