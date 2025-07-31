import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h2>{{ isLoginMode ? 'Welcome Back' : 'Create Account' }}</h2>
          <p>{{ isLoginMode ? 'Sign in to your account' : 'Sign up to get started' }}</p>
        </div>
        
        <form (ngSubmit)="onSubmit()" #authForm="ngForm" autocomplete="off" class="auth-form">
          <div class="input-group" *ngIf="!isLoginMode">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="name"
              placeholder="Enter your full name"
              required
              class="input-field"
            />
          </div>
          
          <div class="input-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="email"
              placeholder="Enter your email"
              required
              class="input-field"
            />
          </div>
          
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              [(ngModel)]="password"
              placeholder="Enter your password"
              required
              minlength="6"
              class="input-field"
            />
          </div>
          
          <button type="submit" class="auth-btn" [disabled]="authForm.invalid || isLoading">
            <span *ngIf="isLoading" class="loading-spinner"></span>
            {{ isLoading ? 'Please wait...' : (isLoginMode ? 'Sign In' : 'Create Account') }}
          </button>
        </form>
        
        <div class="divider">
          <span>or</span>
        </div>
        
        <div class="toggle-section">
          <p>
            {{ isLoginMode ? "Don't have an account?" : "Already have an account?" }}
            <button type="button" class="toggle-btn" (click)="toggleMode()">
              {{ isLoginMode ? 'Sign Up' : 'Sign In' }}
            </button>
          </p>
        </div>
        
        <div *ngIf="errorMsg" class="alert alert-error">
          <span class="alert-icon">⚠️</span>
          {{ errorMsg }}
        </div>
        
        <div *ngIf="successMsg" class="alert alert-success">
          <span class="alert-icon">✅</span>
          {{ successMsg }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .auth-card {
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      padding: 40px;
      width: 100%;
      max-width: 450px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .auth-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .auth-header h2 {
      color: #2d3748;
      font-size: 28px;
      font-weight: 700;
      margin: 0 0 8px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .auth-header p {
      color: #718096;
      font-size: 16px;
      margin: 0;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .input-group label {
      font-weight: 600;
      color: #2d3748;
      font-size: 14px;
    }

    .input-field {
      padding: 16px 18px;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 16px;
      transition: all 0.3s ease;
      background: #f8fafc;
      outline: none;
    }

    .input-field:focus {
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      transform: translateY(-1px);
    }

    .input-field:hover {
      border-color: #cbd5e0;
    }

    .auth-btn {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 16px 24px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .auth-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .auth-btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .auth-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .loading-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .divider {
      position: relative;
      text-align: center;
      margin: 30px 0 20px 0;
    }

    .divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background: #e2e8f0;
    }

    .divider span {
      background: white;
      padding: 0 15px;
      color: #718096;
      font-size: 14px;
    }

    .toggle-section {
      text-align: center;
    }

    .toggle-section p {
      color: #718096;
      margin: 0;
    }

    .toggle-btn {
      background: none;
      border: none;
      color: #667eea;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
      font-size: inherit;
      margin-left: 5px;
    }

    .toggle-btn:hover {
      color: #764ba2;
    }

    .alert {
      padding: 12px 16px;
      border-radius: 10px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
    }

    .alert-error {
      background: #fed7d7;
      color: #c53030;
      border: 1px solid #feb2b2;
    }

    .alert-success {
      background: #c6f6d5;
      color: #2f855a;
      border: 1px solid #9ae6b4;
    }

    .alert-icon {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      .auth-container {
        padding: 10px;
      }
      
      .auth-card {
        padding: 30px 25px;
      }
      
      .auth-header h2 {
        font-size: 24px;
      }
    }
  `]
})
export class AuthComponent {
  isLoginMode = true;
  email = '';
  password = '';
  name = '';
  errorMsg = '';
  successMsg = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMsg = '';
    this.successMsg = '';
    this.email = '';
    this.password = '';
    this.name = '';
  }

  onSubmit() {
    this.errorMsg = '';
    this.successMsg = '';
    
    if (!this.email || !this.password || (!this.isLoginMode && !this.name)) {
      this.errorMsg = 'All fields are required.';
      return;
    }
    
    if (this.password.length < 6) {
      this.errorMsg = 'Password must be at least 6 characters long.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMsg = 'Please enter a valid email address.';
      return;
    }

    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      if (this.isLoginMode) {
        const dummyToken = 'demo-token-' + Date.now();
        //const userInfo = { email: this.email, name: 'Demo User' };
        
        this.authService.login(dummyToken, );
        this.successMsg = `Welcome back, ${this.email}!`;
        
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      } else {
        this.successMsg = `Account created successfully for ${this.email}! Please sign in now.`;
        setTimeout(() => {
          this.toggleMode();
        }, 1500);
      }
      
      this.isLoading = false;
    }, 1500);
  }
}