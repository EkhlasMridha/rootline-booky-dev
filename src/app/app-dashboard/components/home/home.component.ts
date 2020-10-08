import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  currentDate: any = new Date();
  month: any = new Date().getMonth();
  year = new Date().getFullYear();
  date = new Date().getDate();

  selectedDate: any;

  constructor() {}

  ngOnInit(): void {}
}
