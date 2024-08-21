import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-header></app-header>

    <main class="main-container" id="main">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {}
