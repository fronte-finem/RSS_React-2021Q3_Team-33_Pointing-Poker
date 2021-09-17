import React from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { StyledFormItem } from '@client/components/shared/form-item/form-item.styles';

export const FormItem: React.FC<FormItemProps> = ({ children, ...props }) => {
  return (
    <StyledFormItem labelCol={{ span: 24 }} {...props}>
      {children}
    </StyledFormItem>
  );
};
