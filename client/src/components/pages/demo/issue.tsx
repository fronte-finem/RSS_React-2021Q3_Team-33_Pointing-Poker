import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import {
  IssueCard,
  IssueProps,
} from '@client/components/shared/issue/issue-card';
import { IssueButton } from '@client/components/shared/issue/issue-button';

const testData: IssueProps[] = [
  { title: 'Issue 123', priority: 'high', isGame: true, isCurrent: true },
  { title: 'Issue 234', priority: 'low', isGame: true, isCurrent: false },
  { title: 'Issue 324', priority: 'middle', isGame: false, isCurrent: true },
  { title: 'Issue 23', priority: 'high', isGame: false, isCurrent: false },
  { title: 'Issue 343', priority: 'low', isGame: true, isCurrent: false },
  { title: 'Issue 32', priority: 'middle', isGame: true, isCurrent: true },
  { title: 'Issue 321', priority: 'high', isGame: true, isCurrent: true },
  { title: 'Issue 13', priority: 'low', isGame: false, isCurrent: false },
];

export const PageIssueDemo: React.FC = () => {
  return (
    <DemoGrid>
      {testData.map((data) => (
        <div key={data.title + data.priority}>
          <IssueCard {...data} />
        </div>
      ))}
      <IssueButton />
    </DemoGrid>
  );
};
