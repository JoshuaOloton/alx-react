import * as data from '../../notifications.json'

export const getAllNotificationsByUser = (userId) => {
  return data.filter((notification) => notification.author.id === userId)
    .map(({ context }) => context);
};
