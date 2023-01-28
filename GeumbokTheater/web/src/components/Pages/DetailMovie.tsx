import styled from "styled-components";

import BackgroundContainer from "../DetailInfo/Background/Container";

const DetailMovie = () => {
  return (
    <DetailBox>
      <BackgroundContainer />
      <div>
        <div>
          <div>
            <div>주요정보</div>
            <div>실관람평</div>
            <div>무비포스트</div>
            <div>예고편/스틸컷</div>
          </div>
          <div>아바타: 물의 길은 판도라 행성에서</div>
          <div>
            '제이크 설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한 위협과
            살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에
            대한 이야기를 그렸다.
          </div>
          <div>더보기</div>
        </div>
      </div>
    </DetailBox>
  );
};
export default DetailMovie;

const DetailBox = styled.div`
  width: 100%;

  & > div:first-child {
    width: 100%;
    height: 520px;l
    margin: 0 auto;
    border: 2px solid black;
    background-color: #151515;
    & > .background {
      width: 100%;
      height: 100%;
      background-image: url("./imgs/tempAvatar.jpg");
      background-repeat: no-repeat;
      background-position: center 0;
      position: relative;
      top: 0;
      left: 0;
      opacity: 0.8;
    }
    & > .backgroundInfo {
      color: white;
      position: absolute;
      top: 113px;
      left: 20%;
      width: 60%;
      height: inherit;
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
        &:first-child {
          flex: 4;
        }
        &:last-child {
          flex: 1;
        }
        .firstFlex {
          padding: 3% 0 10% 0;
          & > div {
            padding: 10px 0;
            &:first-child {
              font-size: 0.75rem;
            }
            &:nth-child(2) {
              font-size: 2.5rem;
            }
            &:last-child > button {
              padding: 5px 25px;
              color: white;
              background-color: rgba(0, 0, 0, 0);
              border: 1px solid white;
              border-radius: 5px;
              margin: 0 5px;
            }
          }
        }
        .secondFlex {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 5% 0;
          & > div {
            padding: 0 20px;
            & > div:first-child {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
   & > div:last-child{
    width: 100%;
    padding : 3% 0 0 0 ;
    &> div{
      width : 60%;
      margin:0 auto;
    }

   }
`;
