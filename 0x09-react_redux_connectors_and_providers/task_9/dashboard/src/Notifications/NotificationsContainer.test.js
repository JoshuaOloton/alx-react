import React from "react";
import { NotificationsContainer } from "./NotificationsContainer";
import { shallow } from "enzyme";

describe("NotificationsContainer testing", () => {
  it("verify that the function fetchNotifications is called when the component is mounted", () => {
    const fetchNotifications = jest.fn();

    shallow(<NotificationsContainer fetchNotifications={fetchNotifications} />);
    expect(fetchNotifications).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});