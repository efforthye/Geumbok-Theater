import styled from "styled-components";
import reserve from "./reserve.png";
import sign from "./wht.png";

const UserNavComp = () => {
  return (
    <UserNavBox className="UserNavBox">
      <ul>
        <img src={sign} alt="" />
        <li>회원가입</li>
        <img src={reserve} alt="" />
        <li>바로 예매</li>
      </ul>
    </UserNavBox>
  );
};

export default UserNavComp;

const UserNavBox = styled.div`
  position: absolute;
  font-size: 12px;
  margin: auto;
  ul {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }
  ul > img:first-child {
    width: 13px;
  }
  ul > img:nth-child(3) {
    margin-left: 10px;
  }
  ul > li {
    display: flex;
    justify-content: center;
    margin: 0 10px;
    font-weight: 800;
    cursor: pointer;
  }
`;
