import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Login from '../views/Login.vue';
import Cart from '../views/Cart.vue';
import Wishlist from '../views/Wishlist.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Products
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
  ]
})

export default router
