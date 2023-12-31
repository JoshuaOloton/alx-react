import uiReducer, { defaultState } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

describe('Testing uiReducer', () => {
  it('Ensures the initial state is returned when no action is provided to uiReducer', () => {
    const newState = uiReducer(defaultState, '');
    expect(newState.toJS()).toEqual(defaultState.toJS());
  });

  it('Ensures the state remains the same when the action SELECT_COURSE is applied', () => {
    const newState = uiReducer(defaultState, selectCourse());
    expect(newState.toJS()).toEqual(defaultState.toJS());
  });

  it('Verifies that the isNotificationDrawerVisible property becomes true when DISPLAY_NOTIFICATION_DRAWER is applied', () => {
    const newState = uiReducer(defaultState, displayNotificationDrawer());
    expect(newState.toJS().isNotificationDrawerVisible).toEqual(true);
  });
});
