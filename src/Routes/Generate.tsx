import styled from "styled-components";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";
import bg from "../img/Generated.png";
import { useEffect, useState, useRef } from "react";
import { lightTheme } from "../theme";
import { GenImg } from "../Components/FourImages";
import img1_1 from "../img/img0_p.jpg";
import img2_1 from "../img/img28_p.jpg";
import img3_1 from "../img/img74_p.jpeg";
import img4_1 from "../img/img138_p.jpeg";
import img5_1 from "../img/img144_p.jpeg";
import img6_1 from "../img/img202_p.jpg";
import img7_1 from "../img/img212_p.jpeg";
import img8_1 from "../img/img218_p.jpg";
import img1_2 from "../img/img0_p2.jpg";
import img2_2 from "../img/img28_p2.jpg";
import img3_2 from "../img/img74_p.jpeg";
import img4_2 from "../img/img138_p2.jpg";
import img5_2 from "../img/img144_p2.jpg";
import img6_2 from "../img/img202_p2.jpg";
import img7_2 from "../img/img212_p.jpeg";
import img8_2 from "../img/img218_p2.jpg";
import img9_1 from "../img/no-image.jpg";
import GoHome from "../Components/GoHome";

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

  const generation = localStorage.getItem("generation");
  const imgnum = generation ? parseInt(generation) % 8 : 9;

  const images: ImagePair[] = [
    [img1_1, img1_2],
    [img2_1, img2_2],
    [img3_1, img3_2],
    [img4_1, img4_2],
    [img5_1, img5_2],
    [img6_1, img6_2],
    [img7_1, img7_2],
    [img8_1, img8_2],
    [img9_1, img9_1],
  ];

  const editedPrompts = [
    "amusement, family came back vacation great time, went disney world orlando, fl see kids great time made happy wait next vacation, vacation great time, fun, enjoyment, happiness, Vivid Colors, Playful , Warm Lighting",
    "anger, purchased new phone online last week, got, box empty, contacted company, initially refused refund money, got pretty angry, new phone online, acrimoniousness, exasperation, angriness, Angered, Disappointed, Determined",
    "disgust, friend maria plans brunch, supposed meet 11, even call till 3, work 5, day waste, meet 11 till work day, awfulness, nauseate, blame, Warm Neutrals, Soft Pastels, Vintage Textures",
    "sadness, family still recovered untimely passing father two years ago, siblings managing, found peace, mother different story, sudden unexpected, family recovered, sorrowfulness, disheartenedness, sorrow, Soft Pastels, Watercolor Brush Strokes, Muted Neutrals",
    "contentment, wife made pancakes breakfast, full belly feel rather happy, wife pancakes breakfast, gratification, satiation, light heartedness, golden yellow, orange, red, brushstroke, soft, illustration, whimsical",
    "excitement, got hired dream job apple, wait start, help design new iphones, going much fun, job apple wait start help, desire succeed, love, exhilaration, Vivid Colors, Playful , Dynamic Composition",
    "awe, son saving 3 years bought first house, son saving years bought house, revere, awestruck, reverence, warm, lighting, soft, handwritten",
    "fear, night walk home alone late work, nervous, work nervous, afraidness, creepiness, fearfulness, dim_lighting, high_contrast, exaggerated_shadows",
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
