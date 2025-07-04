import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage component', () => {
  test('renders hero image', () => {
    render(<HeroImage src="hero.jpg" alt="Hero" />);
    const img = screen.getByAltText('Hero');
    expect(img).toBeVisible();
  });

  test('disabled state applies styles', () => {
    render(<HeroImage src="hero.jpg" alt="Hero" disabled />);
    const img = screen.getByAltText('Hero');
    expect(img).toHaveStyle('opacity: 0.5');
    expect(img).toHaveStyle('cursor: not-allowed');
  });
});
