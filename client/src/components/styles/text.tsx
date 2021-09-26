import styled from 'styled-components';
import { Typography } from 'antd';

export const StyledTitle = styled(Typography.Title)`
  margin: 0 !important;
  font-family: var(--font-ruda);
  text-align: center;

  && {
    color: ${({ theme }) => theme.fg};
  }
`;

export const StyledSubtitle = styled.div`
  font-family: var(--font-ruda);
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.fg};
`;
