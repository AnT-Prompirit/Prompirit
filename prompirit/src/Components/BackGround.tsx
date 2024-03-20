import styled from "styled-components";

type BackgroundProps = {
  src: string;
  children: React.ReactChild;
};

const HomeContainer = styled.div`
  min-width: 632.8px;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HomeBg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;

function Background({ src, children }: BackgroundProps) {
  return (
    <>
      <HomeContainer>
        <HomeBg src={src}></HomeBg>
        {children}
      </HomeContainer>
    </>
  );
}

export default Background;
