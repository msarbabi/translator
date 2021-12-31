import { ActionType } from "../../redux/action-types";
import { Action } from "../../redux/models";
import { inputManagerReducer } from "../../redux/reducers/inputManagerReducer";

describe("Input reducer testing", () => {
  it("Send data test", () => {
    const action: Action = {
      type: ActionType.GET_TRANSLATED,
      payload: { lang: "French", text: "hello world" },
    };
    const input = inputManagerReducer(undefined, action);
    expect(input.length).toEqual(1);
  });
});
