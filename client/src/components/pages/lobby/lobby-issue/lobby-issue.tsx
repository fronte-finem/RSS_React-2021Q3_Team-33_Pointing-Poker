import { IssueButton } from '@client/components/shared/issue/issue-button';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { Issue, Priority } from '@shared/api-types/issue';
import React from 'react';
import { StyleLobbyTitle } from '../lobby-styles';
import { StyleLobbyIssue, StyleLobbyIssueWrapper } from './lobby-issue-style';

export const LobbyIssueSection: React.FC = () => {
  const issues: Array<Issue> = [
    {
      title: 'Issue 542',
      priority: Priority.LOW,
      link: '',
      id: '1',
    },
    {
      title: 'Issue 5623',
      priority: Priority.HIGH,
      link: '',
      id: '2',
    },
    {
      title: 'Issue 533',
      priority: Priority.MIDDLE,
      link: '',
      id: '3',
    },
    {
      title: 'Issue 6623',
      priority: Priority.MIDDLE,
      link: '',
      id: '4',
    },
  ];

  return (
    <StyleLobbyIssue>
      <StyleLobbyTitle
        level={2}
        style={{
          fontSize: '24px',
          lineHeight: '30px',
          fontWeight: 'bold',
        }}>
        Issue:
      </StyleLobbyTitle>
      <StyleLobbyIssueWrapper gutter={[10, 15]}>
        {issues.map((issue) => (
          <IssueCard
            title={issue.title}
            priority={issue.priority}
            isGame={false}
            isCurrent={false}
            key={issue.id}
          />
        ))}
        <IssueButton />
      </StyleLobbyIssueWrapper>
    </StyleLobbyIssue>
  );
};
