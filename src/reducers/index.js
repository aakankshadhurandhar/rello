//We don't create more than one store in an application! Instead, use combineReducers to create a single root reducer out of many.


//importing from listreducers





import { combineReducers } from "redux";
import listReducer from "./listReducer";

export default  combineReducers({
  lists: listReducer,
});
