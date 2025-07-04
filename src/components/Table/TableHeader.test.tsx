import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  it('renders inside a table', () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Header</th>
          </tr>
        </TableHeader>
      </table>
    );
    expect(screen.getByText('Header')).toBeVisible();
  });

  it('disables style when disabled', () => {
    render(
      <table>
        <TableHeader disabled>
          <tr>
            <th>Header</th>
          </tr>
        </TableHeader>
      </table>
    );
     const thead = screen.getByRole('rowgroup'); // thead 的 role 就是 rowgroup
    expect(thead).toHaveStyle('cursor: not-allowed');
  });
});
