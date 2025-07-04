import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTd = styled.td<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  padding: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const TableCell: React.FC<TableCellProps> = ({ children, disabled }) => {
  return <StyledTd disabled={disabled}>{children}</StyledTd>;
};
