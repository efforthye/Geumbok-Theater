import styled from "styled-components";

export default function TicketingComp() {
    return (
        <Background>
            <MordalBtn>
                <div>
                    <button>up</button>
                </div>
            </MordalBtn>
            <TicketingBox>예매하기</TicketingBox>
            <InfoWrap>
                <MovieTitleBox>
                    <div>영화</div>
                </MovieTitleBox>
                <MovieTimeBox>
                    <div>날짜</div>
                </MovieTimeBox>
                <MovieInfoBox>
                    <div>정보</div>
                </MovieInfoBox>
            </InfoWrap>
        </Background>
    );
}

const MordalBtn = styled.div`
  /* width: 100%; */
  div {
    width: 50px;
    margin: auto;
  }
  button {
    width: 100%;
  }
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 1000px;
  width: 90%;
  float: right;
  padding: 40px;
`;

const TicketingBox = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 900;
  width: 95%;
  margin: 20px auto;
`;

const InfoWrap = styled.div`
  border: 1px solid white;
  width: 95%;
  margin: auto;
  display: flex;
  color: white;
`;

const MovieTitleBox = styled.div`
  border: 1px solid white;
  width: 25%;
`;
const MovieTimeBox = styled.div`
  border: 1px solid white;
  width: 45%;
`;
const MovieInfoBox = styled.div`
  border: 1px solid white;
  width: 30%;
`;