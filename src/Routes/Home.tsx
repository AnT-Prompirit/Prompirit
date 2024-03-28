import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bg from "../img/Home.png";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";
import img1 from "../img/img_1.jpg";
import img2 from "../img/img_2.jpg";
import img3 from "../img/img_3.jpeg";
import img4 from "../img/img_4.jpg";
import img5 from "../img/img_5.jpg";
import img6 from "../img/img_6.jpg";
import img7 from "../img/img_7.jpeg";
import img8 from "../img/img_8.jpeg";
import FourImages from "../Components/FourImages";

const EnterContainer = styled.div`
  width: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ImgContainer = styled.div`
  width: 100%;
  line-height: 0;
  position: relative;
  z-index: 500;
  min-width: 632.8px;
`;

function Home() {
  const enterContainerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    localStorage.removeItem("promptText");
  }, []);

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
        <EnterContainer ref={enterContainerRef} style={{ height }}>
          <Enter
            color="black"
            width={38}
            top={61}
            enterPromptWidth={73}
            enterButtonWidth={24.5}
            enterMicWidth={3.5}
            enterPromptPadding={9}
          ></Enter>
        </EnterContainer>
      </Background>
      <ImgContainer style={{ height }}>
        <FourImages
          imgStyle="grid"
          src1={img1}
          src2={img2}
          src3={img3}
          src4={img4}
        ></FourImages>
      </ImgContainer>
      <ImgContainer style={{ height }}>
        <FourImages
          imgStyle="line"
          src1={img5}
          src2={img6}
          src3={img7}
          src4={img8}
        ></FourImages>
      </ImgContainer>
    </>
  );
}

export default Home;
