import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<DropdownProps>`
  padding: 8px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, selected, disabled, onChange }) => {
  return (
    <StyledSelect
      disabled={disabled}
      value={selected}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};
