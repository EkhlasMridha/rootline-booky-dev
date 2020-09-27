import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarControlService {
  private previousPage: Subject<any> = new Subject<any>();
  private nextPage: Subject<any> = new Subject<any>();
  private todayPage: Subject<any> = new Subject<any>();

  previousObserver = this.previousPage.asObservable();
  nextObserver = this.nextPage.asObservable();
  todayObserver = this.todayPage.asObservable();
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
}
