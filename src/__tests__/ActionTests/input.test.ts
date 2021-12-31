import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@babel/polyfill";
import { getTranslated } from "../../redux/action/input";

describe("Input Action testing", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const reduxStore = mockStore();

  beforeEach(() => {
    reduxStore.clearActions();
  });

  it("Test by random text 1", async () => {
    await reduxStore.dispatch(
      getTranslated({ text: "hello world", lang: "fra" })
    );
    expect(reduxStore.getActions()[0].payload).toBe("bonjour tout le monde");
  });

  it("Test by random text 2", async () => {
    await reduxStore.dispatch(
      getTranslated({ text: "are you okay?", lang: "fra" })
    );
    expect(reduxStore.getActions()[0].payload).toBe("tu vas bien ?");
  });
});
