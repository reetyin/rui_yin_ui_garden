import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text component', () => {
  test('renders text content', () => {
    render(<Text content="Test Text" />);
    expect(screen.getByText('Test Text')).toBeVisible();
  });

  test('renders disabled state correctly', () => {
    render(<Text content="Disabled" disabled />);
    const element = screen.getByText('Disabled');
    expect(element).toHaveStyle('opacity: 0.5');
    expect(element).toHaveStyle('cursor: not-allowed');
  });
});
