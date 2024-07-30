import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { DisplayType, Time } from '../../interface/time';

@Component({
  selector: 'dashboard-card',
  standalone: true,
  imports: [CommonModule],
  template: ` <div [ngClass]="wrapperclasses" class="wrapper">
    <div class="card">
      <header class="header">
        <p>{{ timeInfo.title }}</p>
        <button class="button">
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </header>
      <div class="content">
        <span class="hour">{{
          timeInfo.timeframes[displayType].current + 'hrs'
        }}</span>
        <span class="last">{{
          'Last week - ' + timeInfo.timeframes[displayType].previous + 'hrs'
        }}</span>
      </div>
    </div>
  </div>`,
  styleUrls: ['./dashboard-card.scss'],
})
export class DashBoardCard {
  @Input()
  displayType!: DisplayType;
  @Input()
  timeInfo!: Time;

  /**
   * Classes
   */
  public get wrapperclasses(): string[] {
    const titleCss = this.timeInfo.title.toLowerCase().replace(' ', '-');
    return [titleCss];
  }
}
