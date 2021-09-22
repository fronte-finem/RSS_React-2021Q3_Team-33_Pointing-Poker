import styled from 'styled-components';

export const StyleGameResultTitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: var(--font-ruda);
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.fg};
`;
export const StyleGameResults = styled.div`
  padding: 30px;
`;
export const StyleGameResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
`;
export const StyleGameResultIssue = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;
