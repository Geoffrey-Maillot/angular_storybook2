import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-layout',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="dashboard">
    <ng-content></ng-content>
  </div>`,
})
export class DashboardLayout {}
