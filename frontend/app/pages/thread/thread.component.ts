import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadDisplayComponent } from '../../components/thread-display/thread-display.component';

@Component({
  selector: 'app-thread-page',
  standalone: true,
  imports: [CommonModule, ThreadDisplayComponent],
  template: `
    <div class="py-4">
      <h1 class="text-4xl font-bold mb-6 gradient-text">Thread Preview</h1>
      <app-thread-display></app-thread-display>
    </div>
  `
})
export class ThreadPageComponent {}