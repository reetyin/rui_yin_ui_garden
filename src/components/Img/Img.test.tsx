import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img component', () => {
  test('renders image with alt text', () => {
    render(<Img src="test.jpg" alt="Test image" />);
    const img = screen.getByAltText('Test image');
    expect(img).toBeVisible();
  });

  test('disabled state applies styles', () => {
    render(<Img src="test.jpg" alt="Test image" disabled />);
    const img = screen.getByAltText('Test image');
    expect(img).toHaveStyle('opacity: 0.5');
    expect(img).toHaveStyle('cursor: not-allowed');
  });
});
