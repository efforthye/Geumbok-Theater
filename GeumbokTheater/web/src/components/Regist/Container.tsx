import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { AppDispatch } from "../../modules/store";
import { action } from "../../modules/userDB";

import RegistComponent from "./Component";

export interface IUserInfo {
  name: string;
  ID: string;
  Pw: string;
  PwInvaild: string;
  phone: string;
  email: string;
  address: string;
  zonecode: string;
  openPostcode?: boolean;
}

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
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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

  const onRegist = (
    name: string,
    ID: string,
    Pw: string,
    phone: string,
    email: string,
    address: string,
    zonecode: string
  ): void => {
    dispatch(action.regist(name, ID, Pw, phone, email, address, zonecode));
    navigate("/login");
  };

  return (
    <RegistComponent
      registInfo={registInfo}
      setHandler={setHandler}
      onRegist={onRegist}
    />
  );
};
export default RegistContainer;
