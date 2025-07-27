// src/app/components/auth/auth.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h2>{{ isLoginMode ? 'Login' : 'Sign Up' }}</h2>

        <form (ngSubmit)="onSubmit()" #authForm="ngForm" autocomplete="off">
          <div *ngIf="!isLoginMode">
            <input
              type="text"
              name="name"
              [(ngModel)]="name"
              placeholder="Name"
              required
              class="input-field" />
          </div>
          <input
            type="email"
            name="email"
            [(ngModel)]="email"
            placeholder="Email"
            required
            class="input-field" />

          <input
            type="password"
            name="password"
            [(ngModel)]="password"
            placeholder="Password"
            required
            minlength="6"
            class="input-field" />

          <button type="submit" class="auth-btn" [disabled]="authForm.invalid">
            {{ isLoginMode ? 'Login' : 'Sign Up' }}
          </button>
        </form>

        <div class="toggle-link">
          <span>
            {{ isLoginMode ? "Don't have an account?" : "Already registered?" }}
            <a (click)="toggleMode()">
              {{ isLoginMode ? 'Sign Up' : 'Login' }}
            </a>
          </span>
        </div>

        <div *ngIf="errorMsg" class="auth-error">{{ errorMsg }}</div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(120deg, #f8fafc 0%, #e9ecef 100%);
    }
    .auth-card {
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 6px 24px #0002;
      padding: 34px 36px 28px;
      width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h2 {
      margin-bottom: 30px;
      color: #46505a;
      font-weight: bold;
    }
    form {
      width: 100%;
    }
    .input-field {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      padding: 10px 12px;
      border-radius: 8px;
      border: 1.5px solid #ced4da;
      font-size: 16px;
      box-sizing: border-box;
      outline-color: #1976d2;
      transition: border-color 0.2s;
    }
    .input-field:focus {
      border-color: #1976d2;
    }
    .auth-btn {
      width: 100%;
      padding: 10px 0;
      background: #1976d2;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 17px;
      font-weight: 600;
      margin-top: 8px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .auth-btn:disabled {
      background: #89a4cc;
      cursor: not-allowed;
    }
    .toggle-link {
      margin-top: 22px;
      font-size: 15px;
      color: #495057;
    }
    .toggle-link a {
      color: #1976d2;
      cursor: pointer;
      font-weight: 600;
      text-decoration: underline;
      margin-left: 4px;
    }
    .auth-error {
      color: #c92a2a;
      margin-top: 16px;
      font-size: 15px;
      text-align: center;
    }
  `]
})
  export class AuthComponent {
  isLoginMode = true;
  email = '';
  password = '';
  name = '';
  errorMsg = '';

  constructor(private authService: Auth, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMsg = '';
    this.email = '';
    this.password = '';
    this.name = '';
  }

  onSubmit() {
    if (!this.email || !this.password || (!this.isLoginMode && !this.name)) {
      this.errorMsg = 'All fields are required.';
      return;
    }
    if (this.password.length < 6) {
      this.errorMsg = 'Password must be at least 6 characters.';
      return;
    }

    // Demo: Fake token — replace with actual API login in real app
    if (this.isLoginMode) {
      const dummyToken = 'demo-token-123';

      this.authService.login(dummyToken);   // Token save in storage
      this.errorMsg = '';
      alert(`Successfully logged in as ${this.email}!`);
      this.router.navigate(['/home']);      // Redirect to protected page

    } else {
      // Signup mode logic: for demo, just alert and switch to login mode
      alert(`Successfully signed up as ${this.email}! Please login now.`);
      this.toggleMode();
    }
  }
}