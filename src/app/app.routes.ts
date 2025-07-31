import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: 'home', 
    loadComponent: () => import('./home/home').then(m => m.HomeComponent),
    canActivate: [AuthGuard]   // Protected route
  },
  { 
    path: 'products', 
    loadComponent: () => import('./products/products').then(m => m.ProductsComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'wishlist', 
    loadComponent: () => import('./wishlist/wishlist').then(m => m.WishlistComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'compare', 
    loadComponent: () => import('./compare/compare').then(m => m.CompareComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'deals', 
    loadComponent: () => import('./deals/deals').then(m => m.DealsComponent),
    canActivate: [AuthGuard]
  },
  {
  path: 'products/:id',
  loadComponent: () => import('./product-details/product-details').then(m => m.ProductDetailsComponent),
  canActivate: [AuthGuard] // agar protected rakhna hai
},
  { 
    path: 'about', 
    loadComponent: () => import('./about/about').then(m => m.AboutComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then(m => m.CartComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadComponent: () => import('./auth/auth').then(m => m.AuthComponent), 
    pathMatch: 'full'
    // Usually login/signup routes don't need guard
  },
];
