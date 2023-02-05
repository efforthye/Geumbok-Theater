import styled from "styled-components";

type Props = {
  nextOnclick: () => void;
  prevOnclick: () => void;
  move: number;
  imgs: Array<object>;
  next: boolean;
  prev: boolean;
  idx: number;
};

const MainCarouselComponent: React.FC<Props> = ({
  nextOnclick,
  prevOnclick,
  move,
  imgs,
  next,
  prev,
  idx,
}) => {
  return (
    <>
      <CarouselImgBox move={move} next={next} prev={prev}>
        <img src={Object(imgs[0]).src} alt="" />
        <img src={Object(imgs[1]).src} alt="" />
        <img src={Object(imgs[2]).src} alt="" />
        {/* {idx == 0 ? (
          <img src={Object(imgs[imgs.length - 1]).src}></img>
        ) : (
          <img src={Object(imgs[idx - 1]).src}></img>
        )}
        <img src={Object(imgs[idx]).src}></img>

        {idx == imgs.length - 1 ? (
          <img src={Object(imgs[0]).src}></img>
        ) : (
          <img src={Object(imgs[idx + 1]).src}></img>
        )} */}
        {/* <img src={Object(imgs[idx - 1]).src}></img>
        <img src={Object(imgs[idx]).src}></img>
        <img src={Object(imgs[idx + 1]).src}></img> */}

        {/* {imgs.map((item: object, index: number): any => (
          <ImgsBox
            onClick={() => {
              console.log(imgs);
            }}
            key={`mcImg-${index}`}
          >
            <img src={Object(item).src}></img>
          </ImgsBox>
        ))} */}
      </CarouselImgBox>
      <CarouselBtnBox>
        <div onClick={prevOnclick}>
          <img src="/imgs/prevBtn.svg" alt=""></img>
        </div>
        <div onClick={nextOnclick}>
          <img src="/imgs/nextBtn.svg" alt=""></img>
        </div>
      </CarouselBtnBox>
    </>
  );
};

export default MainCarouselComponent;

const CarouselImgBox = styled.div<{
  move: number;
  next: boolean;
  prev: boolean;
}>`
  display: flex;
  overflow: hidden;
  margin-left: ${({ move }) => {
    return move * -1920 + "px";
  }};
  /* transform: ${({ next }) => {
    return next ? "translateX(-1920px)" : "";
  }};
  transform: ${({ prev }) => {
    return prev ? "translateX(1920px)" : "";
  }}; */

  transition: margin 0.5s ease-in;
`;

const CarouselBtnBox = styled.div`
  width: 1800px;

  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 330px;
  left: 50px;

  img {
    cursor: pointer;
    width: 50px;
    filter: invert(38%) sepia(7%) saturate(358%) hue-rotate(202deg)
      brightness(94%) contrast(95%);
  }
`;

const ImgsBox = styled.div`
  display: flex;
`;
