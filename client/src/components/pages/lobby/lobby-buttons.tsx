import React from 'react';
import {
  StyleEditTitleButton,
  StyleLobbyEditTitleIcon,
} from './lobby-info/lobby-info-styles';

interface EditButtonProps {
  setEditModal: (isShow: boolean) => void;
}

export const EditTitleButton: React.FC<EditButtonProps> = (props) => {
  const { setEditModal } = props;

  return (
    <StyleEditTitleButton
      type="link"
      icon={<StyleLobbyEditTitleIcon />}
      onClick={() => setEditModal(true)}
    />
  );
};
