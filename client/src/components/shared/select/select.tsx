import React from 'react';
import {
  StyledSelect,
  StyledOption,
} from '@client/components/shared/select/select.styles';
import { SelectProps, SelectValue } from 'antd/lib/select';

export interface IOption {
  value: string;
  label: string;
}

type Props = { options: IOption[] } & SelectProps<SelectValue>;

export const Select: React.FC<Props> = ({ options, ...props }) => {
  return (
    <StyledSelect defaultValue={options[0].value} {...props}>
      {options.map((option: IOption) => (
        <StyledOption value={option.value} key={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
