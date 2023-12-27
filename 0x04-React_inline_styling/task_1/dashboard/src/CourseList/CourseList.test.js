import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders no of objects in listCourses prop', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find(CourseListRow);
    expect(rows).toHaveLength(listCourses.length + 2);
  });

  it('renders CourseList component correctly if empty array is passed', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('No course available yet');

  });
});


