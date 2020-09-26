import { Component, Input, OnInit } from '@angular/core';
import { DayModel } from '../../models/day.model';
import { Dictionary } from '../../models/dictionary.date';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() currentMonth: any;
  @Input() currentYear: any;
  @Input() date: any;

  days: any;
  weekNumber: number;
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  substituteDate: any[] = [null, null, null, null, null, null, null];
  currentDate: any = new Date().getDate();
  data: any;

  currentWeekData: any;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    console.log(this.currentMonth);
    this.data = this.calendarService.generateWeeks(
      this.currentMonth,
      this.currentYear
    );
    console.log(this.currentDate);
    console.log(this.data);
    this.currentWeekData = this.getCurrentWeek(this.date);
    console.log(this.currentWeekData);
    this.mapWeekDayToName(this.currentWeekData);
  }

  getCurrentWeek(curentDay: any) {
    let dayMap: DayModel[] = this.data.DayMap;
    console.log(dayMap);
    let item = dayMap.find((item) => {
      if (
        item.Day == curentDay &&
        item.month == this.currentMonth &&
        item.year == this.currentYear
      ) {
        return item;
      }
    });
    return this.getTotalWeekDataBy(item.weekNumber);
  }

  getTotalWeekDataBy(weekNumber: any) {
    let dayMap: DayModel[] = this.data.DayMap;
    let items = dayMap.filter((item) => {
      if (item.weekNumber == weekNumber) {
        return item;
      }
    });
    return items;
  }

  mapWeekDayToName(array: DayModel[]) {
    let date = array.map((item) => {
      this.substituteDate[item.WeekDay] = item;
      return this.substituteDate;
    });
    console.log(date[0]);
    return date[0];
  }
}
