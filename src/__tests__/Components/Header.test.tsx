import React from "react";
import { render } from "@testing-library/react";
import Header from "./../../components/Header/Header";

describe("Header testing", () => {
  it("Header title testing", () => {
    const component = render(<Header />);
    const title = component.getByTestId("title");
    expect(title.textContent).toBe("Translator");
  });
});
