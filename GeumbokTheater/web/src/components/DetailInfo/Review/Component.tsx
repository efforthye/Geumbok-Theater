import styled from "styled-components";

import ReviewListContainer from "./ReviewList/Container";

const ReviewComponent = () => {
  return (
    <ReviweBox>
      <div>
        <div>아바타: 물의 길에 대한 23,931개의 이야기가 있어요!</div>
        <div>
          <div>
            <div className="circleMark">M</div>
            <div>MEGABOX</div>
          </div>
          <div>
            <input
              type={"text"}
              placeholder={
                "아바타: 물의 길 재미있게 보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요."
              }
            />
            <button>관람평 쓰기</button>
          </div>
        </div>
        <ReviewListContainer />
      </div>
    </ReviweBox>
  );
};

export default ReviewComponent;

const ReviweBox = styled.div`
  & > div {
    width: 100%;
    padding: 3% 0 0 0;
    & > div {
      width: 60%;
      margin: 0 auto;
    }
    & > div:first-child {
      font-size: 1.3rem;
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;

      & > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        flex-direction: column;
        padding: 15px 0;
        & > .circleMark {
          background-color: #6543b1;
          width: fit-content;
          margin: 10px auto;
          padding: 10px 15px;
          border-radius: 50%;
          color: white;
          font-size: 1rem;
        }
      }
      & > div:nth-child(2) {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;

        & > input {
          width: 90%;
          line-height: 48.5px;
        }
        & > input::placeholder {
          text-indent: 25px;
        }
        & > button {
          padding: 15px 0;
          cursor: pointer;
        }
      }
    }
  }
`;
