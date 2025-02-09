import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { animate, style, transition, trigger } from '@angular/animations';
import { Response } from '../../models/response.model';

@Component({
  selector: 'app-responses-list',
  standalone: true,
  imports: [CommonModule, CardModule, DataViewModule],
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
      <p-dataView #dv [value]="responses" [emptyMessage]="'No responses yet. Be the first to answer!'">
        <ng-template let-response pTemplate="listItem">
          <div class="col-12" [@fadeIn]>
            <div class="flex flex-column gap-2 p-4 surface-card border-round mb-3" 
                 style="background: rgba(255, 255, 255, 0.03); 
                        backdrop-filter: blur(10px); 
                        border: 1px solid rgba(255, 255, 255, 0.05); 
                        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);">
              <div class="flex align-items-center gap-2">
                <i class="pi pi-user text-xl gradient-text"></i>
                <span class="text-sm text-secondary">Anonymous</span>
                <span class="text-sm text-secondary ml-auto">{{ response.createdAt | date:'medium' }}</span>
              </div>
              <p class="m-0 line-height-3 text-lg">{{ response.answer }}</p>
            </div>
          </div>
        </ng-template>
      </p-dataView>
    </div>
  `,
  styles: [`
    :host ::ng-deep .p-dataview .p-dataview-content {
      background: transparent;
      border: none;
      padding: 0;
    }
    :host ::ng-deep .p-dataview .p-dataview-emptymessage {
      text-align: center;
      color: var(--text-color-secondary);
      padding: 2rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 1rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  `]
})
export class ResponsesListComponent {
  @Input() responses: Response[] = [];
}