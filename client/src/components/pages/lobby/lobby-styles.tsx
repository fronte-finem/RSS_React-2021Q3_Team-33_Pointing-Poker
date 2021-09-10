import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const StyleLobbyPage = styled(Layout)`
  background-color: ${(props) => props.theme.bg};
`;

export const StyleLobbyTitle = styled(Title)`
  margin: 0 !important;
  font-family: 'Ruda';
  font-weight: bold;
`;
