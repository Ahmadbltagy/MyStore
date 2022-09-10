import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService
      .getProductList()
      .subscribe((data) => (this.productList = data));
  }
}
