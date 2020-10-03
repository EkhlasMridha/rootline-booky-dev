import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarControlService {
  private previousPage: Subject<any> = new Subject<any>();
  private nextPage: Subject<any> = new Subject<any>();
  private todayPage: Subject<any> = new Subject<any>();
  private updateCalenderDate: Subject<any> = new Subject<any>();
  private toolbarDate: Subject<any> = new Subject<any>();
  private dateChange: Subject<any> = new Subject<any>();
  private dateTransmit: Subject<any> = new Subject<any>();
  private calendarUpate: Subject<any> = new Subject<any>();

  previousObserver = this.previousPage.asObservable();
  nextObserver = this.nextPage.asObservable();
  todayObserver = this.todayPage.asObservable();
  updateDateObserver$ = this.updateCalenderDate.asObservable();
  toolbarDateObserver$ = this.toolbarDate.asObservable();
  dateChangeObserver$ = this.dateChange.asObservable();
  dateReciever$ = this.dateTransmit.asObservable();
  calendarUpdate$ = this.calendarUpate.asObservable();
  constructor() {}

  previousWeek() {
    this.previousPage.next();
  }

  nextWeek() {
    this.nextPage.next();
  }

  today() {
    this.todayPage.next();
  }

  updateDate(date: any) {
    this.updateCalenderDate.next(date);
  }

  updateToolbardate(date: any) {
    this.toolbarDate.next(date);
  }

  changeDate() {
    this.dateChange.next();
  }

  transmitDateFromToolbar(date: any) {
    this.dateTransmit.next(date);
  }

  updateCaledar(data: any) {
    this.calendarUpate.next(data);
  }
}
