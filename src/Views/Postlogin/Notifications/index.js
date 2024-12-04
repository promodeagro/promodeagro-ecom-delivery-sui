import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, SpaceBetween, ContentLayout } from '@cloudscape-design/components';
import { fetchNotifications } from 'Redux-Store/Notification/NotificationThunk';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, loading, error } = useSelector((state) => state.notifications);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12:00 instead of 0:00
    return `${day}-${month}-${year} (${hours}:${minutes} ${ampm})`;
  };

  const getNotificationMessage = (type, message) => {
    switch (type) {
      case 'new_runsheet':
        return `You have Received a New Runsheet (${message})`; // Include message in brackets
      default:
        return `You have a new notification (${message})`; // Default message with message field
    }
  };

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <ContentLayout disableOverlap>
      <SpaceBetween size="s" direction="vertical">
        {loading && <p>Loading notifications...</p>}
        {error && <p>Error: {error}</p>}
        {notifications.map((notification) => (
          <Alert
            key={notification.id}
            type="info"
            header={getNotificationMessage(notification.type, notification.message)} // Show message based on type and the message field
            dismissible={true}
            onDismiss={() => console.log(`Dismissed notification ${notification.id}`)}
          >
            <div style={{ color: '#d3d3d3', fontWeight: '400' }}>
              {formatDate(notification.createdAt)} 
            </div>
          </Alert>
        ))}
      </SpaceBetween>
    </ContentLayout>
  );
};

export default Notifications;
