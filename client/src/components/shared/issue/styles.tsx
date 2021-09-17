import { css } from 'styled-components';

export const issueCardStyle = css`
  --fg: ${({ theme }) => theme.issueCard.fg};
  --bg: ${({ theme }) => theme.issueCard.bg};

  width: 100%;
  max-width: 500px;
  min-width: 380px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  background: var(--bg);
  color: var(--fg);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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
  gap: 20px;
  padding: 20px;
`;