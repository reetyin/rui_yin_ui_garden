import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is some text content',
  color: '#000000',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled text',
  disabled: true,
};
