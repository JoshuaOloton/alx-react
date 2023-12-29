import { UNSELECT_COURSE, SELECT_COURSE } from "./courseActionTypes";
import { unSelectCourse, selectCourse } from "./courseActionCreators";

describe("tests for action creators", () => {
  it("returns the correct action payload and type when unSelectCourse is called", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
  it("returns the correct action payload and type when selectCourse is called", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
});