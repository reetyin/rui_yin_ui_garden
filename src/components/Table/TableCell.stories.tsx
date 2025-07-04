import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/Table/TableCell',
  component: TableCell,
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  render: () => (
    <table>
      <tbody>
        <tr>
          <TableCell>Cell content</TableCell>
        </tr>
      </tbody>
    </table>
  ),
};
