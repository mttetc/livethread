import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { SharedModule } from 'primeng/api'; 
import { Response } from '../../models/response.model';

@Component({
  selector: 'app-responses-list',
  standalone: true,
  imports: [CommonModule, CardModule, DataViewModule, SharedModule],
  template: `
    <div class="responses-section">
      <h3 class="text-xl mb-4 font-semibold">Responses ({{ responses.length }})</h3>
      <p-dataview #dv [value]="responses" [rows]="5" [paginator]="true" [rowsPerPageOptions]="[5,10,20]"
                  styleClass="p-dataview-sm" [alwaysShowPaginator]="true">
        <ng-template #list let-items>
          <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12" *ngFor="let response of items; let first = first" [@fadeIn]>
              <div class="flex flex-col p-6 gap-4 response-card" 
                   [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                   style="background: rgba(255, 255, 255, 0.03); 
                          backdrop-filter: blur(10px); 
                          border: 1px solid rgba(255, 255, 255, 0.05);">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div class="flex items-center gap-3 w-full sm:w-auto">
                    <div class="flex items-center gap-2">
                      <i class="pi pi-user text-xl gradient-text"></i>
                      <span class="text-sm text-secondary">Anonymous</span>
                    </div>
                    <span class="text-sm text-secondary ml-auto sm:ml-0">{{ response.createdAt | date:'medium' }}</span>
                  </div>
                </div>
                <p class="m-0 line-height-3 text-lg">{{ response.answer }}</p>
              </div>
            </div>
          </div>
        </ng-template>
      </p-dataview>
    </div>
  `,
  styles: [`
    :host ::ng-deep .p-dataview .p-paginator {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 0.5rem;
      margin-top: 1rem;
    }

    :host ::ng-deep .p-paginator .p-paginator-pages .p-paginator-page,
    :host ::ng-deep .p-paginator .p-paginator-first,
    :host ::ng-deep .p-paginator .p-paginator-prev,
    :host ::ng-deep .p-paginator .p-paginator-next,
    :host ::ng-deep .p-paginator .p-paginator-last,
    :host ::ng-deep .p-dropdown-panel {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-color);
    }

    :host ::ng-deep .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
      background: var(--primary-color);
      color: var(--primary-color-text);
    }

    :host ::ng-deep .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover,
    :host ::ng-deep .p-paginator .p-paginator-first:hover,
    :host ::ng-deep .p-paginator .p-paginator-prev:hover,
    :host ::ng-deep .p-paginator .p-paginator-next:hover,
    :host ::ng-deep .p-paginator .p-paginator-last:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-color);
    }

    :host ::ng-deep .p-dropdown {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    :host ::ng-deep .p-dropdown:not(.p-disabled).p-focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 1px rgba(123, 63, 228, 0.2);
    }
  `]
})
export class ResponsesListComponent {
  @Input() responses: Response[] = [];
}