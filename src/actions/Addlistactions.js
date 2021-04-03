//file for list actions

import { CONSTANTS } from "./index";
//add list button
export var addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};


//drag and drop function
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    },
  };
};