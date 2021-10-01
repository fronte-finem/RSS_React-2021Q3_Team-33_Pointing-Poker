import { shadowMain } from '@client/themes/shadows';
import { css } from 'styled-components';

export const issueCardStyle = css`
  --fg: ${({ theme }) => theme.issueCard.fg};
  --bg: ${({ theme }) => theme.issueCard.bg};

  width: var(--issue-card-width);

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  background: var(--bg);
  color: var(--fg);
  ${shadowMain};
  border: none;
  border-radius: 4px;
`;

export const issueCardInfoStyle = css`
  position: relative;
  padding: 20px;
  overflow: hidden;
`;

export const issueCardControlsStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
`;
