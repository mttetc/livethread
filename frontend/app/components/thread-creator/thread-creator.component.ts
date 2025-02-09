import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ThreadService } from '../../services/thread.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-thread-creator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, CardModule],
  template: `
    <div class="p-container" [@fadeIn]>
      <p-card>
        <ng-template pTemplate="header">
          <h1 class="text-3xl font-bold text-center p-4 m-0">Create LiveThread</h1>
        </ng-template>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-column gap-4">
          <div class="p-field w-full">
            <span class="p-float-label p-input-filled w-full">
              <span class="p-input-icon-left w-full">
                <i class="pi pi-question-circle"></i>
                <input 
                  id="question" 
                  type="text" 
                  pInputText 
                  formControlName="question"
                  class="w-full"
                  [style]="{'background': 'rgba(255, 255, 255, 0.05)', 'border': '1px solid rgba(255, 255, 255, 0.1)', 'color': 'var(--text-color)'}"
                >
              </span>
              <label for="question">Enter your question</label>
            </span>
            @if (form.get('question')?.errors?.['required'] && form.get('question')?.touched) {
              <small class="p-error block mt-2">Question is required</small>
            }
            @if (form.get('question')?.errors?.['maxlength']) {
              <small class="p-error block mt-2">Question must be less than 200 characters</small>
            }
          </div>

          <p-button 
            type="submit" 
            [disabled]="!form.valid"
            label="Create Thread"
            icon="pi pi-plus"
          ></p-button>
        </form>
      </p-card>
    </div>
  `,
  styles: [`
    :host ::ng-deep .p-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 1rem;
      box-shadow: 0 8px 32px rgba(123, 63, 228, 0.2);
    }
    :host ::ng-deep .p-card .p-card-content {
      padding: 2rem;
    }
    :host ::ng-deep .p-inputtext {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-color);
    }
    :host ::ng-deep .p-inputtext:enabled:focus {
      box-shadow: 0 0 0 2px rgba(123, 63, 228, 0.2);
      border-color: var(--primary-color);
    }
    :host ::ng-deep .p-button {
      background: var(--primary-gradient);
      border: none;
      box-shadow: 0 8px 32px rgba(123, 63, 228, 0.3);
    }
    :host ::ng-deep .p-button:enabled:hover {
      background: var(--primary-gradient);
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(123, 63, 228, 0.4);
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
export class ThreadCreatorComponent {
  form = new FormGroup({
    question: new FormControl('', [
      Validators.required,
      Validators.maxLength(200)
    ])
  });

  constructor(
    private threadService: ThreadService,
    private router: Router
  ) {}

  async onSubmit() {
    if (this.form.valid) {
      const thread = await this.threadService.createThread(this.form.value.question!);
      this.router.navigate(['/thread', thread.id]);
    }
  }
}