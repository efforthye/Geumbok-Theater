import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./userDB";
import { initialize } from "./userDB";

const store = createStore(reducer, initialize, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
