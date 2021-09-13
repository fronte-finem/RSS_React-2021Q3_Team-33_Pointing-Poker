import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const StyleLobbyPage = styled(Layout)`
  width: 100%;
  max-width: 1000px;
  background-color: ${(props) => props.theme.bg};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyleLobbyTitle = styled(Title)`
  margin: 0 !important;
  font-family: 'Ruda';
  font-weight: bold;
`;
