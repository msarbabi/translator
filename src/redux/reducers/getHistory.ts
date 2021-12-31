import { Action } from "./../models/index";
import { ActionType } from "../action-types";

export const getHistoryReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_HISTORY:
      return [...action.payload];
    default:
      return state;
  }
};
