import React from 'react';
import styled from 'styled-components';
export interface TableFooterProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledTfoot = styled.tfoot<{ disabled?: boolean }>`
  background-color: #f9f9f9;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => {
  return <StyledTfoot disabled={disabled}>{children}</StyledTfoot>;
};
