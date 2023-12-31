import { shallow } from "enzyme";
import React from "react";
import { App, listNotificationsInitialState, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";

import { fromJS } from "immutable";
import { configureStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";

const testStore = configureStore(uiReducer, initialState);

describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("does not display CourseList with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  it("renders CourseList when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });

  it("verifies that markNotificationAsRead works as intended", () => {
    const wrapper = shallow(<App />);

    const instance = wrapper.instance();

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState
    );

    instance.markNotificationAsRead(4);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState
    );

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState.slice(0, 2)
    );

    instance.markNotificationAsRead(1);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState.slice(1, 2)
    );
  });
});

describe("App Redux", () => {
  it("mapStateToProps returns the right object from user Login", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });

  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = {
      ui: fromJS({
        isNotificationDrawerVisible: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});
