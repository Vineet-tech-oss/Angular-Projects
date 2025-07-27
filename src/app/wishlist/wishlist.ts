import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../data/data';
import { WishlistService } from '../services/wishlist.service';
import { CompareService } from '../services/compare.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductCardComponent
  ],
  template: `
    <div class="wishlist-container">
      <div class="wishlist-header">
        <h2>My Wishlist</h2>
        <button 
          *ngIf="wishlistProducts.length > 0"
          class="clear-btn"
          (click)="clearWishlist()">
          Clear All
        </button>
      </div>

      <div class="products-grid" *ngIf="wishlistProducts.length > 0; else emptyWishlist">
        <app-product-card 
          *ngFor="let product of wishlistProducts"
          [product]="product"
          [showWishlistButton]="false"
          [isInCompare]="isInCompare(product.id)"
          (removeFromWishlist)="onRemoveFromWishlist(product.id)"
          (compareAdd)="onCompareAdd($event)">
        </app-product-card>
      </div>

      <ng-template #emptyWishlist>
        <div class="empty-wishlist">
          <h3>Your wishlist is empty</h3>
          <p>Add some products to your wishlist to see them here</p>
          <a routerLink="/products" class="shop-now-btn">Shop Now</a>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .wishlist-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .wishlist-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding: 0 20px;
    }

    .wishlist-header h2 {
      color: #495057;
      font-size: 28px;
      font-weight: 600;
      margin: 0;
    }

    .clear-btn {
      background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
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
      background: linear-gradient(135deg, #c82333 0%, #bd2130 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .empty-wishlist {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      border-radius: 12px;
      max-width: 500px;
      margin: 50px auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .empty-wishlist h3 {
      color: #495057;
      font-size: 24px;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .empty-wishlist p {
      color: #6c757d;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .shop-now-btn {
      background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
      background: linear-gradient(135deg, #20c997 0%, #17a2b8 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
      text-decoration: none;
      color: white;
    }
  `]
})
export class WishlistComponent implements OnInit {
  wishlistProducts: Product[] = [];

  constructor(
    private wishlistService: WishlistService,
    private compareService: CompareService
  ) {}

  ngOnInit(): void {
    this.wishlistProducts = this.wishlistService.getWishlist();
  }

  onRemoveFromWishlist(productId: number): void {
    this.wishlistService.removeFromWishlist(productId);
    this.wishlistProducts = this.wishlistService.getWishlist();
  }

  onCompareAdd(product: Product): void {
    this.compareService.addToCompare(product);
  }

  isInCompare(productId: number): boolean {
    return this.compareService.isInCompare(productId);
  }

  clearWishlist(): void {
    this.wishlistService.clearWishlist();
    this.wishlistProducts = [];
  }
  
}
