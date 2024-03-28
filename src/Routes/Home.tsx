import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bg from "../img/Home.png";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";
import img0_p from "../img/img0_p.jpg";
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
          src1={img0_p}
          src2={img0_p}
          src3={img0_p}
          src4={img0_p}
        ></FourImages>
      </ImgContainer>
      <ImgContainer style={{ height }}>
        <FourImages
          imgStyle="line"
          src1={img0_p}
          src2={img0_p}
          src3={img0_p}
          src4={img0_p}
        ></FourImages>
      </ImgContainer>
    </>
  );
}

export default Home;
