import type { Meta, StoryObj } from '@storybook/angular/';

import { ProgressionCard } from './progressionCard';

const meta: Meta<ProgressionCard> = {
  title: 'MaterialUI/ProgressionCard',
  component: ProgressionCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ProgressionCard>;

export const cardCients: Story = {
  args: {
    title: 'Clients',
    result: 22,
    progression: 15,
    lastProgression: 5,
  },
};

export const cardAction: Story = {
  args: {
    title: 'Action planifiées',
    result: 22,
    progression: 15,
    lastProgression: 5,
  },
};

export const cardOpportunite: Story = {
  args: {
    title: 'Opportunités',
    result: 22,
    progression: 4,
    lastProgression: 8,
    infoSup: 'Sur le CA prévisionnelle',
    resultCA: 2515241,
  },
};

export const cardAppel: Story = {
  args: {
    title: 'Appel client',
    result: 22,
    progression: -5,
    lastProgression: 10,
  },
};
