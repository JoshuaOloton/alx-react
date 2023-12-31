import rootReducer from "./rootReducer";
import { combineReducers } from "redux";
import { Map } from "immutable";

describe("Root Reducer Tests", function () {
  it("verifies the initial state of the combined reducers", function () {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const combinedReducer = combineReducers(rootReducer);
    const initialState = combinedReducer(undefined, { type: "RANDOM" });

    for (const key in expectedState) {
      expect(initialState[key]).toBeTruthy();
      expect(typeof expectedState[key]).toEqual(typeof initialState[key]);
    }
  });
});
