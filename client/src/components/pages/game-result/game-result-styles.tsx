import styled from 'styled-components';
import { Button } from '@client/components/shared/button/button';

export const StyleGameResultText = styled.p`
  margin: 0;
  padding: 0;
  font-family: var(--font-ruda);
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: ${(props) => props.theme.fg};
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
