import styled from 'styled-components';

export const TimerWrapper = styled.div`
  --timer-font-size: 64px;

  width: 180px;
  height: 70px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 10px;

  color: ${({ theme }) => theme.timer.fg};
  background-color: ${({ theme }) => theme.timer.bg};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 5px;

  font-size: var(--timer-font-size);
  line-height: var(--timer-font-size);
`;

export const StyledColon = styled.div``;

export const TimerSection = styled.div``;
