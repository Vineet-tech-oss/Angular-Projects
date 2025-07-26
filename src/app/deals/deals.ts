import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../data/data';
import { ProductService } from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';
import { CompareService } from '../services/compare.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductCardComponent
  ],
  template: `
    <div class="deals-container">
      <div class="deals-header">
        <h2>🔥 Special Deals & Offers</h2>
        <p>Don't miss out on these amazing discounts!</p>
      </div>

      <div class="products-grid" *ngIf="saleProducts.length > 0; else noDeals">
        <app-product-card 
          *ngFor="let product of saleProducts"
          [product]="product"
          [isInWishlist]="isInWishlist(product.id)"
          [isInCompare]="isInCompare(product.id)"
          (wishlistToggle)="onWishlistToggle($event)"
          (compareAdd)="onCompareAdd($event)">
        </app-product-card>
      </div>

      <ng-template #noDeals>
        <div class="no-deals">
          <h3>No deals available right now</h3>
          <p>Check back later for exciting offers</p>
          <a routerLink="/products" class="browse-btn">Browse All Products</a>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .deals-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .deals-header {
      text-align: center;
      padding: 40px 20px;
      background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
      border-radius: 12px;
      margin-bottom: 30px;
      box-shadow: 0 4px 8px rgba(255, 193, 7, 0.2);
      border: 2px solid #ffeaa7;
    }

    .deals-header h2 {
      color: #856404;
      font-size: 32px;
      margin-bottom: 15px;
      font-weight: 700;
    }

    .deals-header p {
      color: #856404;
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto;
      font-weight: 500;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .no-deals {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      border-radius: 12px;
      max-width: 500px;
      margin: 50px auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .no-deals h3 {
      color: #495057;
      font-size: 24px;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .no-deals p {
      color: #6c757d;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .browse-btn {
      background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);
      color: #212529;
      text-decoration: none;
      padding: 15px 30px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .browse-btn:hover {
      background: linear-gradient(135deg, #e0a800 0%, #d39e00 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 193, 7, 0.3);
      text-decoration: none;
      color: #212529;
    }
  `]
})
export class DealsComponent implements OnInit {
  saleProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService,
    private compareService: CompareService
  ) {}

  ngOnInit(): void {
    this.saleProducts = this.productService.getDiscountedProducts();
  }

  onWishlistToggle(product: Product): void {
    this.wishlistService.toggleWishlist(product);
  }

  onCompareAdd(product: Product): void {
    this.compareService.addToCompare(product);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistService.isInWishlist(productId);
  }

  isInCompare(productId: number): boolean {
    return this.compareService.isInCompare(productId);
  }
}
