import React from 'react';
import { LinkProps } from 'antd/lib/typography/Link';
import { StyledLink } from '@client/components/shared/link/link.styles';

// type Props = React.ForwardRefExoticComponent<
//   LinkProps & React.RefAttributes<HTMLElement>
// >;

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};
