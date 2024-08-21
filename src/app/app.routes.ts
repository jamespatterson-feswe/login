import { LoginModule } from './modules/login/login.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/index').then(m => m.LoginModule)
  }
];
