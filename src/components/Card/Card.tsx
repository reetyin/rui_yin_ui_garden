// src/components/Card/Card.tsx
import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s;
  user-select: none;

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? 'none' : '0 4px 12px rgba(0,0,0,0.2)')};
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.25rem;
`;

const Description = styled.p`
  margin: 0;
  color: #555;
  font-size: 1rem;
`;

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, disabled, onClick }) => {
  return (
    <CardContainer disabled={disabled} onClick={disabled ? undefined : onClick}>
      {imageUrl && <Image src={imageUrl} alt={title} />}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </CardContainer>
  );
};
