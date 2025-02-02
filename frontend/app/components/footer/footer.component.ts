import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="w-full mt-8" style="background: var(--card-bg); backdrop-filter: blur(10px); border-top: 1px solid var(--border-color);">
      <div class="container">
        <div class="flex flex-column align-items-center py-4">
          <div class="flex gap-3 mb-3">
            <a href="https://github.com" target="_blank" class="no-underline text-secondary hover:text-white transition-colors transition-duration-150" style="text-shadow: 0 0 20px rgba(123, 63, 228, 0.3);">
              <i class="pi pi-github text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="no-underline text-secondary hover:text-white transition-colors transition-duration-150" style="text-shadow: 0 0 20px rgba(123, 63, 228, 0.3);">
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="no-underline text-secondary hover:text-white transition-colors transition-duration-150" style="text-shadow: 0 0 20px rgba(123, 63, 228, 0.3);">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
          </div>
          <div class="text-sm text-secondary">
            © 2024 LiveThread. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}