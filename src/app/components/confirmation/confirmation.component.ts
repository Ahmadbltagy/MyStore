import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  data: { name: any; totalPrice: any } = { name: '', totalPrice: -1 };
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.data = {
      name: this.cart.getConfitmData()?.name,
      totalPrice: this.cart.getConfitmData()?.totalPrice,
    };
  }
}
