import { CONSTANTS } from "./../actions/index";

let listID = 2,
  cardID = 6;

const initialState = [
  {
    title: "To-do",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Learn reactJS  ",
      },
      {
        id: `card-${1}`,
        text: "Make a simple  list App",
      },
    ],
  },
  {
    title: "Doing",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "Learn vanillajs.",
      },
      {
        id: `card-${3}`,
        text: "Learn material UI",
      },
      {
        id: `card-${4}`,
        text: "Make project with help from youtube",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    //case for addition of list
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID++}`,
      };
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        id: `card-${cardID++}`,
        text: action.payload.text,
      };

      const newState = state.map((list) => {
        if (list.id === action.payload.listID)
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        else return list;
      });
      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const newState = [...state];
      //dragging list around
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
       // other list
       if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find(list => droppableIdStart === list.id);
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listReducer;