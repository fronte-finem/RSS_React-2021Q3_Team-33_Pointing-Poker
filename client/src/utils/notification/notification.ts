export function spawnNotification(title: string, body: string, icon?: string) {
  const options: NotificationOptions = {
    body,
    icon,
    tag: 'team33-pointing-poker message-group-1',
    renotify: true,
  };
  const notification: Notification = new Notification(title, options);
  notification.onshow = (ev) => console.log(ev);
  notification.onclose = (ev) => console.log(ev);
}
