import { ActionType } from "../../redux/action-types";
import { Action } from "../../redux/models";
import { getHistoryReducer } from "../../redux/reducers/getHistory";

describe("History reducer testing", () => {
  it("Initialing empty state test", () => {
    const action: Action = {
      type: ActionType.GET_HISTORY,
      payload: [],
    };
    const history = getHistoryReducer(undefined, action);
    expect(history).toStrictEqual([]);
  });

  it("Initialing by a history test", () => {
    const action: Action = {
      type: ActionType.GET_HISTORY,
      payload: [
        { text: "hello world", textTranslated: "bonjour tout le monde" },
      ],
    };
    const history = getHistoryReducer(undefined, action);
    expect(history.length).toEqual(1);
  });
});
