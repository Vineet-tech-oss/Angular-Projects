import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../data/data';
import { HighlightDirective } from '../highlight';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective
  ],
  template: `
    <div class="product-card" appHighlight>
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
        <p class="price">{{ product.price | currency:'INR':'symbol':'1.0-0' }}</p>
        
        <div class="rating">
          <span *ngFor="let star of getStarArray()" class="star">⭐</span>
          <span class="rating-text">({{ product.rating.reviews }} reviews)</span>
        </div>

        <div class="product-actions">
          <button 
            *ngIf="showWishlistButton"
            class="btn wishlist-btn"
            [ngClass]="{'active': isInWishlist}"
            (click)="onWishlistToggle()">
            {{ isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist' }}
          </button>

          <button 
            *ngIf="showCompareButton && !isInCompare"
            class="btn compare-btn"
            (click)="onCompareAdd()">
            Add to Compare
          </button>

          <button 
            *ngIf="isInCompare"
            class="btn remove-compare-btn"
            (click)="onRemoveFromCompare()">
            Remove from Compare
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      border: 1px solid #e9ecef;
      border-radius: 12px;
      padding: 20px;
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
    }

    .product-image {
      position: relative;
      text-align: center;
      margin-bottom: 15px;
    }

    .product-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      background-color: #f8f9fa;
    }

    .sale-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: linear-gradient(45deg, #dc3545, #c82333);
      color: white;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: bold;
    }

    .stock-status {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(40, 167, 69, 0.9);
      color: white;
      padding: 3px 8px;
      border-radius: 10px;
      font-size: 11px;
    }

    .stock-status.out-of-stock {
      background: rgba(220, 53, 69, 0.9);
    }

    .product-info {
      text-align: center;
    }

    .product-info h3 {
      color: #495057;
      margin: 10px 0;
      font-size: 18px;
      font-weight: 600;
    }

    .brand {
      color: #868e96;
      font-size: 14px;
      margin: 5px 0;
    }

    .price {
      color: #28a745;
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0;
    }

    .rating {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    .star {
      font-size: 16px;
    }

    .rating-text {
      color: #6c757d;
      font-size: 12px;
    }

    .product-actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 15px;
    }

    .btn {
      padding: 10px 15px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .wishlist-btn {
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
      color: #495057;
      border: 1px solid #ced4da;
    }

    .wishlist-btn:hover {
      background: linear-gradient(135deg, #dee2e6 0%, #ced4da 100%);
      transform: translateY(-2px);
    }

    .wishlist-btn.active {
      background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
      color: white;
    }

    .compare-btn {
      background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
      color: white;
    }

    .compare-btn:hover {
      background: linear-gradient(135deg, #5a6268 0%, #495057 100%);
      transform: translateY(-2px);
    }

    .remove-compare-btn {
      background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);
      color: #212529;
    }

    .remove-compare-btn:hover {
      background: linear-gradient(135deg, #e0a800 0%, #d39e00 100%);
      transform: translateY(-2px);
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showWishlistButton: boolean = true;
  @Input() showCompareButton: boolean = true;
  @Input() isInWishlist: boolean = false;
  @Input() isInCompare: boolean = false;

  @Output() wishlistToggle = new EventEmitter<Product>();
  @Output() compareAdd = new EventEmitter<Product>();
  @Output() removeFromWishlist = new EventEmitter<number>();
  @Output() removeFromCompare = new EventEmitter<number>();

  onWishlistToggle(): void {
    this.wishlistToggle.emit(this.product);
  }

  onCompareAdd(): void {
    this.compareAdd.emit(this.product);
  }

  onRemoveFromWishlist(): void {
    this.removeFromWishlist.emit(this.product.id);
  }

  onRemoveFromCompare(): void {
    this.removeFromCompare.emit(this.product.id);
  }

  getStarArray(): number[] {
    return Array(Math.floor(this.product.rating.stars)).fill(0);
  }
}
