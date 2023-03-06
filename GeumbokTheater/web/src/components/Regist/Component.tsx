import { Link } from "react-router-dom";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { useEffect, useState } from "react";

import { IUserInfo } from "./Container";

const RegistComponent = ({
  registInfo,
  setHandler,
  onRegist,
}: {
  registInfo: IUserInfo;
  setHandler: {
    clickButton: () => void;
    selectAddress: (_data: { address: string; zonecode: string }) => void;
    setIdHandler: (_value: string) => void;
    setPwHandler: (_value: string) => void;
    setPwInvaildHandler: (_value: string) => void;
    setNameHandler: (_value: string) => void;
    setPhoneHandler: (_value: string) => void;
    setEmailHandler: (_value: string) => void;
  };
  onRegist: (
    name: string,
    ID: string,
    Pw: string,
    phone: string,
    email: string,
    address: string,
    zonecode: string
  ) => void;
}) => {
  const {
    name,
    ID,
    Pw,
    PwInvaild,
    phone,
    email,
    address,
    zonecode,
  }: IUserInfo = registInfo;
  const [checkId, setId] = useState(false);
  const [checkPw, setPw] = useState(false);
  const [checkPhone, setPhone] = useState(false);
  const [checkEmail, setemail] = useState(false);
  const [checkName, setName] = useState(false);

  useEffect(() => {
    const regex = /^(?=.*[0-9]+)[a-zA-Z][a-zA-Z0-9]{5,10}$/g;
    if (regex.test(ID)) setId(true);
    else setId(false);
  }, [ID]);

  useEffect(() => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (regex.test(Pw)) setPw(true);
    else setPw(false);
  }, [Pw]);

  useEffect(() => {
    const regex = /^\d{3}-\d{3,4}-\d{4}$/;
    if (regex.test(phone)) setPhone(true);
    else setPhone(false);
  }, [phone]);

  useEffect(() => {
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regex.test(email)) setemail(true);
    else setemail(false);
  }, [email]);

  useEffect(() => {
    const regex = /^[가-힣]{2,5}$/;
    if (regex.test(name)) setName(true);
    else setName(false);
  }, [name]);

  return (
    <RegistBox>
      <div className="background">
        <div className="regist-box">
          <div className="regist-outer-item">
            <div className="regist-inner-item">
              <div>금복극장 단골 되기</div>
              <div className="input-container">
                <div>
                  <div>ID</div>
                  <input
                    type={"text"}
                    placeholder={"ID"}
                    autoComplete={"off"}
                    value={ID || ""}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      setHandler.setIdHandler(e.currentTarget.value);
                    }}
                  />
                  {!checkId || ID === "" ? (
                    <div className="exception">
                      5자 이상 10자 이하의 영문자와 숫자로만 입력해주세요
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <div>비밀번호</div>
                  <input
                    type={"password"}
                    placeholder={"PW"}
                    autoComplete={"off"}
                    value={Pw || ""}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      setHandler.setPwHandler(e.currentTarget.value);
                    }}
                  />
                  {!checkPw || Pw === "" ? (
                    <div className="exception">
                      최소 8자 이상이면서 숫자와 특수문자가 있어야합니다
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <div>이름</div>
                  <input
                    type={"text"}
                    placeholder={"Name"}
                    autoComplete={"off"}
                    value={name || ""}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      setHandler.setNameHandler(e.currentTarget.value);
                    }}
                  />
                  {!checkName || name === "" ? (
                    <div className="exception">
                      2-5자 한글 이름만 입력하세요
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <div>비밀번호 확인</div>
                  <input
                    type={"password"}
                    placeholder={"PW Check"}
                    autoComplete={"off"}
                    value={PwInvaild || ""}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      setHandler.setPwInvaildHandler(e.currentTarget.value);
                    }}
                  />
                  {checkPw && Pw === PwInvaild ? (
                    <></>
                  ) : (
                    <div className="exception">
                      비밀번호가 일치하지 않습니다
                    </div>
                  )}
                </div>
                <div>
                  <div>휴대전화 번호</div>
                  <input
                    type={"text"}
                    placeholder={"phoneNum"}
                    autoComplete={"off"}
                    value={phone || ""}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      setHandler.setPhoneHandler(e.currentTarget.value);
                    }}
                  />
                  {!checkPhone ? (
                    <div className="exception">
                      핸드폰번호 형식이 올바르지 않습니다
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <div>이메일</div>
                  <input
                    type={"email"}
                    placeholder={"email"}
                    autoComplete={"off"}
                    value={email || ""}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      setHandler.setEmailHandler(e.currentTarget.value);
                    }}
                  />
                  {!checkEmail || email === "" ? (
                    <div className="exception">
                      이메일 형식에 올바르지 않습니다
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div>
                <div>
                  주소{" "}
                  <button
                    className="search-address"
                    onClick={setHandler.clickButton}
                  >
                    검색
                  </button>
                </div>
                {address && zonecode ? address + " , " + zonecode : ""}
              </div>
              <div className="btn-container">
                {checkId &&
                checkPw &&
                checkPhone &&
                checkEmail &&
                checkName &&
                Pw === PwInvaild &&
                address !== "" &&
                zonecode !== "" ? (
                  <button
                    onClick={() => {
                      onRegist(name, ID, Pw, phone, email, address, zonecode);
                      setHandler.setIdHandler("");
                      setHandler.setPwHandler("");
                      setHandler.setPwInvaildHandler("");
                      setHandler.setNameHandler("");
                      setHandler.setPhoneHandler("");
                      setHandler.setEmailHandler("");
                    }}
                  >
                    단골 입장
                  </button>
                ) : (
                  <button>단골 입장</button>
                )}
                <Link to={"/"}>메인화면으로</Link>
              </div>
            </div>
          </div>
          <div className="regist-outer-item">
            <div>
              <img src="./imgs/2.png" alt="" />
            </div>
          </div>
        </div>
        {registInfo.openPostcode ? (
          <div className="modal-background">
            <div className="address-modal">
              <DaumPostcode
                onComplete={setHandler.selectAddress}
                autoClose={false}
                defaultQuery="위례순환로 477"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </RegistBox>
  );
};
export default RegistComponent;

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
      justify-content: space-between;
      align-items: center;
      z-index: 2001;
      & > .regist-outer-item {
        &:first-child {
          width: 49%;
          & > .regist-inner-item {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            font-size: 1rem;
            font-weight: 750;
          }
          & > div > div:nth-child(3) {
            width: 90%;
            & > input {
              width: 100%;
              border: none;
              border-bottom: 1px solid gray;
              padding: 10px;
            }
          }

          & .input-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;
            padding: 5% 0;
            & > div {
              width: 45%;
              padding: 10px;
              margin: 10px;
              & > div {
                font-size: 0.7rem;
                margin: 10px 0;
              }
              & > input {
                width: 100%;
                border: none;
                border-bottom: 1px solid gray;
                padding: 10px 0;
              }
            }
          }

          & > div > .btn-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1%;
            margin: 15px 0;
            & > button,
            & > a {
              width: 49%;
              border-radius: 20px;
              border: 1px solid gray;
              background-color: #e1b643;
              color: #121111;
              cursor: pointer;
              padding: 10px 0;
              margin: 0 10px;
              font-size: 0.7rem;
              text-align: center;
              font-weight: 750;
              &:hover {
                background-color: #121111;
                color: #e1b643;
              }
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
    & > .modal-background {
      position: relative;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 3;
      background-color: rgba(0, 0, 0, 0.25);
      & > .address-modal {
        position: absolute;
        top: 22%;
        right: 17%;
        width: 32%;
      }
    }
  }
  .search-address {
    padding: 5px 10px;
    background-color: #e1b643;
    color: #121111;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    &:hover {
      color: #e1b643;
      // #121111 (검정)
      // #E1B643 (황금)
      background-color: #121111;
    }
  }
  .exception {
    color: red;
  }
`;
