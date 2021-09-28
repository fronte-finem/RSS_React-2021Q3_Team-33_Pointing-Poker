import styled from 'styled-components';
import { Typography } from 'antd';
import { fontTitle } from '@client/themes/typography';

export const StyleLobbyPage = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.content.shadow};
`;

export const StyledLobbySection = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export const StyledLobbyGrid = styled.div`
  --cell-width: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--cell-width));
  grid-auto-rows: 1fr;
  justify-content: center;
  justify-items: center;
  gap: 20px;
`;

export const StyleLobbyTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
    ${fontTitle};
    text-align: center;
    color: ${({ theme }) => theme.pages.lobby.title};
  }
`;
