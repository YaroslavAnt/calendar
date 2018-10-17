import { ADD_EVENT, RESET_STATE, REPLACE_ITEM } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case RESET_STATE:
      return initialState;
    case REPLACE_ITEM:
      return state.map(el => (el === action.oldItem ? action.newItem : el));
    default:
      return state;
  }
};
