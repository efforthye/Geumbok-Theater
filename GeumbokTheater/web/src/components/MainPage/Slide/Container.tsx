import MainCarouselComponent from "./Component";
import { useState, useEffect } from "react";

const MainCarouselContainer = () => {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
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

  const realImgs: Array<Object> = [imgs[imgs.length - 1], ...imgs, imgs[0]];

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
      prev={prev}
      move={move}
      imgs={imgs}
      idx={idx}
      realImgs={realImgs}
      test={test}
      setMove={setMove}
    ></MainCarouselComponent>
  );
};

export default MainCarouselContainer;
