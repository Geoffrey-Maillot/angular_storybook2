import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Basic icons
 */
@Component({
  selector: 'icon',
  template: `
    <div [ngClass]="classes" class="icon">
      <mat-icon
        aria-hidden="false"
        aria-label="Icon"
        fontIcon="{{ icon }}"
      ></mat-icon>
    </div>
  `,
  styleUrl: './icon.scss',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  @Input() variant: 'primary' | 'danger' | 'warn' | 'success' = 'primary';
  @Input() size: 'xs' | 'm' | 'ml' | 'xl' = 'm';
  @Input() noBackground: boolean = false;
  @Input() icon: string = '';
  /**
   * Classes
   */

  public get variantClasses(): string[] {
    const variantClass = 'icon-' + this.variant;
    const noBackground = this.noBackground ? 'icon-transparent' : '';
    return [variantClass, noBackground];
  }
  public get sizeClasses(): string[] {
    let sizeClass = 'icon-' + this.size;

    return [sizeClass];
  }

  public get classes(): string[] {
    return [...this.variantClasses, ...this.sizeClasses];
  }
}
