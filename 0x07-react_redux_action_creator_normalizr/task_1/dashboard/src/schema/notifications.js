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
  return notificationDataJson.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
}

export { normalizedNotifications };
