import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTr = styled.tr<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const TableRow: React.FC<TableProps> = ({ children, disabled }) => {
  return <StyledTr disabled={disabled}>{children}</StyledTr>;
};
