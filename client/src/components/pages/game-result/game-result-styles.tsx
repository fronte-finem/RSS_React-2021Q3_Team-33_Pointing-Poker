import styled from 'styled-components';
import { fontTitle } from '@client/themes/typography';

export const StyleGameResults = styled.div`
  padding: 30px;
`;

export const StyleGameResultText = styled.div`
  ${fontTitle};
  color: ${({ theme }) => theme.fg};
  text-align: center;
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 20px;
  padding: 40px 0;
`;

export const StyleGameResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyleGameResultIssue = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 20px;
`;

export const StyleGameResultCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
