import React from 'react';
import { Button, Upload as AntUpload, UploadProps } from 'antd';
import styled from 'styled-components';

const StyledUpload = styled(AntUpload)``;

export const InputFile: React.FC<UploadProps> = (props) => {
  return (
    <StyledUpload showUploadList={false} {...props}>
      <Button>Click to Upload</Button>
    </StyledUpload>
  );
};
