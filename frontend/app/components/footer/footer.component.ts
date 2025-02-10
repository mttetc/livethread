import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .gradient-text {
      background: linear-gradient(135deg, #9d6ff0, #5755d5);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .social-link:hover {
      color: var(--primary-color) !important;
      transform: translateY(-2px);
    }
  `],
  template: `
    <footer class="w-full border-top-1 surface-card" style="backdrop-filter: blur(10px);">
      <div class="flex flex-col items-center py-4">
        <div class="flex gap-3 mb-3">
          <a href="https://github.com" target="_blank" class="social-link no-underline text-secondary transition-all transition-duration-200" style="text-shadow: 0 0 20px rgba(123, 63, 228, 0.3);">
            <i class="pi pi-github text-xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-link no-underline text-secondary transition-all transition-duration-200" style="text-shadow: 0 0 20px rgba(123, 63, 228, 0.3);">
            <i class="pi pi-twitter text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="social-link no-underline text-secondary transition-all transition-duration-200" style="text-shadow: 0 0 20px rgba(123, 63, 228, 0.3);">
            <i class="pi pi-linkedin text-xl"></i>
          </a>
        </div>
        <div class="text-sm gradient-text">
          © {{ currentYear }} LiveThread. All rights reserved.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}