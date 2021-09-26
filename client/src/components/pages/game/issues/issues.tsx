import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import React, { useState } from 'react';
import { StyledTitle } from '@client/components/styles/text';
import { Pagination } from 'antd';
import { getPage } from '@shared/utils/array';
import {
  FirstItem,
  Item,
  List,
  PaginationWrapper,
  StyledIssueButton,
  StyledIssues,
} from './issues.styles';

const PAGE_SIZE = 4;

export const Issues = observer(function Issues() {
  const { gameState } = useStateService();
  const [page, setPage] = useState(1);

  const paginator = (
    <PaginationWrapper>
      <Pagination
        size="small"
        current={page}
        onChange={setPage}
        pageSize={PAGE_SIZE}
        total={gameState.issues.length}
      />
    </PaginationWrapper>
  );

  return (
    <StyledIssues>
      <StyledTitle level={2}>Issues:</StyledTitle>
      <List>
        <FirstItem>
          <IssueCard issue={gameState.currentIssue} />
        </FirstItem>
        <Item>{paginator}</Item>
        {getPage(gameState.getIssues(), page, PAGE_SIZE).map((issue) => (
          <Item key={issue.id}>
            <IssueCard issue={issue} />
          </Item>
        ))}
        <Item>{paginator}</Item>
        {gameState.isDealer ? <StyledIssueButton /> : null}
      </List>
    </StyledIssues>
  );
});
