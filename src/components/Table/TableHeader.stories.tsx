import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  render: () => (
    <table>
      <TableHeader>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </TableHeader>
    </table>
  ),
};
