import styled from "styled-components";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";
import bg from "../img/Generated.png";
import { useEffect, useState, useRef } from "react";
import { lightTheme } from "../theme";
import { Link } from "react-router-dom";

const EnterContainer = styled.div`
  width: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const GoHome = styled.div`
  position: absolute;
  width: 7%;
  height: 7%;
  top: 5%;
  left: 12%;
  z-index: 3;
`;

const Edited = styled.div`
  position: absolute;
  width: 75%;
  /* height: auto; */
  height: 30%;
  overflow: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  background-color: ${(props) => props.theme.basic};
  border-radius: 30px;
  padding: 2%;
  p {
    width: 100%;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: normal;
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

const ImgContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blueviolet;
`;

function Generate() {
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
          <Link to="/">
            <GoHome></GoHome>
          </Link>
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
            <Edited>
              <p>Edited Prompt will be shown Here.</p>
            </Edited>
            {/* <ImgContainer></ImgContainer> */}
          </EnterContainer>
        </>
      </Background>
    </>
  );
}

export default Generate;
