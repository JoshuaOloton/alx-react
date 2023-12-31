import courseReducer from './courseReducer';
import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

describe('Tests for the courseReducer', () => {
  it('Ensures the default state returns an empty Map', () => {
    const initialState = courseReducer(Map([]), '');
    expect(initialState).toEqual(Map([]));
  });

  it('Handles FETCH_COURSE_SUCCESS action and returns the normalized data', () => {
    const fetchedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const expectedState = coursesNormalizer(fetchedData);

    const currentState = courseReducer(Map([]), fetchCourseSuccess());
    expect(currentState.toJS()).toEqual(expectedState);
  });

  it('Handles SELECT_COURSE action and updates the correct item', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const updatedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const currentState = courseReducer(fromJS(coursesNormalizer(initialState)), selectCourse(2));
    expect(currentState.toJS()).toEqual(coursesNormalizer(updatedState));
  });

  it('Handles UNSELECT_COURSE action and updates the correct item property', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const updatedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const currentState = courseReducer(fromJS(coursesNormalizer(initialState)), unSelectCourse(2));
    expect(currentState.toJS()).toEqual(coursesNormalizer(updatedState));
  });
});
