import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'UI/Table/TableFooter',
  component: TableFooter,
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  render: () => (
    <table>
      <TableFooter>
        <tr>
          <td colSpan={2}>Footer content</td>
        </tr>
      </TableFooter>
    </table>
  ),
};
