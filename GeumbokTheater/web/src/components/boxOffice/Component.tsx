import styled from "styled-components";
import img1 from "./poster.jpeg";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigate = useNavigate();
  const goMovieInfo = () => {
    navigate("/movieinfo");
  };

  return (
    <BoxOfBox>
      <BoxFrame>
        <Title>BOX OFFICE</Title>
      </BoxFrame>
      <TitleDetail>10개의 영화가 검색되었습니다.</TitleDetail>
      <div className="bigOne">
        <div className="one">
          <img src={img1} onClick={goMovieInfo}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
      </div>
      <div className="bigOne">
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
        <div className="one">
          <img src={img1}></img>
          <div className="movie_title">미니언즈</div>
          <div className="movie_detail">
            <div>누적관람수 303,030명</div>
            <div>개봉일 2022.07.30.</div>
          </div>
        </div>
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
    width: 100%;
    text-align: center;
    margin: 1%;
    padding-top: 5%;
  }

  .bigOne {
    display: flex;
    justify-content: center;
    align-items: center;
    & .one {
      display: flex;
      width: calc(100% / 5);
      padding: 0 1%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .movie_title {
    font-size: 2rem;
    text-align: center;
  }

  .movie_detail {
    display: flex;
    flex-direction: column;
    text-align: center;
    & :first-child {
      padding-right: 5px;
    }
    & :nth-child(2) {
      padding-bottom: 40px;
    }
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
  font-size: 1.2rem;
  padding: 0 0 10px 10px;
`;
