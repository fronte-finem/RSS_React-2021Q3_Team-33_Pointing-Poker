import { StyledText } from '@client/components/pages/main-page/components/connect-to-lobby/connect-to-lobby-styleds';
import { Modal } from '@client/components/shared/modal/modal';
import React from 'react';
import {
  StyledInput,
  StyledInputWrapper,
  StyledSelect,
  StyledWrapper,
} from './modal-edit-issue-styleds';

interface IProps {
  visible: boolean;
  onOK?: () => void;
  onCancel?: () => void;
  title?: string;
  link?: string;
  priority?: string;
}

export const ModalEditIssue: React.FC<IProps> = (props) => {
  const { title, visible, onOK, onCancel, link, priority } = props;

  const options = [
    { value: 'Low', label: 'Low' },
    { value: 'Middle', label: 'Middle' },
    { value: 'Hight', label: 'Hight' },
  ];
  return (
    <Modal
      okText="Yes"
      cancelText="No"
      title={!title ? 'Create Issue' : 'Edit Issue'}
      visible={visible}
      onOk={onOK}
      onCancel={onCancel}
      content={
        <StyledWrapper>
          <StyledInputWrapper>
            <StyledText>Title:</StyledText>
            <StyledInput value={title} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledText>Link:</StyledText>
            <StyledInput value={link} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledText>Priority:</StyledText>
            <StyledSelect
              defaultValue={!title ? options[0].value : priority}
              options={options}
            />
          </StyledInputWrapper>
        </StyledWrapper>
      }
    />
  );
};
