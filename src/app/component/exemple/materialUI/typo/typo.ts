import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'typo',
  standalone: true,
  imports: [CommonModule, Typo],
  template: `<p [ngClass]="classes" [ngStyle]="fontWeightStyle">
    {{ text }} <ng-content *ng-if="!text"></ng-content>
  </p>`,
})
export class Typo {
  @Input() variant:
    | 'primary'
    | 'danger'
    | 'danger-accent'
    | 'warn-accent'
    | 'warn'
    | 'success'
    | 'success-accent' = 'primary';
  @Input() size: 'xs' | 'm' | 'ml' | 'xl' = 'm';
  @Input() fontWeight: 'regular' | 'medium' | 'bold' = 'regular';
  @Input() text: string = '';
  /**
   * Classes
   */

  public get variantClasses(): string[] {
    const variantClass = 'text-' + this.variant;
    return [variantClass];
  }
  public get sizeClasses(): string[] {
    let sizeClass = '';
    switch (this.size) {
      case 'xs':
        {
          sizeClass = 'mat-body-small';
        }
        break;
      case 'm':
        {
          sizeClass = 'mat-body-medium';
        }
        break;
      case 'ml':
        {
          sizeClass = 'mat-body-large';
        }
        break;

      case 'xl':
        {
          sizeClass = 'mat-display-small';
        }
        break;
    }
    return [sizeClass];
  }

  get fontWeightStyle() {
    let fontWeight = '';

    switch (this.fontWeight) {
      case 'bold': {
        fontWeight = '700';
        break;
      }
      case 'medium': {
        fontWeight = '500';
        break;
      }
      case 'regular': {
        fontWeight = '400';
        break;
      }
    }
    console.log(fontWeight);
    return { fontWeight };
  }

  public get classes(): string[] {
    return [...this.variantClasses, ...this.sizeClasses];
  }
}
