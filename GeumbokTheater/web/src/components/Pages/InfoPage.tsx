import styled from "styled-components";

const InfoPage = () => {
  return (
    <InfoBox>
      <div className="titleInfo">상세정보</div>
      <div className="firstInfo">
        <div>
          <div>ID</div>
          <div>jung9649</div>
          <div>수정하기</div>
        </div>
        <div>
          <div>PW</div>
          <div>asdasdasd</div>
          <div>수정하기</div>
        </div>
        <div>
          <div>이름</div>
          <div>장정현</div>
          <div>수정하기</div>
        </div>
      </div>
      <div className="secondInfo">
        <div>
          <div>이메일</div>
          <div>ghkdwja9649@gmail.com</div>
          <div>수정하기</div>
        </div>
        <div>
          <div>핸드폰</div>
          <div>010-2052-9649</div>
          <div>수정하기</div>
        </div>
        <div>
          <div>주소</div>
          <div>위례동</div>
          <div>수정하기</div>
        </div>
      </div>
    </InfoBox>
  );
};

export default InfoPage;

const InfoBox = styled.div`
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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    & > div {
      width: 32%;
      padding: 5px;
      margin: 5px;
      & > div {
        padding: 5px 0;
        width: 60%;
        &:last-child {
          text-align: right;
          font-size: 0.7rem;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;
