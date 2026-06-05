import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'product-details',
    loadComponent: () => import('./pages/product-details/product-details.page').then( m => m.ProductDetailsPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./pages/orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'product-details',
    loadComponent: () => import('./features/product-details/product-details.page').then( m => m.ProductDetailsPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./features/orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.page').then( m => m.RegisterPage)
  },
];
