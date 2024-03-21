import styled from "styled-components";
import mic from "../img/mic.png";
import { Link } from "react-router-dom";

type EnterProps = {
  color: string;
  width: number;
  top: number;
  enterPromptWidth: number;
  enterButtonWidth: number;
  enterMicWidth: number;
  enterPromptPadding: number;
};

const EnterBox = styled.div<{ enterBoxWidth: number; enterBoxTop: number }>`
  position: absolute;
  width: ${(props) => props.enterBoxWidth}%;
  height: 8.5%;
  top: ${(props) => props.enterBoxTop}%;
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

const EnterPrompt = styled.input<{
  enterPromptWidth: number;
  enterPromptPadding: number;
}>`
  height: 100%;
  width: ${(props) => props.enterPromptWidth}%;
  border: 1px solid;
  border-color: ${(props) => props.theme.lightGray};
  border-radius: 90px;
  padding: 15px 15px 15px ${(props) => props.enterPromptPadding}%;
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

const EnterMic = styled.button<{ enterMicWidth: number }>`
  position: absolute;
  left: ${(props) => props.enterMicWidth}%;
  width: ${(props) => props.enterMicWidth}%;
  height: 40%;
  z-index: 1;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const EnterButton = styled.div<{
  enterButtonWidth: number;
  backgroundColor: string;
}>`
  height: 100%;
  width: ${(props) => props.enterButtonWidth}%;
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

function Enter({
  color,
  width,
  top,
  enterPromptWidth,
  enterButtonWidth,
  enterMicWidth,
  enterPromptPadding,
}: EnterProps) {
  return (
    <>
      <EnterBox enterBoxWidth={width} enterBoxTop={top}>
        <EnterMic enterMicWidth={enterMicWidth}>
          <img src={mic}></img>
        </EnterMic>
        <EnterPrompt
          enterPromptWidth={enterPromptWidth}
          enterPromptPadding={enterPromptPadding}
          type="text"
          placeholder="Enter Your Prompt"
        ></EnterPrompt>
        <EnterButton
          backgroundColor={color}
          enterButtonWidth={enterButtonWidth}
        >
          <Link to="/generating">
            <span>Generate</span>
          </Link>
        </EnterButton>
      </EnterBox>
    </>
  );
}

export default Enter;
