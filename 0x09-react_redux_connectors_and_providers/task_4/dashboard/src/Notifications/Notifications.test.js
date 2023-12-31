import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    
    const renderedNotifications = wrapper.find(NotificationItem);
    expect(renderedNotifications).toHaveLength(listNotifications.length);

    listNotifications.forEach((notification, index) => {
      expect(renderedNotifications.at(index).props()).toEqual(notification);
    });
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    const renderedList = wrapper.find("ul");

    expect(renderedList.children()).toHaveLength(listNotifications.length);
    expect(renderedList.children(NotificationItem)).toHaveLength(listNotifications.length);
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when listNotifications is an empty array", () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("re-renders if listNotifications is changed", () => {
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: getLatestNotification() },
      { id: 4, type: "default", value: "Foo" },
    ];

    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications: newListNotifications });

    const renderedNotifications = wrapper.find(NotificationItem);
    expect(renderedNotifications).toHaveLength(newListNotifications.length);

    newListNotifications.forEach((notification, index) => {
      expect(renderedNotifications.at(index).props()).toEqual(notification);
    });
  });
});

describe("onClick event behaves as it should", () => {
  it("calls console.log when markAsRead is called", () => {
    const wrapper = shallow(<Notifications />);
    const spyConsoleLog = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead(1);

    expect(spyConsoleLog).toHaveBeenCalledWith(1);
    expect(spyConsoleLog).toHaveBeenCalledTimes(1);

    spyConsoleLog.mockRestore();
  });

  it("calls handleDisplayDrawer when menu item is clicked", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find("div").at(0).simulate("click");

    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();
  });

  it("calls handleHideDrawer when button is clicked", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find("button").at(0).simulate("click");

    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
