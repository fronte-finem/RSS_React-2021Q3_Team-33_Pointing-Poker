import * as fs from 'fs';
import path from 'path';
import { parseFileToIssue } from '@client/utils/issue-parse';

const dataFilePath = path.resolve(__dirname, '..', 'data', 'issues.csv');

const issues = [
  {
    link: 'aaa',
    priority: 'high',
    title: 'abc',
  },
  {
    link: 'xxx',
    priority: 'middle',
    title: 'xyz',
  },
  {
    priority: 'low',
    title: '123',
  },
];

describe('Test file to array of issues', () => {
  it('parse', async () => {
    const buffer = fs.readFileSync(dataFilePath);
    const blob = new Blob([buffer], { type: 'text/csv' });
    const data = await parseFileToIssue(blob as File);
    expect(data).toEqual(issues);
  });
});
