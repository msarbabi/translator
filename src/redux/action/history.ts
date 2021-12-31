import { Dispatch } from "react";

import { ActionType } from "../action-types";
import { Action } from "../models";
import { store } from "../store/store";

export const setHistory = (data) => {
  return async (dispatch: Dispatch<Action>) => {
    let history: [] = store.getState().getHistory;
    if (history.length) {
      await dispatch({
        type: ActionType.GET_HISTORY,
        payload: [...history, data],
      });
    } else {
      await dispatch({
        type: ActionType.GET_HISTORY,
        payload: [data],
      });
    }
  };
};
