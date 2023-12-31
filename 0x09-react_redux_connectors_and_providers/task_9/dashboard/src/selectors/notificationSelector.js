import { createSelector } from "reselect";

export const filterTypeSelected = (state) => state.get("filter");

export const getNotifications = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  getNotifications,
  (notifications) => {
    const filter = notifications.get("filter");
    const messages = notifications.get("messages");

    if (messages) {
      let filtered;

      if (filter === "URGENT") {
        filtered = messages.valueSeq().filter(
          (value) => value.get("isRead") === false && value.get("type") === "urgent"
        );
      } else if (filter !== "URGENT") {
        filtered = messages.valueSeq().filter((value) => value.get("isRead") === false);
      }

      return filtered;
    }

    return messages;
  }
);
