// src/components/Button/Button.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button Component', () => {
  it('should be visible with provided label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should have disabled styles when disabled', () => {
    render(<Button label="Disabled Button" disabled $backgroundColor="#007bff" />);
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toHaveStyleRule('opacity', '0.5');
    expect(buttonElement).toHaveStyleRule('cursor', 'not-allowed');
  });
});
