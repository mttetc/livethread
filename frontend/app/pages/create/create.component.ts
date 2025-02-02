import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadCreatorComponent } from '../../components/thread-creator/thread-creator.component';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [CommonModule, ThreadCreatorComponent],
  template: `
    <div class="py-4">
      <h1 class="text-4xl font-bold mb-6 gradient-text">Create Thread</h1>
      <app-thread-creator></app-thread-creator>
    </div>
  `
})
export class CreatePageComponent {}