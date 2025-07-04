// src/components/Table/TableHeader.tsx
import React from 'react';
import styled from 'styled-components';

interface TableHeaderProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledThead = styled.thead<{ disabled?: boolean }>`
  background-color: #f0f0f0;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
  return <StyledThead disabled={disabled}>{children}</StyledThead>;
};
