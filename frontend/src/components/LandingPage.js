import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <DivContainer>
      <H1>★ ☆Spirits & Such Consultation★ ☆</H1>
      <H2>The GREATEST psychic of the 21st century!!</H2>
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

const H1 = styled.h1`
  margin: 10px;
`;

const H2 = styled.h2`
  margin: 10px;
`;
