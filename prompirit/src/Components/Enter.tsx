import styled from "styled-components";
import mic from "../img/mic.png";
import { Link } from "react-router-dom";

type EnterProps = {
  color: string;
};

const EnterBox = styled.div`
  position: absolute;
  width: 38%;
  height: 8.5%;
  top: 61%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media (min-width: 0px) {
    font-size: 10px;
  }
  @media (min-width: 500px) {
    font-size: 8px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const EnterPrompt = styled.input`
  height: 100%;
  width: 73%;
  border: 1px solid;
  border-color: ${(props) => props.theme.lightGray};
  border-radius: 90px;
  padding: 15px 15px 15px 8%;
  @media (min-width: 500px) {
    font-size: 10px;
  }
  @media (min-width: 900px) {
    font-size: 13px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
  position: relative;
`;

const EnterMic = styled.button`
  position: absolute;
  left: 3%;
  width: 3%;
  height: 40%;
  z-index: 1;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const EnterButton = styled.div<{ backgroundColor: string }>`
  height: 100%;
  width: 24.5%;
  border-radius: 90px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  span {
    color: white;
    @media (min-width: 500px) {
      font-size: 10px;
    }
    @media (min-width: 900px) {
      font-size: 13px;
    }
    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }
`;

function Enter({ color }: EnterProps) {
  return (
    <>
      <EnterBox>
        <EnterMic>
          <img src={mic}></img>
        </EnterMic>
        <EnterPrompt type="text" placeholder="Enter Your Prompt"></EnterPrompt>
        <EnterButton backgroundColor={color}>
          <Link to="/generating">
            <span>Generate</span>
          </Link>
        </EnterButton>
      </EnterBox>
    </>
  );
}

export default Enter;
