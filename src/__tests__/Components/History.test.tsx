import React from "react";
import { render } from "@testing-library/react";
import History from "../../components/History/History";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

describe("History testing", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <History />
      </Provider>
    );
  });

  it("From title testing", () => {
    const title = component.getByTestId("from-title");
    expect(title.textContent).toBe("From English");
  });

  it("To title testing", () => {
    const title = component.getByTestId("to-title");
    expect(title.textContent).toBe("To other language");
  });
});
