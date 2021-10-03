import { IssueBase } from '@shared/api-types/issue';
import { loadFile } from '@client/utils/file';
import { filterIssues } from '@shared/api-validation/issue';

export const parseFileToIssue = async (file: File): Promise<IssueBase[]> => {
  const data = await loadFile(file);
  if (data.length === 0) return [];
  try {
    const XLSX = await import('xlsx');
    const workbook = XLSX.read(data, { type: 'array' });
    if (workbook.SheetNames.length === 0) return [];
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const issues = XLSX.utils.sheet_to_json<IssueBase>(sheet);
    return filterIssues(issues);
  } catch (error) {
    console.log(error);
    return [];
  }
};
