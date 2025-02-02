import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  styles: [`
    .hero-gradient {
      background: radial-gradient(circle at center, rgba(123, 63, 228, 0.15) 0%, rgba(55, 53, 187, 0.15) 50%, transparent 100%);
    }
    .feature-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 32px rgba(123, 63, 228, 0.2);
    }
    .cta-button {
      background: var(--primary-gradient) !important;
      border: none !important;
      box-shadow: 0 8px 32px rgba(123, 63, 228, 0.3) !important;
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(123, 63, 228, 0.4) !important;
    }
  `],
  template: `
    <div class="hero-gradient py-8 px-4 min-h-screen flex flex-column justify-content-center align-items-center text-center">
      <h1 class="text-6xl font-bold mb-4 gradient-text">Start a LiveThread</h1>
      <p class="text-xl text-secondary mb-6 max-w-30rem line-height-3">
        Create engaging discussion threads in seconds. Connect with your audience in real-time.
      </p>
      <p-button 
        label="Get Started" 
        icon="pi pi-plus" 
        (onClick)="createThread()"
        styleClass="cta-button text-xl px-5 py-3"
      ></p-button>

      <div class="grid mt-8 gap-4">
        <div class="col-12 md:col-4">
          <p-card styleClass="feature-card h-full" [style]="{'background': 'rgba(255, 255, 255, 0.03)', 'backdrop-filter': 'blur(10px)'}">
            <i class="pi pi-bolt text-4xl mb-3 gradient-text"></i>
            <h3 class="text-xl font-medium mb-2">Lightning Fast</h3>
            <p class="text-secondary m-0">Create and launch threads instantly</p>
          </p-card>
        </div>
        <div class="col-12 md:col-4">
          <p-card styleClass="feature-card h-full" [style]="{'background': 'rgba(255, 255, 255, 0.03)', 'backdrop-filter': 'blur(10px)'}">
            <i class="pi pi-chart-line text-4xl mb-3 gradient-text"></i>
            <h3 class="text-xl font-medium mb-2">Analytics</h3>
            <p class="text-secondary m-0">Monitor discussions and engagement</p>
          </p-card>
        </div>
      </div>

      <div class="mt-6">
        <p-button 
          label="Start New Thread" 
          icon="pi pi-arrow-right" 
          (onClick)="createThread()"
          styleClass="cta-button text-xl px-5 py-3"
        ></p-button>
      </div>

    </div>
  `
})
export class LandingComponent {
  constructor(private router: Router) {}

  createThread() {
    this.router.navigate(['/create']);
  }
}