import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>30</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane</TableCell>
          <TableCell>28</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <tr>
          <td colSpan={2}>Footer Content</td>
        </tr>
      </TableFooter>
    </Table>
  ),
};
