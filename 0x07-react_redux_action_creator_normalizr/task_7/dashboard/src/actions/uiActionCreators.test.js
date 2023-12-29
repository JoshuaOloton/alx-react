import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

import { createActionLogin, createActionLogout, createActionDisplayNotificationDrawer, createActionHideNotificationDrawer } from "./uiActionCreators";

describe("Tests for UI notification action creators", () => {
  it("should create a proper action for login", () => {
    const email = "james@gmail.com";
    const password = "heheheh";

    expect(createActionLogin(email, password)).toEqual({
      type: LOGIN,
      user: { email: "james@gmail.com", password: "heheheh" },
    });
  });

  it("should create a proper action for logout", () => {
    expect(createActionLogout()).toEqual({ type: LOGOUT });
  });

  it("should create a proper action for displaying the notification drawer", () => {
    expect(createActionDisplayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create a proper action for hiding the notification drawer", () => {
    expect(createActionHideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
