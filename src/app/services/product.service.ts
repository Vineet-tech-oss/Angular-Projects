import { Injectable } from '@angular/core';
import { PRODUCTS_DATA, Product } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = PRODUCTS_DATA;

  getAllProducts(): Product[] {
    return this.products;
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(product => product.isFeatured);
  }

  getProductsByCategory(category: string): Product[] {
    if (category === 'All') {
      return this.products;
    }
    return this.products.filter(product => product.category === category);
  }

  getDiscountedProducts(): Product[] {
    return this.products.filter(product => product.onSale);
  }

  getCategories(): string[] {
    const categories = ['All', ...new Set(this.products.map(product => product.category))];
    return categories;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
