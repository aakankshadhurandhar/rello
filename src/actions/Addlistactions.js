//file for list actions

import { CONSTANTS } from "./index";
//add list button
export var addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};

