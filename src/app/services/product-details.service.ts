import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  product?: IProduct;

  constructor() {}
  showProductDetails(product: IProduct) {
    return (this.product = product);
  }
  getProductDetails() {
    return this.product;
  }
}
