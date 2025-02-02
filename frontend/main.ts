import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { CreatePageComponent } from './app/pages/create/create.component';
import { ThreadPageComponent } from './app/pages/thread/thread.component';
import { LandingComponent } from './app/pages/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'LiveThread';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: LandingComponent },
      { path: 'create', component: CreatePageComponent },
      { path: 'thread/:id', component: ThreadPageComponent }
    ]),
    provideAnimations(),
    provideHttpClient()
  ]
});