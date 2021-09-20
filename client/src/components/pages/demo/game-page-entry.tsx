import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { DealerToJoin, Role, UserToJoin } from '@shared/api-types/user';
import { Button, Form, Input, Modal, Switch } from 'antd';

export const PageGameEntryDemo: React.FC = observer(() => {
  const [visibleCreateGame, setVisibleCreateGame] = React.useState(false);
  const [visibleLogin, setVisibleLogin] = React.useState(false);
  const [formCreateGame] = Form.useForm();
  const [formLogin] = Form.useForm();

  const { gameState, socketState, gameSocketActions } = useGameService();

  const onCreateGame = async (dealerToJoin: DealerToJoin) => {
    await gameSocketActions.createGame(dealerToJoin);
    if (socketState.isFail) console.log(socketState.failMessage);
    else console.log('success create game');
  };

  const onJoin = async ({ gameId }: { gameId: string }) => {
    if (socketState.isConnected && gameState.id === gameId) {
      setVisibleLogin(true);
      return;
    }
    await gameSocketActions.joinGame(gameId);
    if (!socketState.isFail) setVisibleLogin(true);
  };

  type UserValues = Omit<UserToJoin, 'role'> & { isGamer: boolean };

  const onLogin = async ({ isGamer, ...user }: UserValues) => {
    const userToJoin: UserToJoin = {
      ...user,
      role: isGamer ? Role.GAMER : Role.SPECTATOR,
    };
    await gameSocketActions.login(userToJoin);
    if (socketState.isFail) console.log(socketState.failMessage);
    else console.log('success login');
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}>
      <h1>Entry</h1>

      <Button type="primary" onClick={() => setVisibleCreateGame(true)}>
        Create Game
      </Button>

      <Modal
        title="Create Game"
        okText="Create"
        visible={visibleCreateGame}
        onOk={() => formCreateGame.submit()}
        onCancel={() => setVisibleCreateGame(false)}
        confirmLoading={socketState.isLoading}>
        <Form
          form={formCreateGame}
          style={{ padding: '20px', backgroundColor: '#0002' }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onCreateGame}>
          <Form.Item label="game title" name="gameTitle">
            <Input />
          </Form.Item>
          <Form.Item label="first name" name="firstName">
            <Input />
          </Form.Item>
          <Form.Item label="last name" name="lastName">
            <Input />
          </Form.Item>
          <Form.Item label="job position" name="jobPosition">
            <Input />
          </Form.Item>
          {socketState.isLoading && <div>Loading...</div>}
          {socketState.isFail && <div>{socketState.failMessage}</div>}
        </Form>
      </Modal>

      <Form
        style={{ padding: '20px', backgroundColor: '#0002' }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onJoin}
        fields={[
          {
            name: 'gameId',
            value: gameState.id,
          },
        ]}>
        <Form.Item label="game id" name="gameId">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit">
            Join
          </Button>
        </Form.Item>
        {socketState.isLoading && <div>Loading...</div>}
        {socketState.isFail && <div>{socketState.failMessage}</div>}
      </Form>

      <Modal
        title="Login"
        okText="Create"
        visible={visibleLogin}
        onOk={() => formLogin.submit()}
        onCancel={() => setVisibleLogin(false)}
        confirmLoading={socketState.isLoading}>
        <Form
          form={formLogin}
          style={{ padding: '20px', backgroundColor: '#0002' }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onLogin}>
          <Form.Item label="first name" name="firstName">
            <Input />
          </Form.Item>
          <Form.Item label="last name" name="lastName">
            <Input />
          </Form.Item>
          <Form.Item label="job position" name="jobPosition">
            <Input />
          </Form.Item>
          <Form.Item
            label="gamer"
            name="isGamer"
            valuePropName="checked"
            initialValue>
            <Switch defaultChecked />
          </Form.Item>
          {socketState.isLoading && <div>Loading...</div>}
          {socketState.isFail && <div>{socketState.failMessage}</div>}
        </Form>
      </Modal>

      <div style={{ padding: '20px', backgroundColor: '#08f4' }}>
        <h4>Socket operation state</h4>
        <pre>{JSON.stringify(socketState, null, 2)}</pre>
      </div>
    </div>
  );
});
