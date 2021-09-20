import styled from 'styled-components';
import { Typography } from 'antd';

export const StyleLobbyPage = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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
  margin: 0 !important;
  font-family: var(--font-ruda);
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  && {
    color: ${({ theme }) => theme.fg};
  }
`;
