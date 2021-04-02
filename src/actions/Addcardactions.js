//file for creation of new card
import { CONSTANTS } from "./index";

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { listID, text },
  };
};