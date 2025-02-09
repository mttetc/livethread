import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
    ProgressSpinnerModule
  ],
  template: `
    <p-progressSpinner *ngIf="loading.isLoading | async"
      styleClass="w-4rem h-4rem" 
      strokeWidth="8" 
      fill="var(--surface-ground)"
      animationDuration=".5s">
    </p-progressSpinner>
    <div [style.display]="(loading.isLoading | async) ? 'none' : 'flex'" class="flex flex-column min-h-screen surface-ground">
      <app-header class="flex-none"></app-header>
      <main class="flex-grow-1 container py-8">
        <router-outlet></router-outlet>
      </main>
      <app-footer class="flex-none"></app-footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(
    public loading: LoadingService,
    private primeng: PrimeNG
  ) {
    this.loading.setLoading(true);
  }

  ngOnInit() {
    // Example of runtime configuration if needed
    this.primeng.ripple.set(true);
  }
}