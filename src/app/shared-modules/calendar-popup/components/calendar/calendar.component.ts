import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { CalendarToken, TOOLBAR_CALENDAR_DATA } from '../../calendar.config';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  selectedDate: any = new Date();
  constructor(
    private calendarControl: CalendarControlService,
    @Inject(TOOLBAR_CALENDAR_DATA) data: CalendarToken
  ) {
    this.selectedDate = data.config.data;
  }

  ngOnInit(): void {}

  onSelect(event) {
    this.calendarControl.updateDate(event);
  }
}
