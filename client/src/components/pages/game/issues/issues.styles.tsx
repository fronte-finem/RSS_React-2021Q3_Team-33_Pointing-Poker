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
  --bg: transparent;
  --border-color: #0002;

  width: 100%;
  background-color: var(--bg);
  border-color: var(--border-color);

  & > .ant-collapse-item {
    color: ${({ theme }) => theme.fg};
    border-color: var(--border-color);
    & .ant-collapse-header {
      color: ${({ theme }) => theme.fg};
    }
  }
  & > .ant-collapse-item-disabled {
    & .ant-collapse-header {
      color: var(--border-color);
    }
  }
  & .ant-collapse-content {
    background-color: var(--bg);
    border-color: var(--border-color);
  }
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
