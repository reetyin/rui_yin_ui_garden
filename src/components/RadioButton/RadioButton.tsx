import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Label = styled.label<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Input = styled.input`
  margin-right: 8px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <Label disabled={disabled}>
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
        aria-label={label}
      />
      {label}
    </Label>
  );
};
