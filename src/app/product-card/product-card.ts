import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../data/data';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <div class="product-image">
        <img [src]="product.imageUrl" [alt]="product.name" />
        <div class="sale-badge" *ngIf="product.onSale">SALE</div>
        <div class="stock-status" [ngClass]="{'out-of-stock': !product.stockDetails.inStock}">
          {{ product.stockDetails.inStock ? 'In Stock' : 'Out of Stock' }}
        </div>
      </div>
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p class="brand">{{ product.specifications.brand }}</p>
        <p class="price">₹{{ product.price }}</p>
        <div class="rating">
          <span *ngFor="let star of getStarArray()">⭐</span>
          <span class="rating-text">({{ product.rating.reviews }} reviews)</span>
        </div>
        <div class="product-actions">
          <button *ngIf="showWishlistButton" class="btn wish-btn" [class.active]="isInWishlist" (click)="onWishlist()">
            <span *ngIf="isInWishlist">❤️</span>
            <span *ngIf="!isInWishlist">🤍</span>
            Wishlist
          </button>
          <button class="btn compare-btn" [class.active]="isInCompare" (click)="onCompare()">
            <span>🔄</span> Compare
          </button>
          <button class="btn cart-btn"
                  [disabled]="!product.stockDetails.inStock"
                  (click)="onAddToCart()">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: #f7f8fa;
      border: 1.5px solid #e9ecef;
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 4px 8px #0001;
      transition: all 0.2s;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 400px;
    }
    .product-image {
      position: relative;
      text-align: center;
      margin-bottom: 16px;
    }
    .product-image img {
      width: 100%;
      max-height: 180px;
      object-fit: cover;
      border-radius: 8px;
      background-color: #f8f9fa;
    }
    .sale-badge {
      position: absolute; top: 10px; right: 10px;
      background: #dc3545; color: white; padding: 4px 12px;
      border-radius: 18px; font-size: 12px;
    }
    .stock-status {
      position: absolute; bottom: 10px; left: 10px;
      background: rgba(40,167,69,0.95); color: white; padding: 2px 8px;
      border-radius: 10px; font-size: 11px;
    }
    .stock-status.out-of-stock { background: rgba(220, 53, 69, 0.9); }
    .product-info { text-align: center; }
    .product-info h3 {
      color: #495057; margin: 12px 0 3px; font-size: 20px; font-weight: 600;
    }
    .brand { color: #868e96; font-size: 14px; margin: 2px 0 7px 0; }
    .price { color: #28a745; font-size: 20px; font-weight: bold; margin: 6px 0 9px 0;}
    .rating { margin: 8px 0 10px; }
    .rating-text { color: #6c757d; font-size: 12px; }
    .product-actions { margin-top: 16px; display: flex; flex-direction: column; gap: 8px;}
    .btn { border: none; border-radius: 8px; padding: 8px 0; font-size: 15px;
      font-weight: 500; cursor: pointer; transition: background 0.3s; width: 100%; }
    .wish-btn { background: #fff0f4; color: #d6336c; }
    .wish-btn.active, .wish-btn:hover { background: #d6336c; color: #fff; }
    .compare-btn {
  background: #edf5ff;
  color: #1971c2;
  transition: background 0.3s, color 0.3s;
}

/* Jab sirf hover ho aur active na ho */
.compare-btn:hover {
  background: #1971c2;
  color: #fff;
}

/* Jab sirf active ho chahe hover ho ya na ho */
.compare-btn.active {
  background: #38b000 !important; /* your desired green or any color */
  color: #fff !important;
}
    .cart-btn {
      background: linear-gradient(135deg, #0d6efd 0%, #0e78f9 100%);
      color: white; margin-top: 3px;
    }
    .cart-btn[disabled] { background: #adb5bd; color:#f8f9fa; cursor:not-allowed; }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isInWishlist: boolean = false;
  @Input() isInCompare: boolean = false;
 @Input() showWishlistButton: boolean = true; 
  @Output() wishlistToggle = new EventEmitter<Product>();
  @Output() compareAdd = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();

  onWishlist(): void { this.wishlistToggle.emit(this.product); }
  onCompare(): void { this.compareAdd.emit(this.product); }
  onAddToCart(): void { this.addToCart.emit(this.product); }

  getStarArray(): any[] { return Array(Math.floor(this.product.rating.stars)); }
}
