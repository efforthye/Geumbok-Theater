import styled from "styled-components";
import { Link } from "react-router-dom";

const LogInComponent = () => {
  return (
    <RegistBox>
      <div className="background">
        <div className="regist-box">
          <div className="regist-inner-item">
            <div>금복극장 입장하기</div>
            <input type={"text"} placeholder={"ID"} autoComplete={"off"} />
            <input type={"password"} placeholder={"PW"} autoComplete={"off"} />
            <button>입장!</button>
            <Link to={"/regist"}>단골되기</Link>
          </div>
          <div className="regist-inner-item">
            <img src="./imgs/2.png" alt="" />
          </div>
        </div>
      </div>
    </RegistBox>
  );
};
export default LogInComponent;

const RegistBox = styled.div`
  a {
    text-decoration: none;
  }
  & > .background {
    position: relative;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    & > .regist-box {
      position: absolute;
      top: 10%;
      left: 12%;
      width: 76%;
      height: 80%;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > .regist-inner-item {
        &:first-child {
          width: 45%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          & > div {
            font-size: 1rem;
            font-weight: 750;
          }
          & > input,
          & > button,
          & > a {
            width: 80%;
            margin: 10px auto;
          }
          & > input {
            border: none;
            border-bottom: 1px solid gray;
            padding: 10px;
          }
          & > button,
          & > a {
            border-radius: 20px;
            border: 1px solid gray;
            text-align: center;
            font-size: 0.7rem;
            background-color: #e1b643;
            color: #121111;
            cursor: pointer;
            padding: 10px 0;
            font-weight: 750;
            &:hover {
              background-color: #121111;
              color: #e1b643;
            }
          }
        }
        &:last-child {
          width: 49%;
          overflow: hidden;
          padding: 3%;
          & > img {
            width: 100%;
            max-height: 650px;
          }
        }
      }
    }
  }
`;
