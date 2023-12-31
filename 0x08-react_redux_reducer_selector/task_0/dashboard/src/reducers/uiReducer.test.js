import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('Tests for the uiReducer', () => {
  const defaultState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the initial state when no action is provided', () => {
    expect(uiReducer(defaultState, 'null')).toEqual(defaultState);
  });

  it('should return the initial state when an incorrect action is provided', () => {
    expect(uiReducer(defaultState, { type: SELECT_COURSE })).toEqual(
      defaultState
    );
  });

  it('should update the state correctly when the action is DISPLAY_NOTIFICATION_DRAWER', () => {
    const nextState = uiReducer(defaultState, { type: DISPLAY_NOTIFICATION_DRAWER });
    const expectedState = {
      ...defaultState,
      isNotificationDrawerVisible: true,
    };
    expect(nextState).toEqual(expectedState);
  });
});
