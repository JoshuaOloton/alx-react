import * as notificationDataJson from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const userSchema = new schema.Entity("users");
const messageSchema = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notificationSchema = new schema.Entity("notification", {
  author: userSchema,
  context: messageSchema,
});

const normalizedNotifications = normalize(notificationDataJson, [notificationSchema]);

export default function getAllNotificationsByUser(userId) {
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;
  const notificationsByUser = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }

  return notificationsByUser;
}

export { normalizedNotifications };
