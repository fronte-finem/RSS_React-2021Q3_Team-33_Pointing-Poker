import React from 'react';
import { Select as AntSelect } from 'antd';
import styled from 'styled-components';

const StyledSelect = styled(AntSelect)`
  width: 267px;
  font-size: 24px;
  text-align: left;
`;

interface IOption {
  value: string;
  label: string;
}

export const Select: React.FC<{ options: IOption[] }> = (props) => {
  const { options } = props;

  return (
    <StyledSelect defaultValue={options[0].value} {...props}>
      {options.map((option: IOption) => (
        <StyledSelect.Option value={option.value} key={option.value}>
          {option.label}
        </StyledSelect.Option>
      ))}
    </StyledSelect>
  );
};
