import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { createActionMarkAsRead, createActionSetNotificationFilter} from './notificationActionCreators';

describe('Action Creators', () => {
  it('creates the action for marking as read', () => {
    const expectedAction = {
      type: MARK_AS_READ,
      index: 1,
    };
    const resultAction = createActionMarkAsRead(1);

    expect(resultAction).toEqual(expectedAction);
  });

  it('creates the action for setting notification filter', () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };
    const resultAction = createActionSetNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(resultAction).toEqual(expectedAction);
  });
});
