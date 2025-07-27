// src/app/components/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // For ngModel (two-way binding)

import { Product } from '../data/data';
import { ProductService } from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';
import { CompareService } from '../services/compare.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardComponent
  ],
  template: `
    <div class="home-container">

      <div class="hero-section">
        <h2>Welcome to Our E-Commerce Showcase</h2>
        <p>Discover amazing products with the best deals</p>
      </div>

      <!-- Search Input -->
      <input
        type="text"
        placeholder="Search featured products..."
        [(ngModel)]="searchTerm"
        (input)="filterFeaturedProducts()"
        class="search-input"
      />

      <div class="featured-section">
        <h2>Featured Products</h2>
        <div class="products-grid" *ngIf="filteredFeaturedProducts.length > 0; else noProducts">
          <app-product-card 
            *ngFor="let product of filteredFeaturedProducts"
            [product]="product"
            [isInWishlist]="isInWishlist(product.id)"
            [isInCompare]="isInCompare(product.id)"
            (wishlistToggle)="onWishlistToggle($event)"
            (compareAdd)="onCompareAdd($event)">
          </app-product-card>
        </div>

        <ng-template #noProducts>
          <p class="no-products">No featured products found.</p>
        </ng-template>
      </div>

    </div>
  `,
  styles: [`
    .home-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      min-height: 100vh;
      padding: 20px;
    }

    .hero-section {
      text-align: center;
      padding: 40px 20px;
      background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
      border-radius: 12px;
      margin-bottom: 30px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .hero-section h2 {
      color: #495057;
      font-size: 32px;
      margin-bottom: 15px;
      font-weight: 700;
    }

    .hero-section p {
      color: #6c757d;
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Search input styles */
    .search-input {
      width: 100%;
      max-width: 400px;
      padding: 10px 15px;
      margin: 0 auto 20px auto;
      display: block;
      border-radius: 8px;
      border: 1.5px solid #ced4da;
      font-size: 16px;
      outline-color: #6c757d;
      transition: border-color 0.3s ease;
    }

    .search-input:focus {
      border-color: #495057;
    }

    .featured-section h2 {
      color: #495057;
      text-align: center;
      margin: 30px 0;
      font-size: 28px;
      font-weight: 600;
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

    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: 1fr;
        padding: 0 10px;
      }
      
      .hero-section h2 {
        font-size: 24px;
      }
      
      .hero-section p {
        font-size: 16px;
      }
    }
  `]
})
export class HomeComponent implements OnInit {

  featuredProducts: Product[] = [];
  filteredFeaturedProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService,
    private compareService: CompareService
  ) {}

  ngOnInit(): void {
    this.featuredProducts = this.productService.getFeaturedProducts();
    this.filteredFeaturedProducts = [...this.featuredProducts];
  }

  filterFeaturedProducts(): void {
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredFeaturedProducts = this.featuredProducts.filter(product => {
      if (!term) return true;

      return product.name.toLowerCase().includes(term) ||
             product.specifications.brand.toLowerCase().includes(term) ||
             product.specifications.model.toLowerCase().includes(term);
    });
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
