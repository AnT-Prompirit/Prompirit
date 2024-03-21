import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import micactivate from "../img/micactivate.gif";
import popup from "../img/Popup.png";
import { useNavigate } from "react-router-dom";

interface PopupProps {
  onClose: () => void;
}

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 19%;
  width: 40%;
  height: auto;
`;

const PopupBg = styled.img`
  width: 100%;
  object-fit: cover;
  top: 0;
  z-index: 2001;
  position: relative;
`;

const PopupBtn = styled.button`
  position: fixed;
  left: 65%;
  z-index: 3000;
  width: 4%;
  height: 8%;
`;

const MicContainer = styled.button`
  position: absolute;
  z-index: 2002;
  width: 25.5%;
  height: 44%;
  top: 20.5%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  overflow: hidden;
  margin-top: 8%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

function Popup({ onClose }: PopupProps) {
  const [micActivate, setMicActivate] = useState(true);

  const toggleMic = () => {
    setMicActivate(!micActivate);
    handleButtonClick();
  };

  const navigate = useNavigate();

  // 버튼 클릭 이벤트 핸들러
  const handleButtonClick = () => {
    // 1700ms 후에 "/generate"로 이동
    setTimeout(() => {
      navigate("/generating");
    }, 900);
  };

  return (
    <PopupBackground>
      <PopupContainer>
        <PopupBg src={popup}></PopupBg>
        <PopupBtn onClick={onClose}></PopupBtn>
        {micActivate && (
          <MicContainer onClick={toggleMic}>
            <img src={micactivate}></img>
          </MicContainer>
        )}
      </PopupContainer>
    </PopupBackground>
  );
}

export default Popup;
