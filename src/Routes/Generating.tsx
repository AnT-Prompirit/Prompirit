import styled from "styled-components";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";
import bg from "../img/Generating.png";
import loading from "../img/loading.gif";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { lightTheme } from "../theme";
import GoHome from "../Components/GoHome";

const EnterContainer = styled.div`
  width: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Loading = styled.div`
  position: absolute;
  width: 7%;
  height: 15%;
  top: 70%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

function Generating() {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 함수 가져오기

  useEffect(() => {
    // 1500ms 후에 "/generate"로 이동
    const timer = setTimeout(() => {
      navigate("/Prompirit/generate");
    }, 1700);

    // 컴포넌트가 unmount될 때 clearTimeout 호출하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, [navigate]);

  const enterContainerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      if (enterContainerRef.current) {
        const enterContainerWidth = enterContainerRef.current.offsetWidth;
        const enterContainerHeight = enterContainerWidth * 0.42;
        setHeight(enterContainerHeight);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // 컴포넌트가 마운트될 때 한번 실행
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Background src={bg}>
        <>
          <GoHome></GoHome>
          <EnterContainer ref={enterContainerRef} style={{ height }}>
            <Enter
              color={lightTheme.main}
              width={75}
              top={25}
              enterPromptWidth={85.5}
              enterButtonWidth={13}
              enterMicWidth={2}
              enterPromptPadding={5}
            ></Enter>
            <Loading>
              <img src={loading}></img>
            </Loading>
          </EnterContainer>
        </>
      </Background>
    </>
  );
}

export default Generating;
