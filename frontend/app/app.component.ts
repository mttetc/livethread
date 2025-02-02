import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(10px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .loading-spinner {
      width: 4rem;
      height: 4rem;
      border: 3px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      border-top-color: var(--primary-color);
      border-left-color: var(--secondary-color);
      animation: spin 1s cubic-bezier(0.76, 0.35, 0.2, 0.7) infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `],
  template: `
    <div class="loading-overlay" *ngIf="loading.isLoading | async">
      <div class="flex align-items-center gap-2 mb-4 p-4 surface-card border-round-xl">
        <i class="pi pi-bolt text-4xl gradient-text"></i>
        <h1 class="text-4xl font-bold m-0 gradient-text">LiveThread</h1>
      </div>
      <div class="loading-spinner"></div>
    </div>
    <div [style.display]="(loading.isLoading | async) ? 'none' : 'block'" class="min-h-screen surface-ground">
      <app-header></app-header>
      <main class="container my-8">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  constructor(public loading: LoadingService) {
    // Set initial loading state
    this.loading.setLoading(true);
  }
}