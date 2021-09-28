import { EditOutlined } from '@ant-design/icons';
import { fontSubtitle } from '@client/themes/typography';
import { Button, Col, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

export const InfoTitle = styled(Row)`
  margin-bottom: 20px;
`;

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
  font-size: 24px;
  color: ${({ theme }) => theme.pages.lobby.title};
`;

export const InfoMaster = styled(Row)`
  margin-bottom: 20px;
`;

export const StyleLobbyMaster = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyleLobbyMasterText = styled(Paragraph)`
  &&& {
    margin-bottom: 10px;
    ${fontSubtitle};
    color: ${({ theme }) => theme.pages.lobby.subtitle};
  }
`;

export const InfoCopy = styled(Row)`
  margin-bottom: 30px;
`;

export const StyleLobbyCopy = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyleLobbyCopyLabel = styled(Paragraph)`
  &&& {
    margin-bottom: 10px;
    ${fontSubtitle}
    color: ${({ theme }) => theme.pages.lobby.subtitle};
  }
`;

export const StyleLobbyCopyWrapper = styled.div`
  display: flex;
`;

export const StyleLobbyControl = styled.div`
  margin-top: 97px;
  display: flex;
  justify-content: flex-end;
`;

export const InfoControl = styled.div`
  display: flex;
  justify-content: space-between;
`;
