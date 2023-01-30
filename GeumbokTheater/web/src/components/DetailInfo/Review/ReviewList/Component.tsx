import { useState } from "react";
import styled from "styled-components";

const ReviewListComponent = () => {
  const [tempList, setList] = useState([
    {
      userId: "jung9649",
      reviewTitle: "관람평",
      reviewGrader: 10,
      reviewProduct: "연출",
      review: "너무 잼있어용.",
      recommend: "좋아요",
    },
    {
      userId: "jung2052",
      reviewTitle: "관람평",
      reviewGrader: 10,
      reviewProduct: "연출",
      review: "우아아아아아.",
      recommend: "좋아요",
    },
    {
      userId: "jung",
      reviewTitle: "관람평",
      reviewGrader: 10,
      reviewProduct: "연출",
      review: "너무 길어요.",
      recommend: "좋아요",
    },
  ]);
  return (
    <ReviewListBox>
      {tempList.map((item, index) => (
        <div key={`reviewBox-${index}`}>
          <div key={`userId-${index}`}>{item.userId}</div>
          <div key={`reviewTitle-${index}`}>{item.reviewTitle}</div>
          <div key={`reviewGrader-${index}`}>{item.reviewGrader}</div>
          <div key={`reviewProduct-${index}`}>{item.reviewProduct}</div>
          <div key={`review-${index}`}>{item.review}</div>
          <div key={`recommend-${index}`}>{item.recommend}</div>
        </div>
      ))}
    </ReviewListBox>
  );
};
export default ReviewListComponent;

const ReviewListBox = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    & > div {
      text-align: center;
      font-size: 1rem;
      padding: 20px 0;
    }
    & > div:first-child,
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4) {
      flex: 1;
    }
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:last-child {
      color: #6543b1;
    }
    & > div:nth-child(5) {
      flex: 5;
      text-align: left;
    }
  }
`;
