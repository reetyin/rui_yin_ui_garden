import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  it('renders row content', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Row Cell</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText('Row Cell')).toBeVisible();
  });
});
