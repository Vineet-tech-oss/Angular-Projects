import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="nav-brand">
          <a routerLink="/home">🛒 E-Commerce Showcase</a>
        </div>
        
        <ul class="nav-menu">
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
          <li><a routerLink="/deals" routerLinkActive="active">Deals</a></li>
          <li><a routerLink="/wishlist" routerLinkActive="active">Wishlist</a></li>
          <li><a routerLink="/compare" routerLinkActive="active">Compare</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        </ul>
      </nav>

      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <footer class="footer">
        <p>&copy; 2024 E-Commerce Showcase. Built with Angular 20.</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    }

    .navbar {
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      padding: 15px 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 2px solid #e9ecef;
    }

    .nav-brand a {
      font-size: 24px;
      font-weight: 700;
      color: #495057;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .nav-brand a:hover {
      color: #6c757d;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 25px;
    }

    .nav-menu a {
      color: #6c757d;
      text-decoration: none;
      font-weight: 500;
      padding: 10px 15px;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .nav-menu a:hover {
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
      color: #495057;
      transform: translateY(-2px);
    }

    .nav-menu a.active {
      background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
      color: white;
    }

    .main-content {
      min-height: calc(100vh - 120px);
    }

    .footer {
      background: linear-gradient(135deg, #495057 0%, #6c757d 100%);
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 50px;
    }

    .footer p {
      margin: 0;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 15px;
        padding: 15px;
      }
      
      .nav-menu {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
      }
    }
  `]
})
export class AppComponent {
  title = 'ecommerce-showcase';
}
