import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.css'],
})
export class ConfirmFormComponent implements OnInit {
  @Output() name = new EventEmitter();
  fullName: string = '';
  address: string = '';
  cc_number: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    this.name.emit(this.fullName);
    this.router.navigate(['/confirm']);
  }
}
