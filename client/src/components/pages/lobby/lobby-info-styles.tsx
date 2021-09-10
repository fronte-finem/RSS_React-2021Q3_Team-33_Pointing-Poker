import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Form } from 'antd';
import styled from 'styled-components';

export const StyleLobbyInfo = styled(Col)`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleEditTitleButton = styled(Button)`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const StyleLobbyEditTitleIcon = styled(EditOutlined)`
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;

export const StyleLobbyEditTitleForm = styled(Form)``;
