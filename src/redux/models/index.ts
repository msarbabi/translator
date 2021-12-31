import { ActionType } from "../action-types";

interface input {
  type: ActionType.GET_TRANSLATED;
  payload: {
    lang: string;
    text: string;
  };
}

interface history {
  type: ActionType.GET_HISTORY;
  payload: {
    text: string;
    textTranslated: string;
  }[];
}

export type Action = input | history;
