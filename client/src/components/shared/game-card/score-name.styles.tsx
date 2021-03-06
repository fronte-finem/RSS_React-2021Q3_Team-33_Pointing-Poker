import styled from 'styled-components';

export const StyledScoreName = styled.div<{ top: boolean }>`
  --offset-h: var(--game-card-score-name-offset-h, 15px);
  --offset-v: var(--game-card-score-name-offset-v, 5px);

  width: 75%;
  position: absolute;

  top: ${({ top }) => (top ? 'var(--offset-v)' : 'unset')};
  left: ${({ top }) => (top ? 'var(--offset-h)' : 'unset')};
  bottom: ${({ top }) => (top ? 'unset' : 'var(--offset-v)')};
  right: ${({ top }) => (top ? 'unset' : 'var(--offset-h)')};

  transform: ${({ top }) => (top ? 'unset' : 'rotate(180deg)')};

  font-size: var(--game-card-score-name-font-size, 16px);
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
`;
