import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProduct: IProduct[] = [];
  cartCnt: { id: number; itemCnt: number }[] = [];

  constructor() {}

  getCartProduct() {
    return this.cartProduct;
  }
  getCartCnt() {
    return this.cartCnt;
  }

  addToCart(product: IProduct, itemCnt: number) {
    const isFounded = this.cartProduct.find(
      (curItem) => curItem.id == product.id
    );

    if (isFounded) {
      this.cartCnt.forEach((item) => {
        if (item.id == product.id) item.itemCnt += +itemCnt;
      });
    } else {
      this.cartProduct.push(product);
      if (!itemCnt) itemCnt = 1;
      this.cartCnt.push({
        id: product.id,
        itemCnt: +itemCnt,
      });
    }
    console.log();

    return this.cartProduct;
  }
}
