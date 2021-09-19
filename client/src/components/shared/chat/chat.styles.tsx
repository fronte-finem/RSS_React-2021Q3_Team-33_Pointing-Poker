import styled, { DefaultTheme } from 'styled-components';
import { Role } from '@shared/api-types/user';

type Props = { userRole: Role };
type Opts = Props & { theme: DefaultTheme };

const selector = ({ theme, userRole }: Opts) =>
  userRole === Role.DEALER ? theme.userCard.dealer : theme.userCard;

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 5px;
`;

export const StyledMessageWrapper = styled.div<Props>`
  --bg: ${(props) => selector(props).bg};
  --fg: ${(props) => selector(props).fg};

  flex: 1 1 300px;

  color: var(--fg);
  background: var(--bg);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 20px 0 20px;

  font-family: var(--font-roboto);
`;

export const StyledMessage = styled.div`
  padding: 10px 20px;

  font-weight: 300;
  font-size: 28px;
  line-height: 30px;
  text-align: left;

  word-break: break-all;
`;

export const StyledDateTime = styled.time`
  display: block;
  padding: 5px 20px;

  color: ${({ theme }) => theme.chat.message.dateTime};

  font-size: 14px;
  font-style: italic;
  text-align: right;
`;
