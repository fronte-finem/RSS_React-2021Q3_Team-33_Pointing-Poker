import styled, { DefaultTheme } from 'styled-components';
import { StopOutlined } from '@ant-design/icons';
import { Role } from '@shared/api-types/user';
import { Button as AntButton } from 'antd';
import { fontTextSmall, fontTitle } from '@client/themes/typography';

type Props = { userRole: Role };
type Opts = Props & { theme: DefaultTheme };

const selector = ({ theme, userRole }: Opts) =>
  userRole === Role.DEALER ? theme.userCard.dealer : theme.userCard;

export const StyleCard = styled.div<Props>`
  --bg: ${(props) => selector(props).bg};
  --fg: ${(props) => selector(props).fg};

  width: var(--user-card-width);

  display: grid;
  grid-template-columns: auto 1fr auto;

  border-radius: 4px;
  background: var(--bg);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 10px;
  overflow: hidden;
  mask: linear-gradient(to left, #0000, #fff 10px);
`;
export const StyledControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyleCardOwner = styled.div`
  ${fontTextSmall};
  text-transform: uppercase;
  color: ${({ theme }) => theme.userCard.owner};
`;

export const StyledUsername = styled.div`
  ${fontTitle}
  color: var(--fg);
`;

export const StyledJobPosition = styled.div`
  ${fontTextSmall}
  color: ${({ theme }) => theme.userCard.jobPosition};
`;

export const StyledButton = styled(AntButton)`
  --size: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: var(--size);
  width: var(--size);

  & {
    color: ${({ theme }) => theme.userCard.deleteBtn.normal};
  }
  &:hover {
    color: ${({ theme }) => theme.userCard.deleteBtn.hover};
  }
  &:active {
    color: ${({ theme }) => theme.userCard.deleteBtn.active};
  }
`;

export const StyleStopOutlined = styled(StopOutlined)`
  font-size: var(--size);
`;
