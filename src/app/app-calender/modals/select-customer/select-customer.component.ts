import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectCustomerComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {}

  ngOnInit(): void {}
}
