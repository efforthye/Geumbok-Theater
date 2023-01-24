import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const RegistComponent = () => {
  const [registInfo, setInfo] = useState({
    name: "",
    ID: "",
    Pw: "",
    PwInvaild: "",
    phone: "",
    email: "",
    address: "",
    zonecode: "",
    openPostcode: false,
  });
  const {
    name,
    ID,
    Pw,
    PwInvaild,
    phone,
    email,
    address,
    zonecode,
    openPostcode,
  } = registInfo;

  const handle = {
    clickButton: () => {
      setInfo({ ...registInfo, openPostcode: !openPostcode });
    },
    selectAddress: (_data) => {
      setInfo((state) => ({ ...state, address: _data.address }));
      setInfo((state) => ({ ...state, zonecode: _data.zonecode }));
      setInfo((state) => ({ ...state, openPostcode: false }));
    },
  };
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
                  />
                </div>
                <div>
                  <div>비밀번호</div>
                  <input
                    type={"password"}
                    placeholder={"PW"}
                    autoComplete={"off"}
                  />
                </div>
                <div>
                  <div>이름</div>
                  <input
                    type={"text"}
                    placeholder={"Name"}
                    autoComplete={"off"}
                  />
                </div>
                <div>
                  <div>비밀번호 확인</div>
                  <input
                    type={"password"}
                    placeholder={"PW Check"}
                    autoComplete={"off"}
                  />
                </div>
                <div>
                  <div>휴대전화 번호</div>
                  <input
                    type={"text"}
                    placeholder={"phoneNum"}
                    autoComplete={"off"}
                  />
                </div>
                <div>
                  <div>이메일</div>
                  <input
                    type={"email"}
                    placeholder={"email"}
                    autoComplete={"off"}
                  />
                </div>
              </div>
              <div>
                <div>
                  주소{" "}
                  <button
                    className="search-address"
                    onClick={handle.clickButton}
                  >
                    검색
                  </button>
                </div>
                {address && zonecode ? address + " , " + zonecode : ""}
              </div>
              <div className="btn-container">
                <button>단골 입장</button>
                <Link to={"/login"}>로그인화면으로</Link>
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
                onComplete={handle.selectAddress}
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
`;
