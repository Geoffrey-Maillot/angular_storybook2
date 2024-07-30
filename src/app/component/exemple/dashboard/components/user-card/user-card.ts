import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { DisplayType, User } from '../../interface/time';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="userCard">
    <div class="user">
      <div class="userImage">
        <img
          src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Oliver"
          alt="{{ user.firstName }}"
        />
      </div>
      <div class="flex flex-column items-start gap-2">
        <span class="text-pale text-sm">Report for</span>
        <span class="name">
          <span>{{ user.firstName }} </span> <span>{{ user.lastName }}</span>
        </span>
      </div>
    </div>
    <div class="buttonsGroup">
      <button
        type="button"
        (click)="changeDisplayType('daily')"
        [ngClass]="btnDaily"
      >
        Daily
      </button>
      <button
        type="button"
        (click)="changeDisplayType('weekly')"
        [ngClass]="btnWeekly"
      >
        Weekly
      </button>
      <button
        type="button"
        (click)="changeDisplayType('monthly')"
        [ngClass]="btnMontly"
      >
        Monthly
      </button>
    </div>
  </div>`,
  styleUrls: ['./user-card.scss'],
})
export class UserCard {
  @Input()
  user!: User;

  @Input()
  displayType!: DisplayType;

  @Output()
  onClick = new EventEmitter<DisplayType>();

  changeDisplayType(displayType: DisplayType) {
    this.onClick.emit(displayType);
  }

  /**
   * Classes
   */
  public get btnDaily(): string[] {
    const textColor = this.displayType === 'daily' ? 'text-white' : 'text-pale';
    return [textColor];
  }
  public get btnWeekly(): string[] {
    const textColor =
      this.displayType === 'weekly' ? 'text-white' : 'text-pale';
    return [textColor];
  }
  public get btnMontly(): string[] {
    const textColor =
      this.displayType === 'monthly' ? 'text-white' : 'text-pale';
    return [textColor];
  }
}
