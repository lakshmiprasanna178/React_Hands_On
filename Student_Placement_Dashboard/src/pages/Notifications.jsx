import notifications from "../data/notifications";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";

function Notifications() {
  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1>Notifications</h1>

        <p>
          <strong>{notifications.length}</strong> notifications available
        </p>

        {notifications.length === 0 ? (
          <div className="job-card">
            <p>No notifications available.</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Notifications;