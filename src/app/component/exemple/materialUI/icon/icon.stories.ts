import type { Meta, StoryObj } from '@storybook/angular/';

import { Icon } from './icon';

/**
  https://fonts.google.com/icons

 */
const meta: Meta<Icon> = {
  title: 'MaterialUI/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Icon>;

/**
 * Couleur par default
 */
export const primary: Story = {
  args: {
    icon: 'arrow_downward',
  },
};
export const warn: Story = {
  args: {
    icon: 'arrow_downward',
    variant: 'warn',
  },
};
export const danger: Story = {
  args: {
    icon: 'arrow_downward',
    variant: 'danger',
  },
};
export const success: Story = {
  args: {
    icon: 'arrow_downward',
    variant: 'success',
  },
};
export const small: Story = {
  args: {
    icon: 'arrow_downward',
    size: 'xs',
  },
};
/**
 * Taille par default
 */
export const medium: Story = {
  args: {
    icon: 'arrow_downward',
    size: 'm',
  },
};
export const mediumLarge: Story = {
  args: {
    icon: 'arrow_downward',
    size: 'ml',
  },
};
export const extraLarge: Story = {
  args: {
    icon: 'arrow_downward',
    size: 'xl',
  },
};
export const backgroundTransparant: Story = {
  args: {
    icon: 'arrow_downward',
    noBackground: true,
  },
};
