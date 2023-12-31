import { shallow, mount } from "enzyme";
import React from "react";
import App, { listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";

import { fromJS } from "immutable";
import { configureStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState as uiInitialState } from "../reducers/uiReducer";

const appStore = configureStore(uiReducer, uiInitialState);

describe("<App /> Component Tests", () => {
  it("Ensures mapStateToProps returns the correct object for user login status", () => {
    let appState = fromJS({
      isUserLoggedIn: true,
    });

    const mappedProps = mapStateToProps(appState);

    expect(mappedProps).toEqual({ isLoggedIn: true });
  });
});
