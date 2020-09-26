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
  month: any = 8;
  year = new Date().getFullYear();
  date = 25;
  constructor(private iconService: IconService) {}

  ngOnInit(): void {}
}
