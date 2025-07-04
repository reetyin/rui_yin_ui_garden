import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  color: ${({ color, disabled }) => (disabled ? 'gray' : color || 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  font-size: 14px;
`;

export const Label: React.FC<LabelProps> = ({ text, color, disabled }) => {
  return <StyledLabel color={color} disabled={disabled}>{text}</StyledLabel>;
};
