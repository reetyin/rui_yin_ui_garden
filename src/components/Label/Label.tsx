import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color?: string; disabled?: boolean }>`
  color: ${({ color, disabled }) => (disabled ? 'gray' : color || 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 14px;
  
  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Label: React.FC<LabelProps> = ({ text, color, disabled }) => {
  return <StyledLabel color={color} disabled={disabled}>{text}</StyledLabel>;
};
