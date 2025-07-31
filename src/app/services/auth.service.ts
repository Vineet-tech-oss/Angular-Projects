import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private router: Router) {}

  // User login: token set karo
  login(token: string) {
    localStorage.setItem('userToken', token);
  }

  // User logout: token hatao
  logout() {
    localStorage.removeItem('userToken');
    // Optionally login page pe le jao
    this.router.navigate(['/login']);
  }

  // Check: logged in hai ya nahi?
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  // Token le lo (agar chahiye)
  getToken(): string | null {
    return localStorage.getItem('userToken');
  }
}