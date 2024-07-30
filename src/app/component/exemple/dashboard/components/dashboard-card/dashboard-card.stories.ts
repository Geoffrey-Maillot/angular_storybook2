import type { Meta, StoryObj } from '@storybook/angular/';

import { DashBoardCard } from './dashboard-card';

const meta: Meta<DashBoardCard> = {
  title: 'DashboardApp/DashboardCard',
  component: DashBoardCard,
  argTypes: {
    displayType: {
      control: 'radio',
    },
    timeInfo: {
      control: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DashBoardCard>;

export const work: Story = {
  args: {
    displayType: 'daily',
    timeInfo: {
      title: 'Work',
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
  },
};
export const play: Story = {
  args: {
    displayType: 'daily',
    timeInfo: {
      title: 'Play',
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
  },
};
export const study: Story = {
  args: {
    displayType: 'daily',
    timeInfo: {
      title: 'Study',
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
  },
};
export const exercise: Story = {
  args: {
    displayType: 'daily',
    timeInfo: {
      title: 'Exercise',
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
  },
};
export const social: Story = {
  args: {
    displayType: 'daily',

    timeInfo: {
      title: 'Social',
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
  },
};
export const selfCare: Story = {
  args: {
    displayType: 'daily',
    timeInfo: {
      title: 'Self Care',
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
  },
};
