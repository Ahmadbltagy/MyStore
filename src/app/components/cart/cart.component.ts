import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  itemCnt: { id: number; itemCnt: number }[] = [];
  constructor(private cartProduct: CartService, private router: Router) {}

  calPrice() {
    this.totalPrice = 0;
    this.products.forEach((prd, idx) => {
      this.totalPrice += +this.itemCnt[idx].itemCnt * +prd.price;
    });
  }

  ngOnInit(): void {
    this.products = this.cartProduct.getCartProduct();
    this.itemCnt = this.cartProduct.getCartCnt();
    this.calPrice();
  }
  submitForm(data: any) {
    this.router.navigate(['/confirm']);
  }
  orderChange(cnt: any, id: any) {
    this.itemCnt.forEach((item) => {
      if (item.id == id) item.itemCnt = cnt.value;
    });
    this.calPrice();
  }
}
