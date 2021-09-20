import styled, { DefaultTheme } from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import {
  issueCardControlsStyle,
  issueCardInfoStyle,
  issueCardStyle,
} from '@client/components/shared/issue/issue-styles';

const selector = ({ theme }: { theme: DefaultTheme }) =>
  theme.issueCard.button.default;

export const StyledIssueButtonCard = styled.button`
  ${issueCardStyle};

  --icon-normal: ${(props) => selector(props).normal};
  --icon-hover: ${(props) => selector(props).hover};
  --icon-active: ${(props) => selector(props).active};
  --icon: var(--icon-normal);

  padding: 0;
  color: var(--icon);
  transition: all 300ms;
  cursor: pointer;

  &,
  &:focus {
    --icon: var(--icon-normal);
  }
  &:hover {
    --icon: var(--icon-hover);
  }
  &:active {
    --icon: var(--icon-active);
  }
`;

export const StyledIssueButtonCardInfo = styled.div`
  ${issueCardInfoStyle};
`;

export const StyledIssueButtonCardControls = styled.div`
  ${issueCardControlsStyle};
`;

export const StyleIssueTitle = styled.div`
  font-family: var(--font-roboto);
  font-weight: 200;
  font-size: 24px;
`;

export const StyleAddIcon = styled(PlusOutlined)`
  font-size: 33px;
  transition: all 300ms;
  color: var(--icon);
`;
