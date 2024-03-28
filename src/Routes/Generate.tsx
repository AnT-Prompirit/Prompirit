import styled from "styled-components";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";
import bg from "../img/Generated.png";
import { useEffect, useState, useRef } from "react";
import { lightTheme } from "../theme";
import { GenImg } from "../Components/FourImages";
import img1_1 from "../img/img0_p.jpg";
import img2_1 from "../img/img2_p.jpg";
import img3_1 from "../img/img3_p.jpg";
import img4_1 from "../img/img20_p.jpg";
import img5_1 from "../img/img55_p.jpg";
import img6_1 from "../img/img143_p.jpeg";
import img7_1 from "../img/img144_p.jpeg";
import img8_1 from "../img/img218_p.jpg";
import GoHome from "../Components/GoHome";

const EnterContainer = styled.div`
  width: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
  width: 75%;
  line-height: 0;
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translate(-50%);
  z-index: 500;
  display: flex;
  justify-content: space-between;
  > * {
    margin-right: 1.5%;
  }
  > *:last-child {
    margin-right: 0;
  }
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

  const generation = localStorage.getItem("generation");
  const imgnum = generation ? parseInt(generation) % 8 : 9;

  const images = [
    img1_1,
    img2_1,
    img3_1,
    img4_1,
    img5_1,
    img6_1,
    img7_1,
    img8_1,
    img8_1,
  ];

  const editedPrompts = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "Edited Prompt will be shown Here.",
  ];

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
            <Edited>
              <p>{editedPrompts[imgnum]}</p>
            </Edited>
            <ImgContainer>
              <GenImg>
                <img src={images[imgnum]}></img>
              </GenImg>
              <GenImg>
                <img src={images[imgnum]}></img>
              </GenImg>
            </ImgContainer>
          </EnterContainer>
        </>
      </Background>
    </>
  );
}

export default Generate;
