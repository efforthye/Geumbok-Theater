import styled from "styled-components";

import BackgroundContainer from "../DetailInfo/Background/Container";
import TotalInfoContainer from "../DetailInfo/TotalInfo/Container";
import ReviewContainer from "../DetailInfo/Review/Container";
import MoviePostContainer from "../DetailInfo/MoviePost/Container";

const DetailMovie = () => {
  return (
    <DetailBox>
      <BackgroundContainer />
      <TotalInfoContainer />
      <ReviewContainer />
      <MoviePostContainer />
    </DetailBox>
  );
};
export default DetailMovie;

const DetailBox = styled.div`
  width: 100%;
`;
