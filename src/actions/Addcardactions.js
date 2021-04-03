//file for creation of new card
import { CONSTANTS } from "./index";
//add card function 
export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text,listID },
  };
};
