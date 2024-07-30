import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'input-text',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="field" [ngClass]="classes">
    <label *ngIf="label">{{ label }}</label>
    <input #inputElement />
    <p *ngIf="error">{{ errorMessage }}</p>
  </div>`,
  styleUrls: ['./input-text.scss'],
})
export class InputText implements OnInit, AfterViewInit {
  // input attribute
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;

  // additional props
  @Input() label?: string;
  @Input() error?: boolean = false;
  @Input() errorMessage?: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const input = this.el.nativeElement.querySelector('input');
    this.renderer.setAttribute(input, 'type', this.type);
    this.renderer.setAttribute(input, 'placeholder', this.placeholder);
    this.renderer.setProperty(input, 'value', this.value);
    this.renderer.setProperty(input, 'disabled', this.disabled);
  }

  ngOnChange() {
    const input = this.el.nativeElement.querySelector('input');
    this.renderer.setAttribute(input, 'type', this.type);
    this.renderer.setAttribute(input, 'placeholder', this.placeholder);
    this.renderer.setProperty(input, 'value', this.value);
    this.renderer.setProperty(input, 'disabled', this.disabled);
  }

  ngAfterViewInit() {
    const input = this.el.nativeElement.querySelector('input');
    for (const key in this.el.nativeElement.attributes) {
      if (this.el.nativeElement.attributes.hasOwnProperty(key)) {
        const attr = this.el.nativeElement.attributes[key];
        this.renderer.setAttribute(input, attr.name, attr.value);
      }
    }
  }

  public get classes(): string[] {
    const errorClass = this.error ? 'error' : '';
    return [errorClass];
  }
}
