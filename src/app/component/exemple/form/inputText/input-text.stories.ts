import type { Meta, StoryObj } from '@storybook/angular/';

import { InputText } from './inputText';

const meta: Meta<InputText> = {
  title: 'Form/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    ngAfterViewInit: {
      control: false,
    },
    ngOnChange: {
      control: false,
    },
    ngOnInit: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<InputText>;

export const defaultInput: Story = {};

export const withLabel: Story = {
  args: {
    label: 'Nom',
  },
};

export const withPlaceholder: Story = {
  args: {
    label: 'Nom',
    placeholder: 'Entrez votre nom ',
  },
};

export const withError: Story = {
  args: {
    label: "",
    placeholder: "Entrez votre nom  dzd ",
    value: "",
    error: false,
    errorMessage: 'Votre nom doit contenir au moins trois caractère',
    disabled: false,
  },
};
