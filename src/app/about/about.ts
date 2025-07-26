import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="about-container">
      <div class="about-header">
        <h2>About Our E-Commerce Showcase</h2>
        <p>Learn more about our application and development team</p>
      </div>

      <div class="about-content">
        <div class="app-info">
          <h3>About the Application</h3>
          <p>
            This is a modern e-commerce showcase application built with Angular 20. 
            It demonstrates various Angular concepts including components, services, 
            routing, pipes, and directives.
          </p>
          
          <div class="features">
            <h4>Key Features:</h4>
            <ul>
              <li>Browse product catalog with category filters</li>
              <li>View featured and discounted products</li>
              <li>Add items to wishlist for later purchase</li>
              <li>Compare multiple products side by side</li>
              <li>Responsive design for all devices</li>
              <li>Clean and intuitive user interface</li>
            </ul>
          </div>

          <div class="technologies">
            <h4>Technologies Used:</h4>
            <ul>
              <li>Angular 20 (Standalone Components)</li>
              <li>TypeScript for type safety</li>
              <li>CSS3 with modern gradients</li>
              <li>Responsive Grid Layout</li>
              <li>Component-based architecture</li>
            </ul>
          </div>
        </div>

        <div class="team-info">
          <h3>Development Team</h3>
          <p>Meet the talented developers who created this application:</p>
          
          <div class="team-grid">
            <div class="team-member" *ngFor="let developer of developers">
              <h4>{{ developer.name }}</h4>
              <p class="role">{{ developer.role }}</p>
              <p class="expertise">{{ developer.expertise }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .about-header {
      text-align: center;
      padding: 40px 20px;
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      border-radius: 12px;
      margin-bottom: 30px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .about-header h2 {
      color: #495057;
      font-size: 32px;
      margin-bottom: 15px;
      font-weight: 700;
    }

    .about-header p {
      color: #6c757d;
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto;
    }

    .about-content {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      gap: 30px;
    }

    .app-info,
    .team-info {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .app-info h3,
    .team-info h3 {
      color: #495057;
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .app-info p,
    .team-info p {
      color: #6c757d;
      line-height: 1.6;
      margin-bottom: 20px;
      font-size: 16px;
    }

    .features,
    .technologies {
      margin: 25px 0;
    }

    .features h4,
    .technologies h4 {
      color: #495057;
      font-size: 18px;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .features ul,
    .technologies ul {
      list-style: none;
      padding: 0;
    }

    .features li,
    .technologies li {
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
      padding: 10px 15px;
      margin: 8px 0;
      border-radius: 8px;
      color: #495057;
      border-left: 4px solid #6c757d;
      transition: all 0.3s ease;
    }

    .features li:hover,
    .technologies li:hover {
      background: linear-gradient(135deg, #dee2e6 0%, #ced4da 100%);
      transform: translateX(5px);
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 25px;
    }

    .team-member {
      background: linear-gradient(135deg, #f1f3f4 0%, #e9ecef 100%);
      padding: 25px;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .team-member:hover {
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
      border-color: #6c757d;
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .team-member h4 {
      color: #495057;
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .role {
      color: #6c757d;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .expertise {
      color: #868e96;
      font-size: 14px;
      font-style: italic;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }
      
      .team-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  developers = [
    {
      name: 'Vineet Sharma',
      role: 'Frontend Developer',
      expertise: 'Angular, TypeScript, CSS'
    },
  ];
}
