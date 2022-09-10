import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: IProduct[] = [];
  totalPrice: number = 0;
  constructor(private cartProduct: CartService) {}

  ngOnInit(): void {
    this.products = this.cartProduct.getCartProduct();
    this.products.forEach((prd) => (this.totalPrice += prd.price));
  }
  submitForm() {}
}
