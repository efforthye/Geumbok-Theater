import { IUserAction } from "./userDB";
import { IUserInfo } from "../components/Regist/Container";

const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

const login = (
  logID: string,
  logPw: string,
  userDB?: Array<IUserInfo>
): IUserAction => {
  return {
    type: TYPE.LOGIN,
    payload: { logID, logPw, userDB },
  };
};
const logout = (): IUserAction => {
  return {
    type: TYPE.LOGOUT,
    payload: {},
  };
};
export const action = { login, logout };

export const initialize: { ID: string; Pw: string } = { ID: "", Pw: "" };

export const reducer = (
  state = initialize,
  action: IUserAction
): { ID: string; Pw: string } => {
  const { type, payload }: IUserAction = action;
  switch (type) {
    case TYPE.LOGIN: {
      const { logID, logPw } = payload;
      const tempUser = payload.userDB?.find((item: any) => item.ID === logID);
      if (tempUser && tempUser.Pw === logPw) return { ID: logID, Pw: logPw };
      else return state;
    }
    case TYPE.LOGOUT:
      return initialize;
    default:
      return state;
  }
};
