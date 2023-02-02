import { useState } from "react";
import { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../../modules/store";
import { useDispatch, useSelector } from "react-redux";

import LogInComponent from "./Component";

export interface ILogin {
  logID: string;
  logPw: string;
}

const LogInContainer = () => {
  const [logInInfo, setLogIn] = useState<ILogin>({
    logID: "",
    logPw: "",
  });

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const userDB = useAppSelector((state) => state);

  return <LogInComponent logInInfo={logInInfo} setLogIn={setLogIn} />;
};
export default LogInContainer;
