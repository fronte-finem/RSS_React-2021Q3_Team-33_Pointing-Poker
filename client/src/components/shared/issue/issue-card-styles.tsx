import styled, { DefaultTheme } from 'styled-components';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button as AntButton } from 'antd';
import {
  issueCardControlsStyle,
  issueCardInfoStyle,
  issueCardStyle,
} from '@client/components/shared/issue/styles';

type Props = { isCurrent: boolean };
type Opts = Props & { theme: DefaultTheme };

const selector = ({ theme, isCurrent }: Opts) =>
  isCurrent ? theme.issueCard.current : theme.issueCard;

export const StyleIssueCard = styled.div<Props>`
  ${issueCardStyle};
  --fg: ${(props) => selector(props).fg};
  --bg: ${(props) => selector(props).bg};
`;

export const StyledIssueCardInfo = styled.div`
  ${issueCardInfoStyle};
`;

export const StyledIssueCardControls = styled.div`
  ${issueCardControlsStyle};
`;

export const StyledIssueTitle = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: var(--fg);
`;

export const StyledMark = styled.div`
  position: absolute;
  top: 5px;
  left: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const StyledIssuePriority = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
`;

const StyledButton = styled(AntButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const StyledDefaultButton = styled(StyledButton)`
  &,
  &:focus {
    color: ${({ theme }) => theme.issueCard.button.default.normal};
  }
  &:hover {
    color: ${({ theme }) => theme.issueCard.button.default.hover};
  }
  &:active {
    color: ${({ theme }) => theme.issueCard.button.default.active};
  }
`;

export const StyledDangerButton = styled(StyledButton)`
  &,
  &:focus {
    color: ${({ theme }) => theme.issueCard.button.danger.normal};
  }
  &:hover {
    color: ${({ theme }) => theme.issueCard.button.danger.hover};
  }
  &:active {
    color: ${({ theme }) => theme.issueCard.button.danger.active};
  }
`;

export const StyledCancelIcon = styled(PlusOutlined)`
  font-size: 56px;
`;

export const StyledEditIcon = styled(EditOutlined)`
  font-size: 42px;
`;

export const StyledDeleteIcon = styled(DeleteOutlined)`
  font-size: 39px;
`;
