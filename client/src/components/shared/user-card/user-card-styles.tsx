import styled, { DefaultTheme } from 'styled-components';
import { StopOutlined } from '@ant-design/icons';
import { Role } from '@shared/api-types/user';

type Props = { theme: DefaultTheme; role: Role };

const selector = ({ theme, role }: Props) =>
  role === Role.DEALER ? theme.userCard.dealer : theme.userCard;

export const StyleCard = styled.div<{ role: Role }>`
  --bg: ${(props) => selector(props).bg};
  --fg: ${(props) => selector(props).fg};

  max-width: 500px;
  min-width: 350px;
  width: 100%;

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
  padding: 10px;
  overflow: hidden;
`;
export const StyledControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyleCardOwner = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.userCard.owner};
`;

export const StyledUsername = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 3em;
  line-height: 56px;
  color: var(--fg);
`;

export const StyledJobPosition = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 12px;
  color: ${({ theme }) => theme.userCard.jobPosition};
`;

export const StyleStopOutlined = styled(StopOutlined)`
  font-size: 47px;
  cursor: pointer;
  transition: all 300ms;

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
