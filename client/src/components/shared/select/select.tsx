import React from 'react';
import { Select as AntSelect } from 'antd';
import styled from 'styled-components';

const StyledSelect = styled(AntSelect)`
  width: 267px;
  font-size: 24px;
  text-align: left;
`;

export const Select: React.FC<any> = (props) => {
  const { options } = props;

  return (
    <StyledSelect defaultValue={options[0].value} {...props}>
      {options.map((option: { value: string; label: string }) => (
        <StyledSelect.Option value={option.value} key={option.value}>
          {option.label}
        </StyledSelect.Option>
      ))}
    </StyledSelect>
  );
};
