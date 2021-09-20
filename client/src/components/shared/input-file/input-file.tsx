import React, { useState } from 'react';
import { UploadProps } from 'antd';
import { Button } from '@client/components/shared/button/button';
import {
  StyledInput,
  StyledUpload,
} from '@client/components/shared/input-file/input-file.styles';

export const InputFile: React.FC<UploadProps> = (props) => {
  const [placeholder, setPlaceholder] = useState('File chooser');

  const onChange = (file: { file: { name: React.SetStateAction<string> } }) =>
    setPlaceholder(file.file.name);

  // const customRequest = (file: any) => setPlaceholder(file.file.name);

  return (
    <StyledUpload showUploadList={false} {...props} onChange={onChange}>
      <StyledInput value={placeholder} />
      <Button>Button</Button>
    </StyledUpload>
  );
};
