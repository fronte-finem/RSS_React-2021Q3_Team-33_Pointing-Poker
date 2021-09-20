import React from 'react';
import { LayoutProps } from 'antd';
import { StyledLayout } from '@client/components/app/layout/layout.style';

export const Layout: React.FC<LayoutProps> = ({
  children,
  ...antdLayoutProps
}) => {
  return <StyledLayout {...antdLayoutProps}>{children}</StyledLayout>;
};
