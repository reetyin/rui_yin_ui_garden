// src/components/Button/Button.tsx
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

// 为 styled-components 创建一个独立的类型，只包含样式相关的属性
interface StyledButtonProps {
  disabled?: boolean;
  $backgroundColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $backgroundColor, disabled }) =>
      !disabled && $backgroundColor ? darkenColor($backgroundColor, 20) : $backgroundColor};
  }
`;

function darkenColor(color: string, percent: number) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 0 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}

export const Button: React.FC<ButtonProps> = ({ label, disabled, $backgroundColor, onClick }) => {
  return (
    <StyledButton disabled={disabled} $backgroundColor={$backgroundColor} onClick={onClick}>
      {label}
    </StyledButton>
  );
};