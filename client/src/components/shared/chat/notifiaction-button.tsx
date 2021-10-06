import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStateService } from '@client/providers/state-service';
import { Tooltip } from 'antd';
import {
  StyledChatButton,
  StyledNotificationIcon,
} from './chat-toggle-button.styles';

export const NotificationButton = observer(() => {
  const { modalState } = useStateService();

  const onClick = async () => {
    const response = await Notification.requestPermission();
    modalState.setNotificationPermission(response);
    if (response === 'denied') {
      modalState.initSystemMessage('Notifications blocked 🚫');
    } else if (response === 'granted') {
      modalState.initSystemMessage('Notifications allowed ✅');
    }
  };

  return (
    <Tooltip title="Allow global notifications. If it is incognito mode, they will be blocked anyway.">
      <StyledChatButton
        type="link"
        icon={<StyledNotificationIcon />}
        onClick={onClick}
      />
    </Tooltip>
  );
});
