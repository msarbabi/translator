import axios from "axios";
import { Dispatch } from "react";

import { ActionType, HttpMethods, Languages } from "../action-types";
import { Action } from "../models";
import { HEADERS, OPTIONS, URL } from "../../services/httpConfig";

export const getTranslated = (data: { text: string; lang: string }) => {
  return async (dispatch: Dispatch<Action>) => {
    await axios({
      method: HttpMethods.POST,
      url: URL,
      headers: HEADERS,
      data: {
        format: "text",
        from: Languages.english,
        input: data.text,
        options: OPTIONS,
        to: data.lang,
      },
    }).then((res) => {
      dispatch({
        type: ActionType.GET_TRANSLATED,
        payload: res.data.translation[0],
      });
    });
  };
};
