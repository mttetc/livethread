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
    <header class="p-4 w-full border-bottom-1 surface-card" style="backdrop-filter: blur(10px);">
      <a routerLink="/" class="flex items-center gap-2 no-underline">
        <i class="pi pi-bolt text-xl gradient-text"></i>
        <h1 class="m-0 text-base font-bold gradient-text">LiveThread</h1>
      </a>
    </header>
  `
})
export class HeaderComponent {}