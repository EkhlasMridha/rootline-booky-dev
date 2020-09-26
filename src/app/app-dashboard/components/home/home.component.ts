import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  currentDate: any = new Date();
  month: any = 7;
  year = 2020;
  date = 1;
  constructor(private iconService: IconService) {
    // let date = formatDate(new Date(), 'dd-MM-yyyy', 'en');
    // console.log(date);
  }

  ngOnInit(): void {}
}
