import styled from "styled-components";

const DetailMovie = () => {
  return (
    <DetailBox>
      <div>
        <div className="background"></div>
        <div className="backgroundInfo">
          <div>
            <div className="firstFlex">
              <div>#돌비시네마</div>
              <div>아바타:물의 길</div>
              <div>Avatar: The Way of Water</div>
              <div>
                <button>하트</button>
                <button>공유하기</button>
              </div>
            </div>
            <div className="secondFlex">
              <div>
                <div>실관람 평점</div>
                <div>숫자</div>
              </div>
              <div>
                <div>예매율</div>
                <div>1</div>
              </div>
              <div>
                <div>누적관객수</div>
                <div>10,171,550명</div>
              </div>
            </div>
          </div>
          <div>
            <div>사진</div>
            <div>예매, Dolby</div>
          </div>
        </div>
      </div>
      <div>아래 정보들</div>
    </DetailBox>
  );
};
export default DetailMovie;

const DetailBox = styled.div`
  width: 100%;

  & > div:first-child {
    width: 100%;
    height: 520px;
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
      top: 0;
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
`;
