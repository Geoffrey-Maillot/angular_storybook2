import type { Meta, StoryObj } from '@storybook/angular/';

import { UserCard } from './user-card';

const meta: Meta<UserCard> = {
  title: 'DashboardApp/UserCard',
  component: UserCard,
  argTypes: {
    displayType: {
      control: 'radio',
      description: "Définis le type d'affichage ",
    },
    user: {
      description: 'Utilisateur',
    },
  },
  tags: ['autodocs'],
};

/**
 * Create template
 */
export default meta;
type Story = StoryObj<UserCard>;

export const work: Story = {
  args: {
    displayType: 'daily',
    user: {
      firstName: 'Jeremy',
      lastName: 'Delarue',
    },
  },
};
