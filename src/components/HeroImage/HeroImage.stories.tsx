import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof HeroImage>;

const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/1200x400',
  alt: 'Hero Image',
  height: '400px',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
