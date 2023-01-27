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

  const setHandler = {
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
    setIdHandler: (_value: string) => {
      setInfo((state: IUserInfo) => ({ ...state, ID: _value }));
    },
    setPwHandler: (_value: string) => {
      setInfo((state: IUserInfo) => ({ ...state, Pw: _value }));
    },
    setPwInvaildHandler: (_value: string) => {
      setInfo((state: IUserInfo) => ({ ...state, PwInvaild: _value }));
    },
    setNameHandler: (_value: string) => {
      setInfo((state: IUserInfo) => ({ ...state, name: _value }));
    },
    setPhoneHandler: (_value: string) => {
      setInfo((state: IUserInfo) => ({ ...state, phone: _value }));
    },
    setEmailHandler: (_value: string) => {
      setInfo((state: IUserInfo) => ({ ...state, email: _value }));
    },
  };

  return <RegistComponent registInfo={registInfo} setHandler={setHandler} />;
};
export default RegistContainer;
