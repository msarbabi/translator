import { Action } from "./../models/index";
import { ActionType } from "../action-types";

export const inputManagerReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_TRANSLATED:
      return [action.payload];
    default:
      return state;
  }
};
