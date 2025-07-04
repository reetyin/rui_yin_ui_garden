import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  it('renders cell content', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell content</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText('Cell content')).toBeVisible();
  });
});
