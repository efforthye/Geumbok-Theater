import { useState } from "react";
import styled from "styled-components";

const MoviePostComponent = () => {
  const [tempPost, setPost] = useState([
    {
      img: "https://img.megabox.co.kr/SharedImg/2022/12/19/cvEYBLNNpRc6eIcnueNBnJ3gH1ZY7Jd6_230.jpg",
      userId: "chaeng02",
      movieTitle: "아바타 물의길",
      review: "!!",
    },
    {
      img: "https://img.megabox.co.kr/SharedImg/2022/12/19/cvEYBLNNpRc6eIcnueNBnJ3gH1ZY7Jd6_230.jpg",
      userId: "sooseo",
      movieTitle: "아바타 물의길",
      review:
        "전편 3D 완성도가 이리 높았나? 실망. 아쿠아월드로 런닝타임 뻥티기",
    },
    {
      img: "https://img.megabox.co.kr/SharedImg/2022/12/16/t5miSclNal2TerxdLIEnbFNQl7icXOqE_230.jpg",
      userId: "kimchampan",
      movieTitle: "아바타 물의길",
      review: "존잼 2번봤다",
    },
    {
      img: "https://img.megabox.co.kr/SharedImg/2022/12/16/azNb3kC468akX6jtAusSFHnJTHaQgmdq_230.jpg",
      userId: "hdtkc",
      movieTitle: "아바타 물의길",
      review: "감동 감동 다음화 기대됩니다",
    },
  ]);
  return (
    <MoviePostBox>
      <div>
        <div className="titleBox">
          <div>무비포스트</div>
          <div>더보기</div>
        </div>
        <div className="postBox">
          {tempPost.map((item, index) => (
            <div key={`postInfoBox-${index}`}>
              <div key={`item-img-${index}`}>
                <img src={item.img} alt="" />
              </div>
              <div key={`item-userId-${index}`}>{item.userId}</div>
              <div key={`item-movieTitle-${index}`}>{item.movieTitle}</div>
              <div key={`item-review-${index}`}>{item.review}</div>
            </div>
          ))}
        </div>
      </div>
    </MoviePostBox>
  );
};
export default MoviePostComponent;

const MoviePostBox = styled.div`
  width: 100%;
  background-color: #444;
  & > div {
    width: 60%;
    margin: 0 auto;
    padding: 4% 0;
    font-size: 1.2rem;
    color: white;
    & > .titleBox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > .postBox {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 3% 0;
      & > div {
        width: 23%;
        text-align: center;
        background-color: rgba(255, 255, 255, 1);
        color: black;
        border-radius: 10px;
        & > div:first-child {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2),
        & > div:nth-child(3),
        & > div:last-child {
          padding: 15px;
          text-align: left;
        }
      }
      & > div:nth-child(2),
      & > div:nth-child(3) {
        margin: 0 20px;
      }
    }
  }
`;
