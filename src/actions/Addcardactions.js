//file for creation of new card
import { CONSTANTS } from "./index";
//add card function 
export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text,listID },
  };
};
//edit card 
export const editCard = (id, listID, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, listID, newText }
  };
};
//delete card
export const deleteCard = (id, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listID }
  };
};