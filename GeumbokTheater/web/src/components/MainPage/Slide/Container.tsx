import MainCarouselComponent from "./Component";
import { useState, useEffect } from "react";
import { setInterval } from "timers/promises";

const MainCarouselContainer = () => {
  const [next, setNext] = useState(false);
  const [auto, setAuto] = useState(true);
  const [move, setMove] = useState(1);
  const [idx, setIdx] = useState(0);
  const [test, setTest] = useState(false);

  const imgs: Array<Object> = [
    {
      src: "/imgs/main.jpg",
    },
    {
      src: "/imgs/main2.jpg",
    },
    {
      src: "/imgs/main3.jpg",
    },
  ];

  const autoCarouselFunc = () => {
    console.log("들어왔냐");
    if (!auto) return;
    console.log("들어왔냐안까지");

    intervalId = window.setInterval(() => {
      setMove(move + 1);
      console.log(move);
    }, 3000);
    if (move == imgs.length + 1) {
      setTimeout(() => {
        setTest(true);
        setMove(1);
      }, 500);
    } else {
      setTimeout(() => {
        setTest(false);
      }, 100);
    }
  };

  const realImgs: Array<Object> = [imgs[imgs.length - 1], ...imgs, imgs[0]];

  const playClick = () => {
    if (auto) return;
    setAuto(true);
    console.log(auto);
    console.log(intervalId);
    autoCarouselFunc();
  };
  const pauseClick = () => {
    if (!auto) return;

    setAuto(false);
    console.log(auto);
    console.log(intervalId);

    clearInterval(intervalId);
  };

  const nextOnclick = () => {
    if (next) return;
    setNext(true);
    setMove(move + 1);
    setTimeout(() => {
      setNext(false);
    }, 600);
  };

  const prevOnclick = () => {
    if (next) return;
    setNext(true);
    setMove(move - 1);
    setTimeout(() => {
      setNext(false);
    }, 600);
  };

  const pageOnclick = (index: number): void => {
    setMove(index + 1);

    console.log(move);
  };

  let intervalId: number;

  useEffect(() => {
    if (!auto) return;
    autoCarouselFunc();

    return () => {
      console.log("치웠다");
      clearInterval(intervalId);
    };
  }, [move, auto]);

  useEffect(() => {
    console.log(move);
    if (move == 0) {
      setTimeout(() => {
        setTest(true);
        setMove(imgs.length);
      }, 500);
    } else if (move == imgs.length + 1) {
      setTimeout(() => {
        setTest(true);
        setMove(1);
      }, 500);
    } else {
      setTimeout(() => {
        setTest(false);
      }, 100);
    }
  }, [next]);

  return (
    <MainCarouselComponent
      nextOnclick={nextOnclick}
      prevOnclick={prevOnclick}
      next={next}
      move={move}
      imgs={imgs}
      idx={idx}
      realImgs={realImgs}
      test={test}
      setMove={setMove}
      pageOnclick={pageOnclick}
      playClick={playClick}
      pauseClick={pauseClick}
    ></MainCarouselComponent>
  );
};

export default MainCarouselContainer;
