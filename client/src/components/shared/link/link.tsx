import React from 'react';
import { LinkProps } from 'antd/lib/typography/Link';
import { StyledLink } from '@client/components/shared/link/link.styles';

export const Link = React.forwardRef<HTMLElement, LinkProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledLink {...props} ref={ref}>
        {children}
      </StyledLink>
    );
  }
);
