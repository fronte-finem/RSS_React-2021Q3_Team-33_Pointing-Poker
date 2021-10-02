import styled, { css, DefaultTheme } from 'styled-components';
import { Button as AntButton } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { Role } from '@shared/api-types/user';
import {
  fontSubtitle,
  fontTextSmall,
  fontTitle,
} from '@client/themes/typography';

type Props = { userRole: Role; userKicked: boolean; userDisconnected: boolean };
type Opts = Props & { theme: DefaultTheme };

const selector = ({ theme, userRole }: Opts) =>
  userRole === Role.DEALER ? theme.userCard.dealer : theme.userCard;

const getOpacity = ({ userDisconnected, userKicked }: Props): number => {
  if (userKicked) return 0.25;
  if (userDisconnected) return 0.5;
  return 1;
};

export const StyleCard = styled.div<Props>`
  --bg: ${(props) => selector(props).bg};
  --fg: ${(props) => selector(props).fg};

  --kicked-opacity: ${getOpacity};
  --kicked-mark: ${({ userKicked }) => (userKicked ? 'line-through' : 'unset')};

  position: relative;

  width: var(--user-card-width);
  height: var(--user-card-height, initial);

  display: grid;
  grid-template-columns: 70px 1fr auto;
  grid-template-areas: 'avatar body controls';

  border-radius: 4px;
  background: var(--bg);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  opacity: var(--kicked-opacity);

  ${fontSubtitle};
  line-height: 1em;
`;

export const StyledAvatarContainer = styled.div`
  grid-area: avatar;
  display: flex;
  justify-content: var(--user-card-avatar-align-h, center);
  align-items: var(--user-card-avatar-align-v, center);
`;
export const StyledBodyContainer = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  overflow: hidden;
  mask: linear-gradient(to left, #0000, #fff 10px);
`;
export const StyledControlContainer = styled.div`
  position: var(--user-card-controls-position, initial);
  top: 0;
  right: 0;
  grid-area: controls;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--user-card-controls-padding, 10px);
`;

export const StyleCardOwner = styled.div`
  ${fontTextSmall};
  font-weight: bold;
  font-size: var(--user-card-font-size-badge, 0.7em);
  line-height: var(--user-card-font-size-badge, 0.7em);
  text-transform: uppercase;
  color: ${({ theme }) => theme.userCard.owner};
`;

const textOverflow = css`
  overflow: hidden;
  white-space: var(--user-card-name-wrap, nowrap);
  text-overflow: ellipsis;
  mask: linear-gradient(to left, #fff0, #fff 10%);
`;

export const StyledUsername = styled.div`
  ${fontTitle};
  font-size: var(--user-card-font-size-name, 1.4em);
  line-height: var(--user-card-font-size-name, 1.4em);
  color: var(--fg);
  text-decoration: var(--kicked-mark);

  ${textOverflow};
`;

export const StyledJobPosition = styled.div`
  ${fontTextSmall};
  font-size: var(--user-card-font-size-badge, 0.7em);
  line-height: var(--user-card-font-size-badge, 1em);
  color: ${({ theme }) => theme.userCard.jobPosition};

  ${textOverflow};
`;

export const StyledButton = styled(AntButton)`
  --size: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: var(--size);
  width: var(--size);

  &,
  &:focus {
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
