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

export const initialize: Array<IUserInfo> = [
  // 로그인 구현 시 편의를 위해 임시 데이터 넣어둠
  // {
  //   ID: "jung9649",
  //   Pw: "wkdwjdgus1!",
  //   address: "서울 송파구 위례순환로 477",
  //   email: "ghkdwja9649@gmail.com",
  //   name: "장정현",
  //   phone: "010-2052-9649",
  //   zonecode: "05814",
  // },
];

export const reducer = (
  state = initialize,
  action: IUserAction
): Array<IUserInfo> => {
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
