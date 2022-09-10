import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProduct: IProduct[] = [];
  constructor() {}

  getCartProduct() {
    console.log(this.cartProduct);

    return this.cartProduct;
  }

  addToCart(product: IProduct) {
    this.cartProduct.push(product);

    console.log(this.cartProduct);

    return this.cartProduct;
  }
}
