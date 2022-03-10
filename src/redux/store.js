import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import counterReducer from "./reducers/counter";

//object yang masuk kedalam combineReducer akan menjadi
//parameter "state" di callback function useSelector

const rootReducer = combineReducers({
  auth: userReducer,
  counter: counterReducer,
});

export default rootReducer;
