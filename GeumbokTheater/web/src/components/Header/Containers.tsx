import { useState } from "react";
import MainHeaderComponent from "./Component";

const MainHeaderContainer = () => {
  const [hdd, setHdd] = useState(false);

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
    ["홈", "현재상영작", "상영예정작"],
  ];

  const dropdown = () => {
    setHdd(!hdd);
  };

  return (
    <MainHeaderComponent
      dropdown={dropdown}
      hdd={hdd}
      ddMenu={ddMenu}
      ddTitle={ddTitle}
    />
  );
};
export default MainHeaderContainer;
