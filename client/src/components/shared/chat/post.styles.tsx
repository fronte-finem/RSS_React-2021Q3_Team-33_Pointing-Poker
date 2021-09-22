import styled, { DefaultTheme } from 'styled-components';
import { Role } from '@shared/api-types/user';

type Props = { userRole: Role; userKicked?: boolean };
type Opts = Props & { theme: DefaultTheme };

const selector = ({ theme, userRole }: Opts) =>
  userRole === Role.DEALER ? theme.userCard.dealer : theme.userCard;

export const StyledPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 5px;
`;

export const StyledSystemPost = styled(StyledPost)`
  align-self: center;
`;

export const StyledMessageWrapper = styled.div<Props>`
  --bg: ${(props) => selector(props).bg};
  --fg: ${(props) => selector(props).fg};

  --kicked-opacity: ${({ userKicked }) => (userKicked ? 0.25 : 1)};

  flex: 1 1 300px;

  color: var(--fg);
  background: var(--bg);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 20px 0 20px;

  font-family: var(--font-roboto);

  opacity: var(--kicked-opacity);
`;

export const StyledSystemMessageWrapper = styled(StyledMessageWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  border-radius: 20px;
  filter: hue-rotate(180deg);
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
