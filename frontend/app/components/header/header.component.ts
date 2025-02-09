import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  styles: [`
    .gradient-text {
      background: linear-gradient(135deg, #7b3fe4, #3735bb);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    :host ::ng-deep .header-link:hover {
      color: var(--primary-color);
    }
  `],
  template: `
    <header class="w-full border-bottom-1 surface-card" style="backdrop-filter: blur(10px);">
      <div class="container">
        <div class="flex align-items-center justify-content-between p-4">
          <a routerLink="/" class="flex align-items-center gap-2 no-underline">
            <i class="pi pi-bolt text-xl gradient-text"></i>
            <h1 class="m-0 text-base font-bold gradient-text">LiveThread</h1>
          </a>
          <nav>
            <ul class="flex list-none m-0 p-0 gap-4">
              <li>
                <a routerLink="/create" class="header-link no-underline text-color transition-colors transition-duration-200">
                  Create Thread
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}