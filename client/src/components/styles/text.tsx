import styled from 'styled-components';
import { Typography } from 'antd';
import { fontTextSmall, secondaryFont } from '@client/themes/typography';

export const StyledTitle = styled(Typography.Title)`
  ${secondaryFont};
  text-align: center;

  && {
    margin: 0;
    color: ${({ theme }) => theme.fg};
  }
`;

export const StyledSubtitle = styled.div`
  ${fontTextSmall};
  color: ${({ theme }) => theme.fg};
`;
