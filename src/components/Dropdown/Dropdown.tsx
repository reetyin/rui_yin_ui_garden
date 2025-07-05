import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: 1px solid #ccc;
  border-radius: 4px;
  
  /* Responsive design */
  @media (max-width: 768px) {
    padding: 6px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 4px;
    font-size: 14px;
    width: 100%;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, selected, disabled, onChange }) => {
  return (
    <StyledSelect
      disabled={disabled}
      value={selected}
      onChange={(e) => onChange && onChange((e.target as HTMLSelectElement).value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};
