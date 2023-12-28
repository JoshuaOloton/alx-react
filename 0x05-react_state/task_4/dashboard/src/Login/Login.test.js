import React from "react";
import { shallow } from "enzyme";
import Login from './Login';

describe('Login component tests', () => {
  it ('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('renders 2 label tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });
  
});

describe("Test the Login component state behavior", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it("Verify that the submit button is disabled by default", () => {
    expect(wrapper.state().enableSubmit).toBe(false);
  });

  it("verify that changing the value of two inputs enables the button ", () => {
    const wrapper = shallow(<Login />);

    wrapper.find("#email").simulate("change", { target: { value: "t" } });
    wrapper.find("#password").simulate("change", { target: { value: "t" } });
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });
});