import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@/components/Button/index';


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args!.children}</Button>;
export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  variant: 'contained',
  children: 'Button',
  size: 'medium'
};

export const Size = Template.bind({});
Size.args = {
  variant: 'contained',
  children: 'Button',
  size: 'medium'
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
