import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service'; // apne repo path ke hisaab se check kar lena
import { CartService } from '../services/cart.service';       // cart add karne ke liye

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="product; else loading">
      <div class="product-details-container">
        <img [src]="product.image" [alt]="product.name" class="product-image" />
        <div class="details-content">
          <h2>{{ product.name }}</h2>
          <div class="price">₹{{ product.price }}</div>
          <p class="description">{{ product.description }}</p>
          <button class="add-to-cart-btn" (click)="addToCart()">Add to Cart</button>
        </div>
      </div>
    </ng-container>
    <ng-template #loading>
      <div class="loading-text">Loading product details...</div>
    </ng-template>
  `,
  styles: [`
    /* (CSS same as before, omitted for brevity) */
  `]
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

 ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('Route param id:', id);
  this.product = this.productService.getProductById(id!);
  console.log('Loaded product:', this.product);

  if (!this.product) {
    this.router.navigate(['/products']);
  }


    else {
      this.router.navigate(['/products']);
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert(`"${this.product.name}" added to cart!`);
      this.router.navigate(['/cart']);  // Optional: cart page pe redirect
    }
  }
}
