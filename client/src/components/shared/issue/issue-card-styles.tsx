import styled, { DefaultTheme } from 'styled-components';
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button as AntButton } from 'antd';
import {
  issueCardControlsStyle,
  issueCardInfoStyle,
  issueCardStyle,
} from '@client/components/shared/issue/issue-styles';

type Props = {
  isCurrent?: boolean;
  isSelected?: boolean;
  isHaveStats?: boolean;
  isGameMode?: boolean;
};
type Opts = Props & { theme: DefaultTheme };

const selector = ({ theme, isCurrent }: Opts) =>
  isCurrent ? theme.issueCard.current : theme.issueCard;

export const StyleIssueCard = styled.div<Props>`
  ${issueCardStyle};
  --fg: ${(props) => selector(props).fg};
  --bg: ${(props) => selector(props).bg};

  cursor: ${({ isGameMode }) => (isGameMode ? 'pointer' : 'default')};
  outline: ${({ isHaveStats }) => (isHaveStats ? '3px solid #f80' : 'unset')};
`;

export const StyledIssueCardInfo = styled.div`
  ${issueCardInfoStyle};
`;

export const StyledIssueCardControls = styled.div`
  ${issueCardControlsStyle};
`;

export const StyledIssueTitle = styled.div`
  font-weight: 200;
  font-size: 28px;
  line-height: 30px;
  color: var(--fg);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  mask: linear-gradient(to left, #fff0, #fff 20%);
`;

export const StyledMark = styled.div`
  position: absolute;
  top: 5px;
  left: 20px;
  font-family: var(--font-ruda);
  font-weight: lighter;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const StyledIssuePriority = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
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
  font-size: 33px;
`;

export const StyledEditIcon = styled(EditOutlined)`
  font-size: 25px;
`;

export const StyledDeleteIcon = styled(DeleteOutlined)`
  font-size: 23px;
`;

export const StyledCheckIcon = styled(CheckCircleOutlined)`
  font-size: 24px;
  margin-right: 10px;
`;
