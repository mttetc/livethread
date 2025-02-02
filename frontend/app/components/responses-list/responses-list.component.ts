import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { animate, style, transition, trigger } from '@angular/animations';
import { Response } from '../../models/response.model';

@Component({
  selector: 'app-responses-list',
  standalone: true,
  imports: [CommonModule, CardModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="responses-section">
      <h3 class="text-xl mb-3">Responses ({{ responses.length }})</h3>
      @if (responses.length) {
        <ul class="list-none p-0 m-0">
          @for (response of responses; track response) {
            <li class="p-3 mb-2 surface-card border-round" [@fadeIn]>
              {{ response.answer }}
            </li>
          }
        </ul>
      } @else {
        <p class="text-secondary">No responses yet. Be the first to answer!</p>
      }
    </div>
  `
})
export class ResponsesListComponent {
  @Input() responses: Response[] = [];
}