import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import { TableCell } from './TableCell';

describe('Table', () => {
  it('renders table content', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <TableCell>Cell content</TableCell>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText('Cell content')).toBeVisible();
  });

  it('applies disabled styles when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toHaveStyle('opacity: 0.5');
    expect(table).toHaveStyle('cursor: not-allowed');
  });
});
