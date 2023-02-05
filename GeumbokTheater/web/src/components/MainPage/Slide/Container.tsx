import MainCarouselComponent from "./Component";
import { useState, useEffect } from "react";

const MainCarouselContainer = () => {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [move, setMove] = useState(1);
  const [idx, setIdx] = useState(1);

  interface imgsI {
    src: string;
  }

  const imgs: Array<imgsI> = [
    {
      src: "/imgs/main3.jpg",
    },
    {
      src: "/imgs/main.jpg",
    },
    {
      src: "/imgs/main2.jpg",
    },
  ];

  const nextOnclick = () => {
    // imgs.push(imgs[0]);
    // imgs.shift();
    // setNext(true);
    // setIdx(idx + 1);
    setMove(move + 1);
    if (move == 2) {
      setMove(0);
      //   setIdx(1);
    }
    // setTimeout(() => {
    //   // setNext(false);
    //   if (idx == imgs.length - 1) setMove(0);
    // }, 500);
    // console.log(imgs);
    // if (move == 3) {
    //   setTimeout(() => {
    //     setMove(1);
    //     setNext(false);
    //   }, 500);
    // }
  };

  const prevOnclick = () => {
    // imgs.unshift(imgs[imgs.length - 1]);
    // imgs.pop();
    // setPrev(true);
    // setIdx(idx - 1);
    setMove(move - 1);
    if (move == 0) {
      //   setIdx(2);

      setMove(2);
    }

    // setTimeout(() => {
    //   setPrev(false);
    //   setMove(move + 1);
    //   setIdx(idx - 1);
    // }, 500);
    // if (move == 1) {
    //   setTimeout(() => {
    //     setMove(move - 1);
    //     setMove(3);
    //   }, 500);
    // }
  };

  //   useEffect(() => {}, [next, prev]);

  return (
    <MainCarouselComponent
      nextOnclick={nextOnclick}
      prevOnclick={prevOnclick}
      next={next}
      prev={prev}
      move={move}
      imgs={imgs}
      idx={idx}
    ></MainCarouselComponent>
  );
};

export default MainCarouselContainer;
