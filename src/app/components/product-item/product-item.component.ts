import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() products: any;

  constructor(
    private showProduct: ProductDetailsService,
    private cart: CartService
  ) {}

  ngOnInit(): void {}
  productDetails(product: IProduct) {
    this.showProduct.showProductDetails(product);
  }
  addToCart(product: IProduct) {
    this.cart.addToCart(product);

    alert('Product Addedd');
  }
}
