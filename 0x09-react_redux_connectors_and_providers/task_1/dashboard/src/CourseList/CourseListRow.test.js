import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

describe("Testing CourseListRow", () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("test the component renders one cell with colspan = 2 when textSecondCell does not exist when isHeader is true ", () => {
    let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell"/>);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('first cell');
  });

  it("test the component renders two cells when textSecondCell is present when isHeader is true ", () => {
    let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell" textSecondCell="second cell"/>);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('first cell');
    expect(wrapper.find('th').at(1).text()).toEqual('second cell');
  });

  it("When isHeader is false test the component renders correctly two td elements within a tr element", () => {
    let wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="first cell" textSecondCell="second cell"/>);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('first cell');
    expect(wrapper.find('td').at(1).text()).toEqual('second cell');
  });
});