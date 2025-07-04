import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a label',
  color: '#000000',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled label',
  disabled: true,
};
