import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import Input from "../../components/input/Input";

describe("Input testing", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Input />
      </Provider>
    );
  });

  it("Input testing", () => {
    const text = component.getByTestId("input");
    expect(text.placeholder).toBe("Write English Text...");
  });

  it("Translated testing", () => {
    const text = component.getByTestId("translated");
    expect(text.textContent).toBe("Translating...");
  });

  it("Submit button testing", () => {
    const text = component.getByTestId("submit-btn");
    expect(text.textContent).toBe("Submit");
  });
});
