// src/app/components/cart/cart.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-container">
      <h2>Your Shopping Cart</h2>
      <table *ngIf="cart.length > 0; else emptyCart" class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of cart">
            <td>{{ item.product.name }}</td>
            <td>
              <input type="number" min="1" [value]="item.quantity" (change)="onQtyChange(item, $event)">
            </td>
            <td>₹{{ item.product.price }}</td>
            <td>₹{{ item.product.price * item.quantity }}</td>
            <td><button (click)="removeFromCart(item.product.id)">Remove</button></td>
          </tr>
        </tbody>
      </table>
      <div *ngIf="cart.length > 0" class="cart-summary">
        <strong>Total: ₹{{ cartService.getTotal() }}</strong>
        <button (click)="clearCart()">Clear Cart</button>
      </div>
      <ng-template #emptyCart>
        <p>Your cart is empty.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .cart-container {
      padding: 20px;
      max-width: 900px;
      margin: 20px auto;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
    }
    th, td {
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #dee2e6;
    }
    input[type=number] {
      width: 60px;
      padding: 5px;
      font-size: 16px;
    }
    button {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #b02a37;
    }
    .cart-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
    }
  `]
})
export class CartComponent {
  cart: CartItem[];

  constructor(public cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  onQtyChange(item: CartItem, event: any) {
    const qty = +event.target.value;
    if (qty > 0) {
      this.cartService.updateQuantity(item.product.id, qty);
    } else {
      this.removeFromCart(item.product.id);
    }
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }
}
