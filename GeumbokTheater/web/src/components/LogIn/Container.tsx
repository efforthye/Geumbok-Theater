import { useEffect, useState } from "react";
import { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../../modules/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComponent from "./Component";
import { action } from "../../modules/userInfo";

const LogInContainer = () => {
  const [logID, setLogID] = useState("");
  const [logPw, setLogPw] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const userDB = useAppSelector((state) => state.userDB);
  const { ID } = useAppSelector((state) => state.userInfo);

  const onLogIn = (logID: string, logPw: string): void => {
    dispatch(action.login(logID, logPw, userDB));
  };
  useEffect(() => {
    if (ID) navigate("/");
  }, [ID]);

  return (
    <LogInComponent
      logID={logID}
      setLogID={setLogID}
      logPw={logPw}
      setLogPw={setLogPw}
      onLogIn={onLogIn}
    />
  );
};
export default LogInContainer;
