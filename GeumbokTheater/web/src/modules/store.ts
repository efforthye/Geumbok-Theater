import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as userDBReducer, initialize as userDBIni } from "./userDB";
import {
  reducer as userInfoReducer,
  initialize as userInfoIni,
} from "./userInfo";

const store = createStore(
  combineReducers({
    userDB: userDBReducer,
    userInfo: userInfoReducer,
  }),
  { userDB: userDBIni, userInfo: userInfoIni },
  composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
