import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter', () => {
  it('renders footer content', () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Footer content</td>
          </tr>
        </TableFooter>
      </table>
    );
    expect(screen.getByText('Footer content')).toBeVisible();
  });
});
