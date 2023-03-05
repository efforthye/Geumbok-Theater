import styled from "styled-components";

const TicketPage = () => {
  return (
    <TicketBox>
      <div className="titleInfo">예매내역</div>
      <div className="firstInfo">
        <div>
          <div>예매시간</div>
          <div>15:39</div>
          <div>예매취소?</div>
        </div>
        <div>
          <div>영화제목</div>
          <div>여기사람엄청많네</div>
        </div>
        <div>
          <div>상영시간</div>
          <div>123분</div>
        </div>
      </div>
      <div className="secondInfo">
        <div>
          <div>좌석</div>
          <div>H 13, H 14</div>
          <div>변경하기</div>
        </div>
        <div>
          <div>영화시작시간</div>
          <div>16:00</div>
        </div>
      </div>
    </TicketBox>
  );
};

export default TicketPage;

const TicketBox = styled.div`
  flex: 4;
  padding: 0 20px;

  .edit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 15px;
  }
  .delete {
    color: red;
    cursor: pointer;
  }
  .titleInfo {
    font-size: 2rem;
    padding: 2% 0;
  }
  .firstInfo,
  .secondInfo {
    width: 100%;
    padding: 1% 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    & > div {
      width: 32%;
      padding: 5px;
      margin: 5px;
      & > div {
        padding: 5px 0;
        width: 60%;
        &:nth-child(3) {
          text-align: right;
          font-size: 0.7rem;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;
