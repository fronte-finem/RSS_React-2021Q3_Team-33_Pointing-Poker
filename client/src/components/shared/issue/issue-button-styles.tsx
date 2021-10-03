import styled, { css, DefaultTheme } from 'styled-components';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import {
  issueCardControlsStyle,
  issueCardInfoStyle,
  issueCardStyle,
} from '@client/components/shared/issue/issue-styles';
import { fontText } from '@client/themes/typography';

const selector = ({ theme }: { theme: DefaultTheme }) =>
  theme.issueCard.button.default;

const issueButtonCard = css`
  ${issueCardStyle};

  --icon-normal: ${(props) => selector(props).normal};
  --icon-hover: ${(props) => selector(props).hover};
  --icon-active: ${(props) => selector(props).active};
  --icon: var(--icon-normal);

  --title-font-size: 24px;
  --icon-font-size: 33px;

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

export const StyledIssueButtonCard = styled.button`
  ${issueButtonCard};
`;

export const StyledIssuesLoadInput = styled.input`
  display: none;
`;

export const StyledIssueButtonCardInfo = styled.div`
  ${issueCardInfoStyle};
`;

export const StyledIssueButtonCardControls = styled.div`
  ${issueCardControlsStyle};
`;

export const StyleIssueTitle = styled.div`
  ${fontText};
  font-weight: 200;
  font-size: var(--title-font-size);
`;

const styleIcon = css`
  color: var(--icon);
  font-size: var(--icon-font-size);
  transition: all 300ms;
`;

export const StyleAddIcon = styled(PlusOutlined)`
  ${styleIcon};
`;

export const StyledLoadIcon = styled(DownloadOutlined)`
  ${styleIcon};
`;
