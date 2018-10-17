export const ADD_EVENT = "ADD_EVENT";

export const addEvent = eventObj => ({
  type: ADD_EVENT,
  payload: eventObj
});

export const RESET_STATE = "RESET_STATE";

export const resetState = () => ({
  type: RESET_STATE
});

export const REPLACE_ITEM = "REPLACE_ITEM";

export const replaceItem = (oldItem, newItem) => ({
  type: REPLACE_ITEM,
  oldItem,
  newItem
});
