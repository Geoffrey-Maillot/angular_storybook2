import type { Meta, StoryObj } from '@storybook/angular/';

import { Card } from './card';

const meta: Meta<Card> = {
  title: 'AdminLTE/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<Card>;

export const card: Story = {};
