import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || 'auto')};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  max-width: 100%;
  height: auto;
  
  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};
