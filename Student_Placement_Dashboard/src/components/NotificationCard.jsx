function NotificationCard({ notification }) {
  return (
    <div className="job-card">
      <h2>{notification.title}</h2>

      <p>{notification.message}</p>

      <p>
        <strong>Date:</strong> {notification.date}
      </p>
    </div>
  );
}

export default NotificationCard;