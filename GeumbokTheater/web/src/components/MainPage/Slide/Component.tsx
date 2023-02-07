import styled from "styled-components";
import { useState, useEffect } from "react";
type Props = {
  nextOnclick: () => void;
  prevOnclick: () => void;
  move: number;
  imgs: Array<object>;
  next: boolean;
  idx: number;
  realImgs: Array<Object>;
  test: boolean;
  setMove: any;
  pageOnclick: (index: number) => void;
  playClick: () => void;
  pauseClick: () => void;
};

const MainCarouselComponent: React.FC<Props> = ({
  nextOnclick,
  prevOnclick,
  move,
  imgs,
  next,
  realImgs,
  test,
  pageOnclick,
  playClick,
  pauseClick,
}) => {
  return (
    <TestComp>
      <CarouselImgBox
        move={move}
        next={next}
        test={test}
        className={test ? "" : "test1"}
      >
        {realImgs.map((item: object, index: number): any => (
          <ImgsBox
            onClick={() => {
              console.log(imgs);
            }}
            key={`mcImg-${index}`}
          >
            <img src={Object(item).src}></img>
          </ImgsBox>
        ))}
      </CarouselImgBox>
      <CarouselBtnBox>
        <div onClick={prevOnclick}>
          <img src="/imgs/prevBtn.svg" alt=""></img>
        </div>
        <div onClick={nextOnclick}>
          <img src="/imgs/nextBtn.svg" alt=""></img>
        </div>
      </CarouselBtnBox>
      <CarouselPageBox>
        {imgs.map((item: object, index: number): any => (
          <div
            key={`page-${index}`}
            onClick={() => {
              pageOnclick(index);
            }}
            className={index == move - 1 ? "on" : ""}
          ></div>
        ))}
      </CarouselPageBox>
      <CarouselAutoBtnBox>
        <div onClick={pauseClick}>
          <img src="/imgs/pauseBtn.svg" alt="" />
        </div>
        <div onClick={playClick}>
          <img src="/imgs/playBtn.svg" alt="" />
        </div>
      </CarouselAutoBtnBox>
    </TestComp>
  );
};

export default MainCarouselComponent;

const CarouselAutoBtnBox = styled.div`
  position: absolute;
  display: flex;
  top: 720px;
  right: 515px;
  div {
    margin-right: 5px;
  }
  img {
    width: 10px;
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(168deg)
      brightness(113%) contrast(101%);
  }
`;

const CarouselPageBox = styled.div`
  display: flex;
  position: absolute;
  top: 700px;
  right: 500px;
  div {
    background-color: #8080803b;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 5px;

    &.on {
      background-color: white;
    }
  }
`;
const TestComp = styled.div`
  & > .test1 {
    transition: margin-left 0.4s ease-out;
  }
`;
const CarouselImgBox = styled.div<{
  move: number;
  next: boolean;
  test: boolean;
}>`
  display: flex;
  overflow: hidden;
  margin-left: ${({ move }) => {
    return move * -1920 + "px";
  }};
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
