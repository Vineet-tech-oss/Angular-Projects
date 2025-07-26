import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../data/data';
import { CompareService } from '../services/compare.service';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <div class="compare-container">
      <div class="compare-header">
        <h2>Product Comparison</h2>
        <button 
          *ngIf="compareProducts.length > 0"
          class="clear-btn"
          (click)="clearCompareList()">
          Clear All
        </button>
      </div>

      <div class="compare-table-container" *ngIf="compareProducts.length > 0; else emptyCompare">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Product</th>
              <th *ngFor="let product of compareProducts" class="product-header">
                <div class="product-info">
                  <img [src]="product.imageUrl" [alt]="product.name" class="product-image">
                  <h4>{{ product.name }}</h4>
                  <button class="remove-btn" (click)="onRemoveFromCompare(product.id)">Remove</button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="feature-label">Price</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                {{ product.price | currency:'INR':'symbol':'1.0-0' }}
              </td>
            </tr>
            <tr>
              <td class="feature-label">Brand</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                {{ product.specifications.brand }}
              </td>
            </tr>
            <tr>
              <td class="feature-label">Model</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                {{ product.specifications.model }}
              </td>
            </tr>
            <tr>
              <td class="feature-label">Category</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                {{ product.category }}
              </td>
            </tr>
            <tr>
              <td class="feature-label">Rating</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                ⭐ {{ product.rating.stars }} ({{ product.rating.reviews }} reviews)
              </td>
            </tr>
            <tr>
              <td class="feature-label">Stock</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                <span [ngClass]="{'in-stock': product.stockDetails.inStock, 'out-of-stock': !product.stockDetails.inStock}">
                  {{ product.stockDetails.inStock ? 'In Stock (' + product.stockDetails.quantity + ')' : 'Out of Stock' }}
                </span>
              </td>
            </tr>
            <tr>
              <td class="feature-label">Warranty</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                {{ product.specifications.warranty }}
              </td>
            </tr>
            <tr>
              <td class="feature-label">Sale Status</td>
              <td *ngFor="let product of compareProducts" class="feature-value">
                <span [ngClass]="{'on-sale': product.onSale, 'regular': !product.onSale}">
                  {{ product.onSale ? 'On Sale' : 'Regular Price' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ng-template #emptyCompare>
        <div class="empty-compare">
          <h3>No products to compare</h3>
          <p>Add products to compare their features side by side</p>
          <a routerLink="/products" class="shop-now-btn">Browse Products</a>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .compare-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .compare-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding: 0 20px;
    }

    .compare-header h2 {
      color: #495057;
      font-size: 28px;
      font-weight: 600;
      margin: 0;
    }

    .clear-btn {
      background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .clear-btn:hover {
      background: linear-gradient(135deg, #5a6268 0%, #495057 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);
    }

    .compare-table-container {
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow-x: auto;
    }

    .compare-table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;
    }

    .compare-table th,
    .compare-table td {
      padding: 15px;
      text-align: center;
      border: 1px solid #dee2e6;
    }

    .compare-table th {
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
      color: #495057;
      font-weight: 600;
    }

    .product-header {
      min-width: 200px;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .product-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      background-color: #f8f9fa;
    }

    .product-info h4 {
      margin: 0;
      font-size: 14px;
      color: #495057;
      font-weight: 600;
    }

    .remove-btn {
      background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
      transition: all 0.3s ease;
    }

    .remove-btn:hover {
      background: linear-gradient(135deg, #c82333 0%, #bd2130 100%);
      transform: translateY(-1px);
    }

    .feature-label {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      font-weight: 600;
      color: #495057;
      text-align: left;
      min-width: 120px;
    }

    .feature-value {
      background: white;
      color: #6c757d;
    }

    .in-stock {
      color: #28a745;
      font-weight: 500;
    }

    .out-of-stock {
      color: #dc3545;
      font-weight: 500;
    }

    .on-sale {
      color: #ffc107;
      font-weight: 500;
    }

    .regular {
      color: #6c757d;
    }

    .empty-compare {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      border-radius: 12px;
      max-width: 500px;
      margin: 50px auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .empty-compare h3 {
      color: #495057;
      font-size: 24px;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .empty-compare p {
      color: #6c757d;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .shop-now-btn {
      background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
      color: white;
      text-decoration: none;
      padding: 15px 30px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .shop-now-btn:hover {
      background: linear-gradient(135deg, #138496 0%, #117a8b 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(23, 162, 184, 0.3);
      text-decoration: none;
      color: white;
    }
  `]
})
export class CompareComponent implements OnInit {
  compareProducts: Product[] = [];

  constructor(private compareService: CompareService) {}

  ngOnInit(): void {
    this.compareProducts = this.compareService.getCompareList();
  }

  onRemoveFromCompare(productId: number): void {
    this.compareService.removeFromCompare(productId);
    this.compareProducts = this.compareService.getCompareList();
  }

  clearCompareList(): void {
    this.compareService.clearCompareList();
    this.compareProducts = [];
  }
}
