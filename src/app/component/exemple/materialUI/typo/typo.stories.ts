import type { Meta, StoryObj } from '@storybook/angular/';

import { Typo } from './typo';

const meta: Meta<Typo> = {
  title: 'MaterialUI/Typo',
  component: Typo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Typo>;

/**
 * Couleur par default
 */
export const primary: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    text: 'Ceci est la couleur primaire',
  },
};

export const success: Story = {
  args: {
    variant: 'success',
    size: 'm',
    text: 'Ceci est la couleur success',
  },
};
export const successAccent: Story = {
  args: {
    variant: 'success-accent',
    size: 'm',
    text: 'Ceci est la couleur succes accent',
  },
};
export const warn: Story = {
  args: {
    variant: 'warn',
    size: 'm',
    text: 'Ceci est la couleur warn',
  },
};
export const warnAcccent: Story = {
  args: {
    variant: 'warn-accent',
    size: 'm',
    text: 'Ceci est la couleur warn accent',
  },
};
export const danger: Story = {
  args: {
    variant: 'danger',
    size: 'm',
    text: 'Ceci est la couleur danger',
  },
};
export const dangerAccent: Story = {
  args: {
    variant: 'danger-accent',
    size: 'm',
    text: 'Ceci est la couleur danger accent',
  },
};
export const smallText: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    text: 'Ceci est un texte small',
  },
};
/**
 * Taille par default
 */
export const mediumText: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    text: 'Ceci est un texte medium',
  },
};
export const mediumLargeText: Story = {
  args: {
    variant: 'primary',
    size: 'ml',
    text: 'Ceci est un texte large',
  },
};

export const extraLargeText: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    text: 'Ceci est un texte extra large',
  },
};
