import { StyledText } from '@client/components/pages/main-page/components/connect-to-lobby/connect-to-lobby-styleds';
import { Modal } from '@client/components/shared/modal/modal';
import { SelectValue } from 'antd/lib/select';
import React, { useState } from 'react';
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
  const {
    title = '',
    link = '',
    priority = '',
    visible,
    onOK,
    onCancel,
  } = props;

  const [titleField, setTitleField] = useState(title);
  const [linkField, setLinkField] = useState(link);
  const [priorityField, setPriorityField] = useState(priority);

  const options = [
    { value: 'Low', label: 'Low' },
    { value: 'Middle', label: 'Middle' },
    { value: 'Hight', label: 'Hight' },
  ];

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleField(e.target.value);
  };
  const onChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkField(e.target.value);
  };
  const onChangePriority = (e: React.SetStateAction<SelectValue>) => {
    setPriorityField(e as string);
  };

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
            <StyledInput value={titleField} onChange={onChangeTitle} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledText>Link:</StyledText>
            <StyledInput value={linkField} onChange={onChangeLink} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledText>Priority:</StyledText>
            <StyledSelect
              defaultValue={!title ? options[0].value : priorityField}
              options={options}
              onChange={onChangePriority}
            />
          </StyledInputWrapper>
        </StyledWrapper>
      }
    />
  );
};
