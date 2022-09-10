import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: any;

  constructor(
    private showDetails: ProductDetailsService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.product = this.showDetails.getProductDetails();
  }

  addToCart(product: IProduct) {
    this.cart.addToCart(product);
  }
}
