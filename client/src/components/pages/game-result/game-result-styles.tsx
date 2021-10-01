import styled from 'styled-components';
import { Button } from '@client/components/shared/button/button';
import { fontTitle } from '@client/themes/typography';

export const StyleGameResultText = styled.div`
  ${fontTitle};
  color: ${({ theme }) => theme.fg};
  text-align: center;
`;
export const StyleGameResults = styled.div`
  padding: 30px;
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
export const StyleDownloadButton = styled(Button)`
  margin: 20px 0;
`;
