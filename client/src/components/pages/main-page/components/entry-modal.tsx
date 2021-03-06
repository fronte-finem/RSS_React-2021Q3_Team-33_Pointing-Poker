import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Form, ModalFuncProps } from 'antd';
import { Avatar } from '@client/components/shared/avatar/avatar';
import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { InputAvatarImage } from '@client/components/shared/input-file/input-avatar-image';
import { useStateService } from '@client/providers/state-service';
import { DealerToJoin, Role, UserToJoin } from '@shared/api-types/user';
import {
  StyledBody,
  StyledFooter,
  StyledFormItem,
  StyledHeader,
  StyledObserverItem,
  StyledTitle,
  StyledWrapper,
} from './entry-modal.styles';

type Props = ModalFuncProps & { createGame?: boolean };

export const EntryModal: React.FC<Props> = observer(
  ({ createGame, ...props }) => {
    const { socketState } = useStateService();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatar, setAvatar] = useState<string | null>(null);
    const [form] = Form.useForm();

    const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) =>
      setFirstName(e.target.value);
    const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) =>
      setLastName(e.target.value);

    const handleLoad = (base64?: string | null) => setAvatar(base64 || null);

    const onSubmit = async (data: DealerToJoin & UserToJoin) => {
      console.log(data);
      await (createGame
        ? socketState.createGame(data)
        : socketState.login(data));
      if (socketState.isFail) console.log(socketState.failMessage);
      else console.log(createGame ? 'success create game' : 'success login');
    };

    const modalTitle = createGame ? 'Create game' : 'Connect to lobby';

    const roleSwitcher = createGame ? null : (
      <StyledObserverItem
        name="role"
        label="Connect as Observer"
        initialValue={Role.GAMER}
        valuePropName="toggle"
        normalize={(value) => (value ? Role.SPECTATOR : Role.GAMER)}>
        <Toggle />
      </StyledObserverItem>
    );

    const gameTitle = createGame ? (
      <StyledFormItem
        name="gameTitle"
        label="Game title:"
        rules={[{ required: true, whitespace: true }]}
        messageVariables={{ name: 'Game title' }}>
        <Input />
      </StyledFormItem>
    ) : null;

    return (
      <Modal
        okText="Confirm"
        cancelText="Cancel"
        onOk={() => form.submit()}
        confirmLoading={socketState.isLoading}
        {...props}>
        <Form form={form} onFinish={onSubmit}>
          <StyledWrapper>
            <StyledHeader>
              <StyledTitle>{modalTitle}</StyledTitle>

              {roleSwitcher}
            </StyledHeader>

            <StyledBody>
              {gameTitle}

              <StyledFormItem
                name="firstName"
                label="Your first name:"
                rules={[{ required: true, whitespace: true }]}
                messageVariables={{ name: 'First name' }}>
                <Input onChange={onChangeFirstName} />
              </StyledFormItem>

              <StyledFormItem
                name="lastName"
                label="Your last name:"
                rules={[{ whitespace: true }]}
                messageVariables={{ name: 'Last name' }}>
                <Input onChange={onChangeLastName} />
              </StyledFormItem>

              <StyledFormItem
                name="jobPosition"
                label="Your job position:"
                rules={[{ whitespace: true }]}
                messageVariables={{ name: 'Job position' }}>
                <Input />
              </StyledFormItem>

              <StyledFormItem
                name="avatar"
                label="Avatar image:"
                valuePropName="avatar"
                normalize={() => avatar}>
                <InputAvatarImage onLoad={handleLoad} />
              </StyledFormItem>
            </StyledBody>
          </StyledWrapper>
        </Form>
        <StyledFooter>
          <Avatar size={83} src={avatar} user={{ firstName, lastName }} />
        </StyledFooter>
      </Modal>
    );
  }
);
