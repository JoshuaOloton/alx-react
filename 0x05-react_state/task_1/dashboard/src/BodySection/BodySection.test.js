import { shallow } from "enzyme";
import BodySection from "./BodySection";
import React from "react";

describe("BodySection tests", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.exists("h2")).toBe(true);
    expect(wrapper.find("p").text()).toEqual("test children node");
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h2").html()).toEqual("<h2>test title</h2>");
    expect(wrapper.exists("p")).toBe(true);
  });
});