//file for list actions

import { CONSTANTS } from "./index";

export var addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};