import styled from 'styled-components';
import { IssueButton } from '@client/components/shared/issue/issue-button';

export const StyledIssues = styled.div`
  --issue-card-width: 250px;
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const List = styled.ul`
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: block;
`;

export const FirstItem = styled(Item)`
  margin-bottom: 10px;
`;

export const PaginationWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIssueButton = styled(IssueButton)`
  --title-font-size: 1.4em;
`;
