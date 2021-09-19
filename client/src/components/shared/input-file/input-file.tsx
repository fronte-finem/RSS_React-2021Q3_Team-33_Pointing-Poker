import React, { useState } from 'react';
import { Upload as AntUpload, UploadProps } from 'antd';
import styled from 'styled-components';
import { Input } from '../input/input';
import { Button } from '../button/button';

const StyledUpload = styled(AntUpload)`
  .ant-upload {
    display: flex;
  }
`;

export const InputFile: React.FC<UploadProps> = (props) => {
  const [placeholder, setPlaceholder] = useState('File chooser');

  const customRequest = (file: any) => setPlaceholder(file.file.name);

  return (
    <StyledUpload
      showUploadList={false}
      {...props}
      customRequest={customRequest}>
      <Input
        value={placeholder}
        style={{ textAlign: 'center', cursor: 'pointer', width: '275px' }}
      />
      <Button>Button</Button>
    </StyledUpload>
  );
};
