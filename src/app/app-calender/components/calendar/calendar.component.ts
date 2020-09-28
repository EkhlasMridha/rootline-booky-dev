import { Component, Input, OnInit } from '@angular/core';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { DayModel } from '../../models/day.model';
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
  NULL = null;
  weekNumber: number;
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  substituteDate: any[] = [null, null, null, null, null, null, null];
  currentDate: any = new Date().getDate();
  data: any;

  currentWeekData: DayModel[];
  currenWeekNumber: any;
  totalWeeeks: number;

  constructor(
    private calendarService: CalendarService,
    private caledarControl: CalendarControlService
  ) {}

  ngOnInit(): void {
    this.generateCustomCalendar(this.date, this.currentMonth, this.currentYear);
    console.log(this.currenWeekNumber);
    this.previousWeek();
    this.nextWeek();
    this.today();
    this.updateCalendar();
  }

  generateCustomCalendar(date: number, month: number, year: number) {
    this.data = this.generateCalender(month, year);
    this.currentWeekData = this.generateDisplayWeek(date);
    this.currenWeekNumber = this.currentWeekData[0].weekNumber;
    this.totalWeeeks = this.data.TotalWeeks;
  }

  updateCalendar() {
    this.caledarControl.updateDateObserver$.subscribe((res) => {
      let dateValue = new Date(res);
      this.currentMonth = dateValue.getMonth();
      this.currentYear = dateValue.getFullYear();
      this.substituteDate = this.getNullArray(this.substituteDate.length);
      this.generateCustomCalendar(
        dateValue.getDate(),
        dateValue.getMonth(),
        dateValue.getFullYear()
      );
    });
  }

  previousWeek() {
    this.caledarControl.previousObserver.subscribe((res) => {
      this.goToPreviousWeek();
    });
  }

  nextWeek() {
    this.caledarControl.nextObserver.subscribe((res) => {
      this.goToNextWeek();
    });
  }

  today() {
    this.caledarControl.todayObserver.subscribe((res) => {
      this.gotToCurrentDate();
    });
  }

  gotToCurrentDate() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.substituteDate = this.getNullArray(this.substituteDate.length);
    this.generateCustomCalendar(
      new Date().getDate(),
      new Date().getMonth(),
      new Date().getFullYear()
    );
  }

  goToPreviousWeek() {
    if (this.currenWeekNumber > 1) {
      this.currenWeekNumber = this.currenWeekNumber - 1;
      this.changeWeek(this.currenWeekNumber);
    }
  }

  goToNextWeek() {
    if (this.currenWeekNumber < this.totalWeeeks) {
      this.currenWeekNumber += 1;
      this.changeWeek(this.currenWeekNumber);
    }
  }

  changeWeek(weekNumber: number) {
    let weekData = this.getTotalWeekDataBy(weekNumber);
    this.substituteDate = this.getNullArray(this.substituteDate.length);
    this.substituteDate = this.mapWeekDayToName(weekData);
  }

  generateCalender(month: number, year: number) {
    let data = this.calendarService.generateWeeks(month, year);
    console.log(data);
    return data;
  }

  generateDisplayWeek(date: number) {
    let weekData = this.getCurrentWeek(date);
    this.mapWeekDayToName(weekData);
    return weekData;
  }

  isCurrentDate(substituteDate: any) {
    let pageDate = new Date(
      this.currentYear,
      this.currentMonth,
      substituteDate
    );
    if (pageDate.toLocaleDateString() == new Date().toLocaleDateString()) {
      return true;
    }
    return false;
  }

  getCurrentWeek(curentDay: any) {
    let dayMap: DayModel[] = this.data.DayMap;

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

    return date[0];
  }

  getNullArray(length: number) {
    let array: any[] = [];
    for (let i = 0; i < length; ++i) {
      array.push(null);
    }
    return array;
  }
}
