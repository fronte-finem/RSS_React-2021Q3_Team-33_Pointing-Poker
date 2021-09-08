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

  const onChange = (file: { file: { name: React.SetStateAction<string> } }) =>
    setPlaceholder(file.file.name);

  return (
    <StyledUpload showUploadList={false} {...props} onChange={onChange}>
      <Input
        value={placeholder}
        style={{ textAlign: 'center', cursor: 'pointer', width: '275px' }}
      />
      <Button>Button</Button>
    </StyledUpload>
  );
};
