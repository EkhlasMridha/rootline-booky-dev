import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { formatDate } from '@angular/common';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';

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

  constructor(
    private iconService: IconService,
    private calendar: CalendarControlService
  ) {}

  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
  }
}
