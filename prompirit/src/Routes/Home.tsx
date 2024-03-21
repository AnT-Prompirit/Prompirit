import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bg from "../img/Home.png";
import Background from "../Components/BackGround";
import Enter from "../Components/Enter";

const EnterContainer = styled.div`
  width: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
    </>
  );
}

export default Home;
