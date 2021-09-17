import styled, { DefaultTheme } from 'styled-components';
import { Role } from '@shared/api-types/user';

type Props = { theme: DefaultTheme; role: Role };

const selector = ({ theme, role }: Props) =>
  role === Role.DEALER ? theme.userCard.dealer : theme.userCard;

export const StyledChat = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  row-gap: 2em;

  max-width: 1140px;
  width: 100%;
`;

export const StyledMessageWrapper = styled.div<{ role: Role }>`
  --bg: ${(props) => selector(props).bg};
  --fg: ${(props) => selector(props).fg};

  max-width: 640px;
  width: 100%;

  color: var(--fg);
  background: var(--bg);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0 0 20px;

  font-family: 'Roboto', sans-serif;
`;

export const StyledMessage = styled.div`
  padding: 10px 20px;

  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
`;

export const StyledDateTime = styled.time`
  display: block;
  padding: 5px 20px;

  color: ${({ theme }) => theme.chat.message.dateTime};

  font-size: 20px;
  font-style: italic;
  text-align: right;
`;
