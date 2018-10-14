import { ADD_EVENT, RESET_STATE } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
