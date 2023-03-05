import { useState } from "react";
import MainHeaderComponent from "./Component";

const MainHeaderContainer = () => {
  const [hdd, setHdd] = useState(false);
  const [menuIdx, setMenuIdx] = useState(0);

  interface ddTitleI {
    title: string;
    index: number;
  }

  const ddTitle: Array<ddTitleI> = [
    {
      title: "예매",
      index: 0,
    },
    {
      title: "영화",
      index: 1,
    },
    {
      title: "영화관",
      index: 2,
    },
    {
      title: "이벤트",
      index: 3,
    },
    {
      title: "스토어",
      index: 4,
    },
  ];

  const ddMenu: Array<Array<string>> = [
    ["예매하기", "상영시간표", "할인안내"],
    ["홈", "현재상영작", "상영예정작", "아르떼", "국립극장"],
    [
      "스페셜관",
      "서울",
      "경기/인천",
      "충청/대전",
      "전라/광주",
      "경북/대구",
      "경남/부산/울산",
      "강원",
      "제주",
    ],
    ["홈", "영화", "시사회/무대인사", "HOT", "제휴할인", "우리동네영화관"],
    ["베스트", "관람권", "스낵음료", "포토카드"],
  ];

  const dropdownOver = () => {
    setHdd(true);
  };
  const dropdownOut = () => {
    setHdd(false);
  };

  return (
    <MainHeaderComponent
      dropdownOver={dropdownOver}
      dropdownOut={dropdownOut}
      hdd={hdd}
      ddMenu={ddMenu}
      ddTitle={ddTitle}
      menuIdx={menuIdx}
      setMenuIdx={setMenuIdx}
    />
  );
};
export default MainHeaderContainer;
