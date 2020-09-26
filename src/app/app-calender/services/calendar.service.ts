import { Injectable } from '@angular/core';
import { DayModel } from '../models/day.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}
  getDaysOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  generateWeeks(month: any, year: any) {
    let totalDays = this.getDaysOfMonth(year, month);
    let weekCount: number = 1;
    let dayMap: DayModel[] = [];
    let day: DayModel = { WeekDay: null, Day: null };

    for (let i = 0; i < totalDays; ++i) {
      let weekDay = new Date(year, month, i + 1).getDay();
      if (weekDay == 0) {
        weekCount = weekCount + 1;
      }
      day.WeekDay = weekDay;
      day.Day = i + 1;
      day.weekNumber = weekCount;
      day.month = month;
      day.year = year;
      dayMap.push(this.cloneObject(day));
    }

    return { DayMap: dayMap, TotalWeeks: weekCount };
  }

  cloneObject(obj: any) {
    let object = Object.assign({}, obj);
    return object;
  }
}
