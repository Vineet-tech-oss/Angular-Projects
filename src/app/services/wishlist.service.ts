import { Injectable } from '@angular/core';
import { Product } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: Product[] = [];

  getWishlist(): Product[] {
    return this.wishlist;
  }

  addToWishlist(product: Product): void {
    if (!this.isInWishlist(product.id)) {
      this.wishlist.push(product);
    }
  }

  removeFromWishlist(productId: number): void {
    this.wishlist = this.wishlist.filter(p => p.id !== productId);
  }

  isInWishlist(productId: number): boolean {
    return this.wishlist.some(p => p.id === productId);
  }

  clearWishlist(): void {
    this.wishlist = [];
  }

  // Naya toggle method
  toggleWishlist(product: Product): void {
    if (this.isInWishlist(product.id)) {
      this.removeFromWishlist(product.id);
    } else {
      this.addToWishlist(product);
    }
  }
}
