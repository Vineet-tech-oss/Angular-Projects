import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  { 
    path: 'products', 
    loadComponent: () => import('./products/products').then(m => m.ProductsComponent)
  },
  { 
    path: 'wishlist', 
    loadComponent: () => import('./wishlist/wishlist').then(m => m.WishlistComponent)
  },
  { 
    path: 'compare', 
    loadComponent: () => import('./compare/compare').then(m => m.CompareComponent)
  },
  { 
    path: 'deals', 
    loadComponent: () => import('./deals/deals').then(m => m.DealsComponent)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about').then(m => m.AboutComponent)
  },
  { path: '**', redirectTo: '/home' }
];
