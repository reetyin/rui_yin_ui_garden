import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ color?: string; disabled?: boolean }>`
  color: ${({ color, disabled }) => (disabled ? 'gray' : color || 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 16px;
  
  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Text: React.FC<TextProps> = ({ content, color, disabled }) => {
  return <StyledText color={color} disabled={disabled}>{content}</StyledText>;
};
