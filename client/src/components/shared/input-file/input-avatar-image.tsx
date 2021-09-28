import { message, UploadProps } from 'antd';
import React, { useState } from 'react';
import { UploadFile } from 'antd/lib/upload/interface';
import { getCroppedBase64 } from '@client/utils/file';
import {
  StyledInput,
  StyledUpload,
} from '@client/components/shared/input-file/input-file.styles';
import { StyledButtonInput } from '@client/components/pages/main-page/components/entry-controls.styles';

type Props = UploadProps & { onLoad: (base64?: string | null) => void };

export const InputAvatarImage: React.FC<Props> = ({ onLoad, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('Choose file...');

  const handleUpload = async (file: UploadFile) => {
    if (!file.type?.startsWith('image/')) {
      message.error('You can only upload image file!');
      return false;
    }
    setIsLoading(true);
    const base64 = await getCroppedBase64(file as unknown as Blob);
    setIsLoading(false);
    setPlaceholder(file.name);
    onLoad(base64);
    console.log(base64?.length);
    return false;
  };

  return (
    <StyledUpload
      accept="image/*"
      beforeUpload={handleUpload}
      showUploadList={false}
      {...props}>
      <StyledInput value={placeholder} />
      <StyledButtonInput loading={isLoading}>select</StyledButtonInput>
    </StyledUpload>
  );
};
