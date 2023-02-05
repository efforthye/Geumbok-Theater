import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  dropdownOver: () => void;
  dropdownOut: () => void;
  hdd: boolean;
  ddMenu: Array<Array<string>>;
  ddTitle: Array<object>;
  menuIdx: number;
  setMenuIdx: Dispatch<SetStateAction<number>>;
};

const MainHeaderComponent: React.FC<Props> = ({
  dropdownOver,
  dropdownOut,
  hdd,
  ddMenu,
  ddTitle,
  menuIdx,
  setMenuIdx,
}) => {
  return (
    <FixedBox>
      <HeaderBox>
        <SNSBox>
          <div>
            <img src="/imgs/facebook.svg" alt=""></img>
            <div>페이스북</div>
          </div>
          <div>
            <img src="/imgs/youtube.svg" alt=""></img>
            <div>유튜브</div>
          </div>
          <div>
            <img src="/imgs/instagram.svg" alt=""></img>
            <div>인스타그램</div>
          </div>
        </SNSBox>

        <TitleBox>
          <Link to={"/"}>
            <div>금복</div>
            <img src="/imgs/2-r.png" alt=""></img>
            <div>극장</div>
          </Link>
        </TitleBox>

        <UserBox>
          <div>멤버십</div>
          <div>고객센터</div>
          <div>단체관람/대관문의</div>

          <div>
            <Link to={"/login"}>로그인</Link>
          </div>
        </UserBox>
      </HeaderBox>
      <DDBox>
        <DropBox
          onMouseOver={dropdownOver}
          onMouseOut={dropdownOut}
          menuIdx={menuIdx}
          hdd={hdd}
        >
          {ddTitle.map((item: object, index: number): any => (
            <HmenuBox
              key={`ddtitle-${index}`}
              className={menuIdx == index ? "on" : ""}
              onMouseOver={() => {
                setMenuIdx(Object(item).index);
                console.log(menuIdx);
                console.log(ddMenu[menuIdx]);
              }}
            >
              {Object(item).title}
            </HmenuBox>
          ))}

          <MenuBox hdd={hdd} className={hdd ? "on" : ""}>
            {ddMenu[menuIdx].map((item: any, index: number): any => (
              <div key={`dd-${index}`}>
                <div className={hdd ? "on" : ""}>{item}</div>
              </div>
            ))}
          </MenuBox>
        </DropBox>
        <AnotherBox>
          <img src="imgs/user.svg" alt=""></img>
          <div>
            <Link to={"/regist"}>회원가입</Link>
          </div>
          <img src="imgs/ticket.svg" alt=""></img>
          <div>바로 예매</div>
          <img src="imgs/3bars.svg" alt="" className="bars"></img>
        </AnotherBox>
      </DDBox>
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
  position: absolute;
  top: 25px;
  height: 100%;
  display: flex;
  color: #9d918b;
  align-items: center;

  img {
    width: 12px;
    margin-right: 5px;
    filter: invert(57%) sepia(1%) saturate(3229%) hue-rotate(340deg)
      brightness(102%) contrast(92%);
  }

  div {
    display: flex;
    margin-right: 5px;
  }
`;

const TitleBox = styled.div`
  margin: auto;
  a {
    display: flex;
    text-decoration: none;
    color: gold;
    align-items: center;
  }
  div {
    font-size: 30px;
  }
  img {
    width: 80px;
    margin: 5px 10px;
  }
`;

const UserBox = styled.div`
  position: absolute;
  top: 25px;
  height: 100%;
  right: 0;
  display: flex;
  align-items: center;
  color: #9d918b;
  a {
    text-decoration: none;
    color: #9d918b;
  }
  div {
    margin-left: 10px;
  }
`;

const DDBox = styled.div`
  position: relative;
  width: 1200px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: white;
`;

const DropBox = styled.div<{ menuIdx: number; hdd: boolean }>`
  display: flex;
  height: 25px;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  position: relative;
  text-align: center;

  div:nth-child(5) {
    border-right: none;
  }

  &::after {
    content: "";
    width: 80px;
    height: 3px;
    position: absolute;
    background-color: #ff0000b9;
    left: ${({ menuIdx }) => {
      return menuIdx * 100 + 60 + "px";
    }};
    top: 25px;
    transition: left 0.5s ease-out;

    animation: ${({ hdd }) => {
      return hdd ? "mouseenter .5s ease-out" : "mouseleave .8s ease-out";
    }};
    animation-fill-mode: forwards;
  }

  @keyframes mouseleave {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      left: -100px;
      display: none;
    }
  }
  @keyframes mouseenter {
    from {
      opacity: 0;
      display: block;
    }
    to {
      opacity: 1;
    }
  }
`;

const HmenuBox = styled.div`
  border-right: 1px solid #9d918b;
  width: 100px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnotherBox = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: end;
  height: 20px;
  width: 20%;
  a {
    text-decoration: none;
    color: white;
  }
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
  z-index: 2000;
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

const MenuBox = styled.div<{ hdd: boolean }>`
  position: fixed;
  width: 1920px;
  color: white;
  justify-content: center;
  margin-top: 25px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  display: none;
  div {
    padding: 5px 10px;
  }

  &.on {
    display: flex;
  }
`;
