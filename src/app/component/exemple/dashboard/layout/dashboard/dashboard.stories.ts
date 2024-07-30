import { Component, OnInit } from '@angular/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular/';

import { DashboardLayout } from './dashboard';
import { CommonModule } from '@angular/common';
import { DisplayType, Time, User } from '../../interface/time';
import { UserCard } from '../../components/user-card/user-card';
import { DashBoardCard } from '../../components';

@Component({
  selector: 'child-component',
  standalone: true,
  imports: [CommonModule, UserCard, DashBoardCard],
  template: `
    <div class="wrap-grid">
      <user-card
        [displayType]="displayType"
        (onClick)="doChangeDisplayType($event)"
        [user]="user"
      >
      </user-card>

      <ng-container *ngIf="dataDashboard && dataDashboard.length > 0">
        <dashboard-card
          *ngFor="let card of dataDashboard"
          [displayType]="displayType"
          [timeInfo]="card"
        >
        </dashboard-card>
      </ng-container>
    </div>
  `,
})
export class ChildComponent implements OnInit {
  dataDashboard: Array<Time> | null = null;
  displayType: DisplayType = 'daily';
  user: User = {
    firstName: 'Jeremy',
    lastName: 'Delarue',
  };

  doChangeDisplayType(displayType: DisplayType) {
    console.log('ICI');
    console.log(displayType);
    this.displayType = displayType;
  }

  ngOnInit(): void {
    (async () => {
      try {
        const response = await fetch('data.json');
        const data = (await response.json()) as unknown as Array<Time>;
        this.dataDashboard = data;
      } catch (error) {
        console.log(error);
      }
    })();
  }
}

const meta: Meta<DashboardLayout> = {
  title: 'DashboardApp/DashboardLayout',
  component: DashboardLayout,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, DashboardLayout, ChildComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DashboardLayout>;

export const dashboard: Story = {
  render: () => ({
    template: `<dashboard-layout><child-component /></dashboard-layout>`,
  }),
};
