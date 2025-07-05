import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.img<HeroImageProps>`
  width: 100%;
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || '400px')};
  object-fit: cover;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  
  /* Responsive design */
  @media (max-width: 768px) {
    height: ${({ height }) => (typeof height === 'number' ? `${height * 0.8}px` : '320px')};
  }
  
  @media (max-width: 480px) {
    height: ${({ height }) => (typeof height === 'number' ? `${height * 0.6}px` : '240px')};
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, height, disabled }) => {
  return <StyledHero src={src} alt={alt} height={height} disabled={disabled} />;
};
