import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: any;

  constructor(private showDetails: ProductDetailsService) {}

  ngOnInit(): void {
    this.product = this.showDetails.getProductDetails();
  }
}
