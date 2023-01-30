import styled from "styled-components";
import InfoContainer from "../TotalInfo/Info/Container";
import MovieInfoContainer from "../TotalInfo/MovieInfo/Container";
import StatisticsContainer from "../TotalInfo/Statistics/Container";

const TotalInfoComponent = () => {
  return (
    <TotalBox>
      <div>
        <div>
          <div className="infoBanner">
            <div>주요정보</div>
            <div>실관람평</div>
            <div>무비포스트</div>
            <div>예고편/스틸컷</div>
          </div>
          <InfoContainer />
          <MovieInfoContainer />
          <StatisticsContainer />
        </div>
      </div>
    </TotalBox>
  );
};
export default TotalInfoComponent;

const TotalBox = styled.div`
  & > div {
    width: 100%;
    padding: 3% 0 0 0;
    & > div {
      width: 60%;
      margin: 0 auto;
      & > .infoBanner {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1.3rem;
      }
      & > .infoTitle {
        font-size: 1.5rem;
        padding: 15px 0;
      }
      & > .infoDetail,
      & > .hiddenDetail {
        width: 45%;
      }
      & > .hiddenDetail {
        padding: 20px 0;
      }
      & > .infoMore {
        width: 100%;
        margin: 0 auto;
        padding: 15px 0;
        text-align: center;
        border-bottom: 1px solid gray;
      }
      & > .movieInfoBox {
        width: 100%;
        padding: 20px 0;
        & > div:nth-child(2) {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          & > div:nth-child(2),
          & > div:nth-child(3) {
            padding: 0 15px;
          }
          & > div:nth-child(2) {
            border-left: 1px solid lightgray;
            border-right: 1px solid lightgray;
          }
          & > div:nth-child(3) {
            border-right: 1px solid lightgray;
          }
          & > div:first-child {
            padding: 0 15px 0 0;
          }
          & > div:last-child {
            padding: 0 0 0 15px;
          }
        }
      }
      & > .statisticsBox {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 15px 0;
        font-size: 1rem;
        & > div {
          width: 33%;
          text-align: center;
          & > div {
            padding: 5px 0;
          }
          & > .movieGrade {
            background-color: #6543b1;
            width: fit-content;
            margin: 15px auto;
            padding: 35px;
            border-radius: 50%;
            color: white;
            font-size: 1.2rem;
          }
          & > .dataStat {
            font-size: 1.5rem;
            color: #6543b1;
          }
        }
      }
    }
  }
`;
