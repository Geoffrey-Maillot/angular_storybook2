import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Icon } from '../app/component/exemple/materialUI/icon/icon';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, Icon],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <icon
      *ngIf="iconLeft && !buttonIcon"
      [ngClass]="iconCLasses"
      icon="{{ isLoading ? 'refresh' : iconLeft }}"
      [size]="iconSize"
      [noBackground]="true"
    />
    <span *ngIf="!buttonIcon"> {{ label }}</span>
    <icon
      *ngIf="buttonIcon"
      [ngClass]="iconCLasses"
      icon="{{ isLoading ? 'refresh' : buttonIcon }}"
      [size]="iconSize"
      [noBackground]="true"
    />
    <icon
      [ngClass]="iconCLasses"
      *ngIf="iconRight && !buttonIcon"
      icon="{{ isLoading ? 'refresh' : iconRight }}"
      [size]="iconSize"
      [noBackground]="true"
    />
  </button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */

  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Icon Left
   */
  @Input()
  iconLeft = '';

  /**
   * Icon Left
   */
  @Input()
  iconRight = '';

  /**
   * ButtonIcon
   */
  @Input()
  buttonIcon = '';
  /**
   * FullWidth button
   */
  @Input()
  fullWidth: boolean = false;
  /**
   * Loading state
   */
  @Input()
  isLoading: boolean = false;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  get iconSize(): 'xs' | 'm' | 'ml' | 'xl' {
    return this.size === 'small'
      ? 'm'
      : this.size === 'medium'
        ? 'ml'
        : this.size === 'large'
          ? 'xl'
          : 'ml';
  }

  public get classes(): string[] {
    const mode = this.primary
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';

    const buttonIcon = this.buttonIcon ? 'storybook-button--icon' : '';
    const fullWith =
      this.fullWidth && !this.buttonIcon ? 'storybook-button--fullwidth' : '';

    return [
      'storybook-button',
      `storybook-button--${this.size}`,
      mode,
      buttonIcon,
      fullWith,
    ];
  }

  public get iconCLasses(): string[] {
    const isLoading = this.isLoading ? 'storybook-button--loading' : '';
    return [isLoading];
  }
}
