import { IUserInfo } from "../components/Regist/Component";

interface IUserAction {
  type: string;
  payload?: any;
}

const TYPE = {
  REGIST: "userDB/regist",
};

const regist = ({
  name,
  ID,
  Pw,
  phone,
  email,
  address,
  zonecode,
}: IUserInfo): IUserAction => {
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

export const initialize: Array<IUserInfo | null> = [];

export const reducer = (
  state = initialize,
  action: IUserAction
): Array<IUserInfo | null> => {
  const { type, payload }: IUserAction = action;
  switch (type) {
    case TYPE.REGIST: {
      const { name, ID, Pw, phone, email, address, zonecode }: IUserInfo =
        payload;
      return [...state, name, ID, Pw, phone, email, address, zonecode];
    }

    default:
      return state;
  }
};
