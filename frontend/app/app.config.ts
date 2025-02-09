import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { Routes } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { CreatePageComponent } from './pages/create/create.component';
import { ThreadPageComponent } from './pages/thread/thread.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'thread/:id', component: ThreadPageComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'tailwind, primeng',
          },
        },
      },
    })
  ]
};