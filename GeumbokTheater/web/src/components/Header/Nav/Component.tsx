import Client from "../Client/Container";
import styled from "styled-components";
import UserNavContainer from "../UserNav/Container";
import { useState } from "react";
import List from "./LiComp";

const HeaderComp = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <HeaderBox className="HeaderBox">
      <div className="header">
        <div className="title">
          금복극장
          <br />
        </div>
        <Client />
        <div className="nav">
          <UserNavContainer />
          <ul>
            <List name={"예매"} ticketList={["예매하기", "상영시간표"]} />
            |
            <List
              name={"영화"}
              ticketList={["홈", "현재상영작", "상영예정작"]}
            />
            |<li>영화관</li>
          </ul>
        </div>
      </div>
    </HeaderBox>
  );
};

export default HeaderComp;

const HeaderBox = styled.div`
  margin: 0;
  color: white;
  content: "";
  width: 100%;
  background: linear-gradient(rgb(26, 26, 26), transparent);
  .header {
    width: 100%;
    display: inline-block;
  }
  .title {
    width: 60%;
    display: flex;
    justify-content: center;
    font-family: "궁서체";
    font-weight: bold;
    font-size: 42px;
    border-bottom: 1px solid white;
    margin: 20px auto 0;
    padding: 0 0 20px 0;
  }
  .nav {
    width: 60%;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .nav > ul {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 0;
  }

  .nav > ul li {
    width: 10%;
    list-style-type: none;
    text-align: center;
    font-weight: 800;
    cursor: pointer;
    padding: 0 0 8px 0;
  }
  .nav > ul li:hover {
    border-bottom: 3px solid red;
  }
  .user-nav {
    position: absolute;
    font-size: 12px;
    margin: auto;
  }
  .user-nav > ul {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
  .user-nav ul > img:first-child {
    width: 13px;
  }
  .user-nav ul > img:nth-child(3) {
    margin-left: 10px;
  }
  .user-nav ul > li {
    display: flex;
    justify-content: center;
    margin: 0 10px;
    font-weight: 800;
    cursor: pointer;
  }

  .dropdown1 {
    width: 100%;
    background-color: black;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    top: 20px;
  }
  .dropdown1 > ul li {
    width: auto;
    list-style-type: none;
  }
`;
