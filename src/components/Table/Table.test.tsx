import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  it('renders cell content', () => {
    render(<TableCell>Cell content</TableCell>);
    expect(screen.getByText('Cell content')).toBeVisible();
  });
});
