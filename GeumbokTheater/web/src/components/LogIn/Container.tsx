import { useEffect, useState } from "react";
import type { RootState, AppDispatch } from "../../modules/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import LogInComponent from "./Component";
import { action } from "../../modules/userInfo";
import { IUserInfo } from "../Regist/Container";

const LogInContainer = () => {
  const [logID, setLogID] = useState("");
  const [logPw, setLogPw] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const userDB: Array<IUserInfo> = useAppSelector((state) => state.userDB);
  const { ID } = useAppSelector((state) => state.userInfo);

  const onLogIn = async (logID: string, logPw: string): Promise<void> => {
    const data = await axios.post("http://localhost:8080/api/user/login", {
      loginId: logID,
      loginPw: logPw,
    });
    if (data.data.status == 200) {
      dispatch(
        action.login(
          data.data.data.currUserId,
          data.data.data.currUserName,
          userDB
        )
      );
      navigate("/");
    }
  };
  useEffect(() => {
    if (ID.length) navigate("/");
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
