import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoginSectionComponent } from '../login-section/login-section.component';
import { SecondSectionComponent } from '../second-section/second-section.component';
import { FooterComponent } from '../footer/footer.component';
import { MobileLoginComponent } from '../mobile-login/mobile-login.component';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    LoginSectionComponent,
    SecondSectionComponent,
    FooterComponent,
    MobileLoginComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
