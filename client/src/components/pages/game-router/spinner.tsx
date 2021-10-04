import { LoadingOutlined } from '@ant-design/icons';
import { StyledSpinner } from '@client/components/pages/game-router/spinner.styles';
import React from 'react';

export const Spinner = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: '25vw' }} spin />;
  return <StyledSpinner indicator={antIcon} tip="Loading..." />;
};
