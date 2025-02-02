import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ThreadService } from '../../services/thread.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { animate, style, transition, trigger } from '@angular/animations';
import { ResponsesListComponent } from '../responses-list/responses-list.component';

@Component({
  selector: 'app-thread-display',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    InputTextModule, 
    ButtonModule, 
    CardModule,
    DividerModule,
    ResponsesListComponent
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="p-container">
      @if (thread()) {
        <p-card [@fadeIn]>
          <ng-template pTemplate="header">
            <h2 class="text-2xl font-bold text-center p-4 m-0">{{ thread()?.question }}</h2>
          </ng-template>
          
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-column gap-4">
            <div class="p-field w-full">
              <span class="p-float-label p-input-filled w-full">
                <input 
                  id="answer" 
                  type="text" 
                  pInputText 
                  formControlName="answer"
                  class="w-full"
                >
                <label for="answer">Your answer</label>
              </span>
              @if (form.get('answer')?.errors?.['required'] && form.get('answer')?.touched) {
                <small class="p-error block mt-2">Answer is required</small>
              }
              @if (form.get('answer')?.errors?.['maxlength']) {
                <small class="p-error block mt-2">Answer must be less than 500 characters</small>
              }
            </div>

            <p-button 
              type="submit" 
              [disabled]="!form.valid"
              label="Submit Answer"
              icon="pi pi-check"
            ></p-button>
          </form>

          <p-divider></p-divider>

          <app-responses-list [responses]="thread()?.responses ?? []"></app-responses-list>
        </p-card>
      }
    </div>
  `
})
export class ThreadDisplayComponent {
  private threadService = inject(ThreadService);
  private route = inject(ActivatedRoute);

  thread = this.threadService.currentThread;
  responseCount = computed(() => this.thread()?.responses?.length ?? 0);

  form = new FormGroup({
    answer: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ])
  });

  constructor() {
    this.route.params.subscribe(async params => {
      await this.threadService.getThread(params['id']);
    });
  }

  async onSubmit() {
    if (this.form.valid && this.thread()) {
      await this.threadService.addResponse(
        this.thread()!.id,
        this.form.value.answer!
      );
      this.form.reset();
    }
  }
}