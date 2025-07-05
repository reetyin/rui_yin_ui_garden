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
  
  /* Responsive design */
  @media (max-width: 768px) {
    max-width: 250px;
    padding: 12px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 8px;
    margin: 4px 0;
  }

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? 'none' : '0 4px 12px rgba(0,0,0,0.2)')};
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
  
  /* Responsive design */
  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.25rem;
  
  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;

const Description = styled.p`
  margin: 0;
  color: #555;
  font-size: 1rem;
  
  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
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
