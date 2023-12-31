import uiReducer, { initialState } from "./uiReducer";
import { LOGIN, DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

const TEST_USER = { email: "testuser@example.com", password: "testpassword" };

describe("Custom UI Reducer Tests", function () {
  it("should return the initial state when no action is provided", function () {
    const state = uiReducer(undefined, {});

    expect(state.toJS()).toEqual(initialState);
  });

  it("should maintain the initial state when an unknown action (SELECT_COURSE) is provided", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });

    expect(state.toJS()).toEqual(initialState);
  });

  it("should correctly toggle the notification drawer visibility on DISPLAY_NOTIFICATION_DRAWER 
