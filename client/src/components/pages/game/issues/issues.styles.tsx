import styled from 'styled-components';
import { IssueButton } from '@client/components/shared/issue/issue-button';
import { Collapse } from 'antd';

export const StyledIssues = styled.div`
  --issue-card-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 0;
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

export const StyledIssueButton = styled(IssueButton)`
  --title-font-size: 1.4em;
`;

export const StyledCollapse = styled(Collapse)`
  width: 100%;
`;

export const StyledPanel = styled(Collapse.Panel)`
  &&& .ant-collapse-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    &::before,
    &::after {
      content: none;
    }
  }
`;
