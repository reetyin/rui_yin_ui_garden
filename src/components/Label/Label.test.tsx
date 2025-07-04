import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label component', () => {
  test('renders label text', () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText('Test Label')).toBeVisible();
  });

  test('renders disabled state with correct style', () => {
    render(<Label text="Disabled" disabled />);
    const label = screen.getByText('Disabled');
    expect(label).toHaveStyle('opacity: 0.5');
    expect(label).toHaveStyle('cursor: not-allowed');
  });
});
