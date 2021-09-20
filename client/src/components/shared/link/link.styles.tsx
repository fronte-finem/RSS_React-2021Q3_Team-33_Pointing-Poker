import styled from 'styled-components';
import { Typography } from 'antd';

export const StyledLink = styled(Typography.Link)`
  && {
    color: ${({ theme }) => theme.link.normal};
  }
  &&:focus,
  &&:hover {
    color: ${({ theme }) => theme.link.hover};
  }
  &&:active {
    color: ${({ theme }) => theme.link.active};
  }
`;
