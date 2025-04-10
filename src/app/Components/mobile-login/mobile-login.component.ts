import { Component } from '@angular/core';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MobileFormsComponent } from './mobile-forms/mobile-forms.component';

@Component({
  selector: 'app-mobile-login',
  imports: [MobileHeaderComponent, MobileFormsComponent],
  templateUrl: './mobile-login.component.html',
  styleUrl: './mobile-login.component.scss',
})
export class MobileLoginComponent {}
