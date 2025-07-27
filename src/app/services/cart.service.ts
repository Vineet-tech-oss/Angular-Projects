import { Injectable } from '@angular/core';
import { Product } from '../data/data';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: CartItem[] = [];

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product, qty: number = 1): void {
    const item = this.cart.find(i => i.product.id === product.id);
    if (item) {
      item.quantity += qty;
    } else {
      this.cart.push({ product, quantity: qty });
    }
  }

  updateQuantity(productId: number, qty: number): void {
    const item = this.cart.find(i => i.product.id === productId);
    if (item && qty > 0) {
      item.quantity = qty;
    } else if (item && qty === 0) {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(i => i.product.id !== productId);
  }

  clearCart(): void {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
