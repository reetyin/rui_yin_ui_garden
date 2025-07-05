import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  
  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};
