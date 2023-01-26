import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../boxOffice/img/poster.jpeg";
import banner1 from "./img/img_ba.jpeg";
import banner2 from "./img/img_dol.jpeg";
import banner3 from "./img/img_search.jpeg";
import banner4 from "./img/img_woo.jpeg";
// import { useNavigate } from "react-router-dom";

export default function Component() {
  // const navigate = useNavigate();
  // const goMovieInfo = () => {
  // navigate("./movieinfo");
  // };
  // img에 onClick={goMovieInfo}

  const settings = {
    infinite: true,
    speed: 5,
    slideToshow: 2,
    slideToScroll: 1,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true,
    arrows: false,
  };

  return (
    <>
      <BigCarouselBox>
        <div className="carousel">
          <Slider {...settings}>
            <img src={banner1} alt="" className="banner" />
            <img src={banner2} alt="" className="banner" />
            <img src={banner3} alt="" className="banner" />
            <img src={banner4} alt="" className="banner" />
          </Slider>
        </div>
      </BigCarouselBox>
      <BoxOfBox>
        <BoxFrame>
          <Title>BOX OFFICE</Title>
        </BoxFrame>
        <TitleDetail>10개의 영화가 검색되었습니다.</TitleDetail>
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
    </>
  );
}

const BoxOfBox = styled.div`
  width: 60%;
  color: white;
  background-color: #121111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;

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
    font-size: 1.8rem;
    font-weight: 100;
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

const BigCarouselBox = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #e8ecef; */
  cursor: pointer;
  /* & .banner {
    height: 120px;
  } */
`;

const BoxFrame = styled.div`
  background-color: tomato;
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
  padding: 0 0 20px 20px;
`;
