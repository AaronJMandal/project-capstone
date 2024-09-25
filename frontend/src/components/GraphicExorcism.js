import styled, { keyframes } from "styled-components";
import video from "../video/live-exorcist.mp4";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import LoginButton from "./LoginButton";
const GraphicExorcism = () => {
  const [videoEnded, setVideoEnded] = useState(null);

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHomepage = () => {
    navigate("/dashboard");
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Container>
            <video
              muted
              width="1280"
              height="720"
              controls
              onEnded={() => {
                setVideoEnded(true);
              }}
            >
              <source src={video} type="video/mp4"></source>
            </video>

            {videoEnded && (
              <Wrapper>
                <Finished>Photo has been succesfully exorcised!</Finished>
                <GridBox onClick={handleHomepage}>Back to dashboard</GridBox>
              </Wrapper>
            )}
          </Container>
        </>
      ) : (
        <div>
          Please log in here
          <LoginButton />
        </div>
      )}
    </>
  );
};

export default GraphicExorcism;

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2em;
`;

const Finished = styled.h1`
  color: pink;
  font-size: 3em;
  -webkit-text-stroke: 1.3px navy;
`;

const GridBox = styled.button`
  padding: 1em;
  color: #a7ff42;
  background: #9a42ff;
  font-weight: 500;
  font-size: 1.5em;
  max-width: 30ch;
  border-radius: 3px;
  line-height: 110%;
  text-align: center;
  z-index: 10;
  cursor: pointer;
  text-decoration: none;
`;
const fadeIn = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 50px;
`;
