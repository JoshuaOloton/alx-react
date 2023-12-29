import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

describe("Testing the <Footer /> component", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Footer />);
  });

  it("should render the Footer Component without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render at least the text 'Copyright'", () => {
    expect(wrapper.find("Copyright").at(0)).toBeDefined();
  });
});

describe("Testing Footer Component context and state", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not render a link when the user is logged out within context", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(0);
    expect(wrapper.find("a").exists()).toBeFalsy();
    expect(wrapper.text()).not.toContain("Contact us");

    wrapper.unmount();
  });

  it("should render a link when the user is logged in within context", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(1);
    expect(wrapper.find("a").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Contact us");

    wrapper.unmount();
  });
});
