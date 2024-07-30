import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Typo } from '../typo/typo';
import { Icon } from '../icon/icon';

@Component({
  selector: 'progression-card',
  standalone: true,
  imports: [CommonModule, Typo, Icon],
  template: `<div [ngClass]="classes" class="card">
    <div>
      <typo text="{{ title }}" size="ml" fontWeight="bold" />
      <div class="info">
        <typo text="{{ result }}" size="xl" />
        <div>
          <div class="progression">
            <icon
              size="xs"
              icon="{{ getIcon }}"
              variant="{{ progressionClass }}"
            />
            <typo
              [text]="progression + '%'"
              size="xs"
              variant="{{ progressionClass }}"
            />

            <typo
              *ngIf="!!infoSup"
              text="{{ infoSup }}"
              size="xs"
              variant="{{ progressionClass }}"
            />
          </div>
          <div class="result-ca">
            <typo
              *ngIf="!!resultCA"
              class="bold-weight"
              [text]="resultCA + '€'"
              variant="{{ progressionClass }}"
              fontWeight="bold"
            />
          </div>
        </div>
      </div>
      <typo text="Par rapport à la période précédente" size="xs" />
    </div>
    <div [ngClass]="graphiqueBackground">Graphique</div>
  </div>`,
  styleUrls: ['./progession.scss'],
})
export class ProgressionCard {
  @Input() title: string = ''; // On peu aussi définir à l'avance quel sont les titres acceptés si on les connais à l'avance
  @Input() result!: number;
  @Input() progression!: number;
  @Input() lastProgression!: number;
  @Input() infoSup?: string;
  @Input() resultCA?: number;

  get progressionClass(): string {
    let classInfoProgression;
    const progression = this.progression - this.lastProgression;

    if (progression > 0) {
      classInfoProgression = 'success';
    } else if (progression < 1 && progression > -5) {
      classInfoProgression = 'warn';
    } else {
      classInfoProgression = 'danger';
    }

    return classInfoProgression;
  }

  get getIcon(): string {
    let icon = '';
    const progression = this.progression - this.lastProgression;

    if (progression < 0) {
      icon = 'arrow_downward';
    } else if (progression === 0) {
      icon = 'arrow_forward';
    } else {
      icon = 'arrow_upward';
    }
    console.log(icon);
    return icon;
  }

  get graphiqueBackground() {
    return 'bg-' + this.progressionClass;
  }

  get iconStyle(): string[] {
    return [];
  }
}
