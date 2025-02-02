import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [],
  template: `
    <header class="w-full z-5" style="background: var(--card-bg); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border-color);">
      <div class="container">
        <div class="flex justify-content-between align-items-center py-3">
          <div class="flex align-items-center gap-2">
            <i class="pi pi-bolt text-xl gradient-text"></i>
            <h1 class="text-xl font-bold m-0 gradient-text">LiveThread</h1>
          </div>
          <nav>
            <ul class="flex list-none p-0 m-0 gap-4">
              <li>
                <a 
                  routerLink="/" 
                  routerLinkActive="text-primary" 
                  [routerLinkActiveOptions]="{exact: true}"
                  class="no-underline text-secondary hover:text-white transition-colors transition-duration-150"
                  style="text-shadow: 0 0 20px rgba(123, 63, 228, 0.3);"
                >Create Thread</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}