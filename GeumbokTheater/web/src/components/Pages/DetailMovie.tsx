import styled from "styled-components";

import BackgroundContainer from "../DetailInfo/Background/Container";
import InfoContainer from "../DetailInfo/Info/Container";
import MovieInfoContainer from "../DetailInfo/MovieInfo/Container";
import StatisticsContainer from "../DetailInfo/Statistics/Container";

const DetailMovie = () => {
  return (
    <DetailBox>
      <BackgroundContainer />
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
    &> div {
      width : 60%;
      margin:0 auto;
      & > .infoBanner {
        display:flex;
        justify-content:space-around;
        align-items:center;
        font-size : 1.3rem;

      }
      & > .infoTitle{
        font-size: 1.5rem;
        padding : 15px 0 ;
      }
      & > .infoDetail, & > .hiddenDetail{
        width: 45%;

      }
      & > .hiddenDetail{
        padding : 20px 0;
      }
      & > .infoMore{
        width: 100%;
        margin : 0 auto;
        padding : 15px 0;
        text-align : center;
        border-bottom : 1px solid gray;
      }
      & > .movieInfoBox{
        width:100%;
        padding : 20px 0;
        & > div:nth-child(2){
          width : 100%;
          display:flex;
          justify-content:flex-start;
          align-items:center;
          & > div:nth-child(2), & > div:nth-child(3){
            padding : 0 15px;
          }
          & > div:nth-child(2){
            border-left: 1px solid lightgray;
            border-right: 1px solid lightgray;
          }
          & > div:nth-child(3){
            border-right: 1px solid lightgray;
          }
          & > div:first-child{
            padding : 0 15px 0 0 ;

          }
          & > div:last-child{
            padding : 0 0 0 15px ;

          }

        }
      }
      & > .statisticsBox{
        width: 100%;
        display:flex;
        justify-content:center;
        align-items : flex-start;
        padding : 15px 0;
        font-size : 1rem;
        & > div{
          width: 33%;
          text-align : center;
          & > div{
            padding : 5px 0;
          }
          & >  .movieGrade{
            background-color :#6543b1;
            width: fit-content;
            margin : 15px auto;
            padding : 35px;
            border-radius: 50%;
            color :white;
            font-size: 1.2rem;
          }
          & > .dataStat{
            font-size: 1.5rem;
            color: #6543b1;
          }
        }
      }
    }

   }
`;
