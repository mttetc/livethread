import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadDisplayComponent } from '../../components/thread-display/thread-display.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-thread-page',
  standalone: true,
  imports: [CommonModule, ThreadDisplayComponent],
  template: `
    <div class="container mx-auto px-4" [@fadeIn]>
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-6 gradient-text text-center">Thread Preview</h1>
        <app-thread-display></app-thread-display>
      </div>
    </div>
  `,
  styles: [`
    .gradient-text {
      background: linear-gradient(135deg, #7b3fe4, #3735bb);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ThreadPageComponent {}