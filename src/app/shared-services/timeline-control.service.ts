import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimelineControlService {
  private timelineUpdate: Subject<any> = new Subject<any>();
  private timelineDelete: Subject<any> = new Subject<any>();

  timlineUpdate$ = this.timelineUpdate.asObservable();
  timelineDelete$ = this.timelineDelete.asObservable();

  constructor() {}

  updateTimeline(data: any) {
    this.timelineUpdate.next(data);
  }

  deleteTimeline(data: any) {
    this.timelineDelete.next(data);
  }
}
