import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.img<HeroImageProps>`
  width: 100%;
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || '400px')};
  object-fit: cover;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, height, disabled }) => {
  return <StyledHero src={src} alt={alt} height={height} disabled={disabled} />;
};
