import styled from "styled-components";

type FourImagesProps = {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  imgStyle: "grid" | "line";
};

const ImgBox = styled.div`
  width: 28%;
  line-height: 0;
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "bottom-left bottom-right";
  grid-gap: 5%;
  position: absolute;
  top: 14.5%;
  left: 14.5%;
  z-index: 500;
`;

const ImgLine = styled.div`
  width: 59.4%;
  line-height: 0;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%);
  z-index: 500;
  display: flex;
  justify-content: space-between;
`;

export const GenImg = styled.div`
  border-radius: 10%;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 10%;
  }
`;

const BoxImg = styled(GenImg)<{ gridArea: string }>`
  display: ${(props) => props.gridArea};
`;

const LineImg = styled(GenImg)`
  padding: 1.5%;
  flex: 1;
`;

function FourImages({ src1, src2, src3, src4, imgStyle }: FourImagesProps) {
  return (
    <>
      {imgStyle === "grid" && (
        <ImgBox>
          <BoxImg gridArea="top-left">
            <img src={src1} alt="Image 1" />
          </BoxImg>
          <BoxImg gridArea="top-right">
            <img src={src2} alt="Image 2" />
          </BoxImg>
          <BoxImg gridArea="bottom-left">
            <img src={src3} alt="Image 3" />
          </BoxImg>
          <BoxImg gridArea="bottom-right">
            <img src={src4} alt="Image 4" />
          </BoxImg>
        </ImgBox>
      )}
      {imgStyle === "line" && (
        <ImgLine>
          <LineImg>
            <img src={src1} alt="Image 1" />
          </LineImg>
          <LineImg>
            <img src={src2} alt="Image 2" />
          </LineImg>
          <LineImg>
            <img src={src3} alt="Image 3" />
          </LineImg>
          <LineImg>
            <img src={src4} alt="Image 4" />
          </LineImg>
        </ImgLine>
      )}
    </>
  );
}

export default FourImages;
