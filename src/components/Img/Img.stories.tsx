import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder image',
  width: '150px',
  height: '150px',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
