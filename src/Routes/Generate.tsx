import styled from "styled-components";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";
import bg from "../img/Generated.png";
import { useEffect, useState, useRef } from "react";
import { lightTheme } from "../theme";
import { GenImg } from "../Components/FourImages";
import GoHome from "../Components/GoHome";
import { useParams } from "react-router-dom";
import Images from "../Components/Images";
import Prompts from "../Components/Prompts";

type ImagePair = [string, string];

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
  flex-direction: column;
  h6 {
    width: 100%;
    font-weight: 900;
    line-height: 3;
    overflow-wrap: break-word;
    word-break: normal;
    @media (min-width: 500px) {
      font-size: 11px;
    }
    @media (min-width: 900px) {
      font-size: 14px;
    }
    @media (min-width: 1200px) {
      font-size: 17px;
    }
  }
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
    flex: 1;
    margin-right: 1.5%;
  }
  > *:last-child {
    flex: 1;
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

  const { user } = useParams();
  const userNumber = user ? parseInt(user) : 0;

  const images: ImagePair[] = Images(userNumber);

  const generation = localStorage.getItem("generation");
  const division = images.length - 1;
  const imgnum = generation ? parseInt(generation) % division : division;

  const editedPrompts = Prompts(userNumber);

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
              <h6>Edited Prompt By Prompirit</h6>
              <p>{editedPrompts[imgnum]}</p>
            </Edited>
            <ImgContainer>
              <GenImg>
                <img src={images[imgnum][0]}></img>
              </GenImg>
              <GenImg>
                <img src={images[imgnum][1]}></img>
              </GenImg>
            </ImgContainer>
          </EnterContainer>
        </>
      </Background>
    </>
  );
}

export default Generate;
