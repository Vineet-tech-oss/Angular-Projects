import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../data/data';
import { ProductService } from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';
import { CompareService } from '../services/compare.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  template: `
    <div class="products-container">
      <h2>All Products</h2>
      
      <div class="filter-section">
        <h3>Filter by Category:</h3>
        <div class="category-buttons">
          <button 
            *ngFor="let category of categories"
            [ngClass]="{'active': selectedCategory === category}"
            class="category-btn"
            (click)="filterByCategory(category)">
            {{ category }}
          </button>
        </div>
      </div>

      <div class="products-grid" *ngIf="filteredProducts.length > 0; else noProducts">
        <app-product-card 
          *ngFor="let product of filteredProducts"
          [product]="product"
          [isInWishlist]="isInWishlist(product.id)"
          [isInCompare]="isInCompare(product.id)"
          (wishlistToggle)="onWishlistToggle($event)"
          (compareAdd)="onCompareAdd($event)">
        </app-product-card>
      </div>

      <ng-template #noProducts>
        <p class="no-products">No products found in this category</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .products-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .products-container h2 {
      color: #495057;
      text-align: center;
      margin-bottom: 30px;
      font-size: 28px;
      font-weight: 600;
    }

    .filter-section {
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .filter-section h3 {
      color: #495057;
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: 500;
    }

    .category-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    .category-btn {
      padding: 10px 20px;
      border: 2px solid #dee2e6;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      color: #495057;
      border-radius: 25px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .category-btn:hover {
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .category-btn.active {
      background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
      color: white;
      border-color: #5a6268;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .no-products {
      text-align: center;
      color: #6c757d;
      font-size: 18px;
      padding: 40px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border-radius: 8px;
      margin: 20px auto;
      max-width: 400px;
    }
  `]
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService,
    private compareService: CompareService
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts();
    this.filteredProducts = [...this.allProducts];
    this.categories = this.productService.getCategories();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = this.productService.getProductsByCategory(category);
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
