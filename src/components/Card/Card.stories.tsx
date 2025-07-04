// src/components/Card/Card.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a description of the card.',
  imageUrl: 'https://via.placeholder.com/300x180.png?text=Card+Image',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  description: 'This card is disabled and not clickable.',
  imageUrl: 'https://via.placeholder.com/300x180.png?text=Disabled',
  disabled: true,
};
