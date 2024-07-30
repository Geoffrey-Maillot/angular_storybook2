import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="card">
      <div class="card-header">
        <h3 class="card-title">Default Card Example</h3>
        <div class="card-tools">
          <!-- Buttons, labels, and many other things can be placed here! -->
          <!-- Here is a label for example -->
          <span class="badge badge-primary">Label</span>
        </div>
        <!-- /.card-tools -->
      </div>
      <!-- /.card-header -->
      <div class="card-body">The body of the card</div>
      <!-- /.card-body -->
      <div class="card-footer">The footer of the card</div>
      <!-- /.card-footer -->
    </div>
    <!-- /.card -->`,
})
export class Card {
  public get classes(): string[] {
    return [];
  }
}
