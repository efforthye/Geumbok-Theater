import styled from "styled-components";
import img1 from "./poster.jpeg";

export default function Component() {
  return (
    <BoxOfBox>
      <BoxFrame>
        <Title>BOX OFFICE</Title>
      </BoxFrame>
      <TitleDetail>10개의 영화가 검색되었습니다.</TitleDetail>
      <div>
        <img src={img1}></img>
        <img src={img1}></img>
        <img src={img1}></img>
        <img src={img1}></img>
        <img src={img1}></img>
      </div>
      <div>
        <img src={img1}></img>
        <img src={img1}></img>
        <img src={img1}></img>
        <img src={img1}></img>
        <img src={img1}></img>
      </div>
    </BoxOfBox>
  );
}

const BoxOfBox = styled.div`
  width: 60%;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px auto;

  img {
    text-align: center;
    width: 18%;
    margin: 1%;
  }
`;

const BoxFrame = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const TitleDetail = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 0 0 10px 10px;
`;
