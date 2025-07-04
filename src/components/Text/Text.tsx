import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  color: ${({ color, disabled }) => (disabled ? 'gray' : color || 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 16px;
`;

export const Text: React.FC<TextProps> = ({ content, color, disabled }) => {
  return <StyledText color={color} disabled={disabled}>{content}</StyledText>;
};
