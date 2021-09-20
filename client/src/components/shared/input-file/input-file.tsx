import React, { useState } from 'react';
import { UploadProps } from 'antd';
import { Button } from '@client/components/shared/button/button';
import {
  StyledInput,
  StyledUpload,
} from '@client/components/shared/input-file/input-file.styles';
import { UploadFile } from 'antd/lib/upload/interface';

type Props = UploadProps & { onLoad: (file: UploadFile | null) => void };

export const InputFile: React.FC<Props> = ({ onLoad, ...props }) => {
  const [placeholder, setPlaceholder] = useState('Choose file...');

  const handleUpload = (file: UploadFile) => {
    setPlaceholder(file.name);
    onLoad(file);
    return false;
  };

  return (
    <StyledUpload beforeUpload={handleUpload} showUploadList={false} {...props}>
      <StyledInput value={placeholder} />
      <Button>select</Button>
    </StyledUpload>
  );
};
