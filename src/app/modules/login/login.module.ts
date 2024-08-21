import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignUpComponent
  ]
})
export class LoginModule { }
