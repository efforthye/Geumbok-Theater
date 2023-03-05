import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LogInComponent = ({
  logID,
  setLogID,
  logPw,
  setLogPw,
  onLogIn,
}: {
  logID: string;
  logPw: string;
  setLogID: React.Dispatch<React.SetStateAction<string>>;
  setLogPw: React.Dispatch<React.SetStateAction<string>>;
  onLogIn: (logID: string, logPw: string) => void;
}) => {
  const [checkLogID, setCheckID] = useState(false);
  const [checkLogPw, setCheckPw] = useState(false);

  useEffect(() => {
    const regex = /^(?=.*[0-9]+)[a-zA-Z][a-zA-Z0-9]{5,10}$/g;
    if (regex.test(logID)) setCheckID(true);
    else setCheckID(false);
  }, [logID]);

  useEffect(() => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (regex.test(logPw)) setCheckPw(true);
    else setCheckPw(false);
  }, [logPw]);
  return (
    <RegistBox>
      <div className="background">
        <div className="regist-box">
          <div className="regist-inner-item">
            <div>금복극장 입장하기</div>
            <input
              type={"text"}
              placeholder={"ID"}
              autoComplete={"off"}
              value={logID || ""}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                setLogID(e.currentTarget.value);
              }}
            />
            {!checkLogID || logID === "" ? (
              <div className="exception">
                5자 이상 10자 이하의 영문자와 숫자로만 입력해주세요
              </div>
            ) : (
              <></>
            )}
            <input
              type={"password"}
              placeholder={"PW"}
              autoComplete={"off"}
              value={logPw || ""}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                setLogPw(e.currentTarget.value);
              }}
            />
            {!checkLogPw || logPw === "" ? (
              <div className="exception">
                최소 8자 이상이면서 숫자와 특수문자가 있어야합니다
              </div>
            ) : (
              <></>
            )}
            <button
              onClick={() => {
                onLogIn(logID, logPw);
              }}
            >
              입장!
            </button>
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
  .exception {
    font-size: 0.7rem !important;
    color: red;
  }
`;
