import styled from "styled-components";
import posterImg from "./poster2.jpg";

export default function Component() {
  return (
    <BgImgBox>
      <BgImgFrame>
        <div>ㅎㅇㅎㅇ</div>
      </BgImgFrame>
    </BgImgBox>
  );
}

const BgImgBox = styled.div`
  width: 100vw;
  background-color: black;
  position: relative;
  height: 520px;
  margin: 0 0 40px 0;
`;

const BgImgFrame = styled.div`
  width: 60%;
  position: absolute;
  left: 50%;
  top: 0;
  background-image: url(${posterImg});
  background-repeat: no-repeat;
  background-size: 100% auto;
  z-index: 1;
  opacity: 0.8;

  div {
    color: white;
  }
`;
