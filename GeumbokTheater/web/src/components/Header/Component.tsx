import styled from "styled-components";

type Props = {
  dropdown: () => void;
  hdd: boolean;
  ddMenu: Array<Array<string>>;
  ddTitle: Array<object>;
};

const MainHeaderComponent: React.FC<Props> = ({
  dropdown,
  hdd,
  ddMenu,
  ddTitle,
}) => {
  return (
    <FixedBox>
      <HeaderBox>
        <SNSBox>
          <div>
            <img src="/imgs/facebook.svg"></img>
            <div>페이스북</div>
          </div>
          <div>
            <img src="/imgs/youtube.svg"></img>
            <div>유튜브</div>
          </div>
          <div>
            <img src="/imgs/instagram.svg"></img>
            <div>인스타그램</div>
          </div>
        </SNSBox>

        <TitleBox>
          <div>금복</div>

          <img src="/imgs/2.png"></img>
          <div>극장</div>
        </TitleBox>

        <UserBox>
          <div>멤버십</div>
          <div>고객센터</div>
          <div>단체관람/대관문의</div>
          <div>로그인</div>
        </UserBox>
      </HeaderBox>
      <DDBox>
        <DropBox>
          {/* gdgdgdgdgd */}
          {ddTitle.map((item: object | string, index: number): any => {
            // console.log(item.title);
            <div
              key={`ddtitle-${index}`}
              onMouseOver={dropdown}
              onMouseOut={dropdown}
            >
              ㅋㅋ
            </div>;
          })}
          {/* <div onMouseOver={dropdown} onMouseOut={dropdown}>
            예매
          </div>
          <div>영화</div>
          <div>영화관</div>
          <div>이벤트</div>
          <div>스토어</div> */}
        </DropBox>
        <AnotherBox>
          <img src="imgs/user.svg"></img>
          <div>회원가입</div>
          <img src="imgs/ticket.svg"></img>
          <div>바로 예매</div>
          <img src="imgs/3bars.svg" className="bars"></img>
        </AnotherBox>
      </DDBox>
      {hdd ? (
        <MenuBox>
          {ddMenu.map((item: any, index: number): any => {
            console.log(item);
            <div key={`dd-${index}`}>{item}</div>;
          })}
        </MenuBox>
      ) : (
        <></>
      )}
    </FixedBox>
  );
};
export default MainHeaderComponent;

const HeaderBox = styled.div`
  position: fixed;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9d918b;
`;

const SNSBox = styled.div`
  display: flex;
  color: #9d918b;
  align-items: center;

  img {
    width: 12px;
    padding-top: 10px;
    margin-right: 5px;
    filter: invert(57%) sepia(1%) saturate(3229%) hue-rotate(340deg)
      brightness(102%) contrast(92%);
  }

  div {
    display: flex;
    margin-right: 5px;
    padding-top: 10px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  color: gold;
  div {
    padding-top: 20px;
    font-size: 30px;
  }
  img {
    width: 80px;
    margin: 5px 10px;
  }
`;

const UserBox = styled.div`
  display: flex;
  color: #9d918b;
  div {
    margin-left: 10px;
    padding-top: 45px;
  }
`;

const DDBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: white;
`;

const DropBox = styled.div`
  display: flex;
  height: 20px;
  justify-content: center;
  width: 80%;
  div {
    padding: 0 30px;
    border-right: 1px solid #9d918b;
  }

  div:first-child {
    margin-left: 200px;
  }
`;

const AnotherBox = styled.div`
  display: flex;
  justify-content: end;
  height: 20px;

  width: 20%;

  div {
    margin: 0 10px 0 0;
  }

  img {
    width: 10px;
    margin-right: 5px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(163deg)
      brightness(102%) contrast(103%);
  }

  .bars {
    width: 15px;
  }
`;

const FixedBox = styled.div`
  position: fixed;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 1920px;
  background: linear-gradient(
    to bottom,
    rgba(33, 29, 31, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const MenuBox = styled.div`
  position: fixed;
  display: flex;
  color: white;
  justify-content: center;
  margin-top: 125px;
  width: 1920px;
  background-color: rgba(0, 0, 0, 0.7);

  div {
    margin: 5px 10px;
  }
`;
