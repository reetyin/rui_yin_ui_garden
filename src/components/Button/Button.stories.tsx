// src/components/Button/Button.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Button>;

import type { StoryFn } from '@storybook/react';

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  $backgroundColor: '#007bff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  $backgroundColor: '#cccccc',
  disabled: true,
};
