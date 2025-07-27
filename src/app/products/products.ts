// src/app/components/products/products.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Product } from '../data/data';
import { ProductService } from '../services/product.service';
import { WishlistService } from '../services/wishlist.service';
import { CompareService } from '../services/compare.service';
import { CartService } from '../services/cart.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ProductCardComponent],
  template: `
    <div class="products-container">

      <!-- Search Bar + Autocomplete Suggestions -->
      <div class="search-container">
        <input
          type="text"
          class="search-bar"
          [(ngModel)]="searchTerm"
          (input)="updateSuggestions()"
          (keydown)="onKeyDown($event)"
          placeholder="Search products by name..."
          aria-label="Search products"
          autocomplete="off"
        />
        <ul *ngIf="suggestions.length > 0" class="suggestions-list" role="listbox" aria-label="Search suggestions">
          <li
            *ngFor="let suggestion of suggestions; let idx = index"
            [class.active]="idx === activeSuggestionIndex"
            (click)="selectSuggestion(suggestion)"
            role="option"
            [attr.aria-selected]="idx === activeSuggestionIndex"
            tabindex="-1"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>

      <!-- Category Tabs -->
      <div class="category-cards" role="list" aria-label="Product categories">
        <div
          *ngFor="let category of categories"
          class="category-card"
          [ngClass]="{'active': selectedCategory === category}"
          (click)="onCategorySelect(category)"
          role="listitem"
          tabindex="0"
          (keydown.enter)="onCategorySelect(category)"
          [attr.aria-selected]="selectedCategory === category"
        >
          <h3>{{ category }}</h3>
        </div>
      </div>

      <!-- Default Random Products -->
      <section *ngIf="!categorySelected" aria-live="polite" class="random-products-section">
        <h4>Discover Products</h4>
        <div class="products-grid" *ngIf="filteredProducts.length > 0; else noRandomProducts">
          <app-product-card
            *ngFor="let product of filteredProducts"
            [product]="product"
            [isInWishlist]="isInWishlist(product.id)"
            [isInCompare]="isInCompare(product.id)"
            (wishlistToggle)="onWishlistToggle($event)"
            (compareAdd)="onCompareAdd($event)"
            (addToCart)="onAddToCart($event)">
          </app-product-card>
        </div>
        <ng-template #noRandomProducts>
          <p class="no-products">No products found.</p>
        </ng-template>
      </section>

      <!-- Loading Spinner -->
      <section *ngIf="categorySelected && isLoading" class="loading-container" aria-busy="true" aria-live="assertive">
        <div class="spinner"></div>
        <p>Loading products...</p>
      </section>

      <!-- Category Products -->
      <section *ngIf="categorySelected && !isLoading" aria-live="polite" class="category-products-section">
        <h4>{{ selectedCategory }} Products</h4>
        <div class="products-grid" *ngIf="filteredProducts.length > 0; else noCategoryProducts">
          <app-product-card
            *ngFor="let product of filteredProducts"
            [product]="product"
            [isInWishlist]="isInWishlist(product.id)"
            [isInCompare]="isInCompare(product.id)"
            (wishlistToggle)="onWishlistToggle($event)"
            (compareAdd)="onCompareAdd($event)"
            (addToCart)="onAddToCart($event)">
          </app-product-card>
        </div>
        <ng-template #noCategoryProducts>
          <p class="no-products">No products found in this category.</p>
        </ng-template>
      </section>

    </div>
  `,
  styles: [`
    .products-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      min-height: 100vh;
      padding: 20px;
      box-sizing: border-box;
    }

    /* Search Bar and Suggestions */
    .search-container {
      position: relative;
      max-width: 400px;
      margin: 0 auto 20px auto;
    }

    .search-bar {
      width: 100%;
      padding: 10px 15px;
      border-radius: 8px;
      border: 1.5px solid #ced4da;
      font-size: 16px;
      outline-color: #6c757d;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }
    .search-bar:focus {
      border-color: #495057;
    }

    .suggestions-list {
      position: absolute;
      top: 100%;
      left: 0; right: 0;
      background: white;
      border: 1px solid #ced4da;
      border-top: none;
      max-height: 180px;
      overflow-y: auto;
      border-radius: 0 0 8px 8px;
      z-index: 1000;
      list-style: none;
      padding: 0;
      margin: 0;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .suggestions-list li {
      padding: 8px 12px;
      cursor: pointer;
      font-size: 16px;
      color: #495057;
      transition: background-color 0.2s ease;
    }
    .suggestions-list li:hover,
    .suggestions-list li.active {
      background-color: #5a6268;
      color: white;
    }

    /* Category Cards Style */
    .category-cards {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 25px;
    }
    .category-card {
      cursor: pointer;
      padding: 20px 30px;
      background: #f1f3f4;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      font-size: 18px;
      font-weight: 600;
      color: #495057;
      user-select: none;
      min-width: 140px;
      text-align: center;
      outline: none;
      transition: background 0.3s ease, color 0.3s ease;
    }
    .category-card.active, .category-card:hover, .category-card:focus {
      background: #5a6268;
      color: white;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      transform: translateY(-4px);
    }

    /* Product Grid */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Loading Spinner */
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      min-height: 120px;
    }
    .spinner {
      width: 32px;
      height: 32px;
      border: 3px solid #dee2e6;
      border-top: 3px solid #5a6268;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }

    /* No Products Message */
    .no-products {
      color: #868e96;
      text-align: center;
      margin: 36px 0 24px;
      font-size: 16px;
    }
    h4 {
      margin: 18px 0 12px 0;
      color: #5a6268;
    }
  `]
})
export class ProductsComponent implements OnInit {

  allProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  categorySelected = false;

  filteredProducts: Product[] = [];
  suggestions: string[] = [];
  activeSuggestionIndex: number = -1;
  searchTerm: string = '';

  isLoading = false;
  RANDOM_COUNT = 4;

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService,
    private compareService: CompareService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts();
    this.categories = this.productService.getCategories();
    this.setRandomProducts();
  }

  setRandomProducts(): void {
    this.categorySelected = false;
    this.selectedCategory = '';
    const shuffled = [...this.allProducts].sort(() => Math.random() - 0.5);
    this.filteredProducts = shuffled.slice(0, this.RANDOM_COUNT);
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.categorySelected = true;
    this.isLoading = true;
    this.clearSearch();

    setTimeout(() => {
      this.filteredProducts = this.allProducts.filter(p => category === 'All' || p.category === category);
      this.isLoading = false;
      this.clearSuggestions();
    }, 600);
  }

  updateSuggestions(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) { this.clearSuggestions(); this.onSearch(); return; }
    this.suggestions = this.allProducts
      .map(p => p.name)
      .filter(name => name.toLowerCase().includes(term))
      .slice(0, 5);
    this.activeSuggestionIndex = -1;
    this.onSearch();
  }

  selectSuggestion(name: string): void {
    this.searchTerm = name;
    this.clearSuggestions();
    if (this.categorySelected) {
      this.filteredProducts = this.allProducts.filter(p =>
        p.name.toLowerCase() === name.toLowerCase() &&
        (this.selectedCategory === 'All' || p.category === this.selectedCategory));
    } else {
      this.filteredProducts = this.allProducts.filter(p => p.name.toLowerCase() === name.toLowerCase());
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.suggestions.length === 0) return;
    if (event.key === 'ArrowDown') {
      this.activeSuggestionIndex = (this.activeSuggestionIndex + 1) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.activeSuggestionIndex = (this.activeSuggestionIndex - 1 + this.suggestions.length) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'Enter' && this.activeSuggestionIndex >= 0) {
      this.selectSuggestion(this.suggestions[this.activeSuggestionIndex]);
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.clearSuggestions();
    }
  }

  clearSuggestions() {
    this.suggestions = [];
    this.activeSuggestionIndex = -1;
  }

  clearSearch() {
    this.searchTerm = '';
  }

  onSearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.clearSuggestions();
      if (this.categorySelected) {
        this.filteredProducts = this.allProducts.filter(p =>
          this.selectedCategory === 'All' || p.category === this.selectedCategory);
      } else {
        this.setRandomProducts();
      }
      return;
    }
    if (this.categorySelected) {
      this.filteredProducts = this.allProducts
        .filter(p => this.selectedCategory === 'All' || p.category === this.selectedCategory)
        .filter(product => this.matchesSearch(product, term));
    } else {
      this.filteredProducts = this.allProducts.filter(p => this.matchesSearch(p, term));
    }
  }

  matchesSearch(product: Product, term: string): boolean {
    if (!term) return true;
    return product.name.toLowerCase().includes(term) ||
      product.specifications.brand.toLowerCase().includes(term) ||
      product.specifications.model.toLowerCase().includes(term);
  }

  // Wishlist toggle logic
  onWishlistToggle(product: Product): void {
    if (this.isInWishlist(product.id)) {
      this.wishlistService.removeFromWishlist(product.id);
    } else {
      this.wishlistService.addToWishlist(product);
    }
  }

  // Compare toggle logic
  onCompareAdd(product: Product): void {
    if (this.isInCompare(product.id)) {
      this.compareService.removeFromCompare(product.id);
    } else {
      this.compareService.addToCompare(product);
    }
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlistService.isInWishlist(productId);
  }

  isInCompare(productId: number): boolean {
    return this.compareService.isInCompare(productId);
  }
}
