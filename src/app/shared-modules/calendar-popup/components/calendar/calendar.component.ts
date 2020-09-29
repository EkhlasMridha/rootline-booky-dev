import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  selectedDate: any = new Date().getDate();
  constructor(private calendarControl: CalendarControlService) {}

  ngOnInit(): void {}

  onSelect(event) {
    this.calendarControl.updateDate(event);
  }
}
