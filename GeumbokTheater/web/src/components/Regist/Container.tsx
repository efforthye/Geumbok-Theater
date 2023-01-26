import { useState } from "react";

import RegistComponent from "./Component";

import { IUserInfo } from "./Component";

const RegistContainer = () => {
  const [registInfo, setInfo] = useState<IUserInfo>({
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

  const handle = {
    clickButton: (): void => {
      setInfo((state: IUserInfo) => ({
        ...state,
        openPostcode: !state.openPostcode,
      }));
    },
    selectAddress: (_data: { address: string; zonecode: string }): void => {
      setInfo((state: IUserInfo) => ({
        ...state,
        address: _data.address,
        zonecode: _data.zonecode,
        openPostcode: false,
      }));
    },
  };

  const setIdHandler = (_value: string) => {
    setInfo((state: IUserInfo) => ({ ...state, ID: _value }));
  };
  const setPwHandler = (_value: string) => {
    setInfo((state: IUserInfo) => ({ ...state, Pw: _value }));
  };
  const setPwInvaildHandler = (_value: string) => {
    setInfo((state: IUserInfo) => ({ ...state, PwInvaild: _value }));
  };
  const setNameHandler = (_value: string) => {
    setInfo((state: IUserInfo) => ({ ...state, name: _value }));
  };
  const setPhoneHandler = (_value: string) => {
    setInfo((state: IUserInfo) => ({ ...state, phone: _value }));
  };
  const setEmailHandler = (_value: string) => {
    setInfo((state: IUserInfo) => ({ ...state, email: _value }));
  };
  return (
    <RegistComponent
      registInfo={registInfo}
      handle={handle}
      setIdHandler={setIdHandler}
      setPwHandler={setPwHandler}
      setPwInvaildHandler={setPwInvaildHandler}
      setNameHandler={setNameHandler}
      setPhoneHandler={setPhoneHandler}
      setEmailHandler={setEmailHandler}
    />
  );
};
export default RegistContainer;
