import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'UI/Table/TableRow',
  component: TableRow,
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  render: () => (
    <table>
      <tbody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
};
