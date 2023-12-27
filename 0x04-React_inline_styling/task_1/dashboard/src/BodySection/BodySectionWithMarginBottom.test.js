import BodySection from "./BodySection";
import { shallow } from "enzyme";
import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySectionWithMarginBottom tests", () => {
  it("should apply margin bottom to child component", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
    expect(wrapper.find(BodySection)).toHaveLength(2-1);
    expect(wrapper.find(BodySection).html()).toEqual('<div class="bodySection"><h2>test title</h2></div>');
  });
});