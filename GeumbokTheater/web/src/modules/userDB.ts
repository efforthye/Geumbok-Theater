import { IUserInfo } from "../components/Regist/Container";

export interface IUserAction {
  type: string;
  payload?: any;
}

const TYPE = {
  REGIST: "userDB/regist",
};

const regist = (
  name: string,
  ID: string,
  Pw: string,
  phone: string,
  email: string,
  address: string,
  zonecode: string
): IUserAction => {
  return {
    type: TYPE.REGIST,
    payload: {
      name,
      ID,
      Pw,
      phone,
      email,
      address,
      zonecode,
    },
  };
};

export const action = { regist };

export const initialize: Array<string> = [];

export const reducer = (
  state = initialize,
  action: IUserAction
): Array<string> => {
  const { type, payload }: IUserAction = action;
  switch (type) {
    case TYPE.REGIST: {
      const { name, ID, Pw, phone, email, address, zonecode }: IUserInfo =
        payload;
      let tempArr: Array<any> = [...state];
      if (tempArr.find((item) => item.ID === ID)) return state;
      else
        return [...tempArr, { name, ID, Pw, phone, email, address, zonecode }];
    }

    default:
      return state;
  }
};
