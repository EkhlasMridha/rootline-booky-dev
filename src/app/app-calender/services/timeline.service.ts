import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  constructor() {}

  getRoomCell(room: number, date: number) {
    let view = document.getElementById(room.toString() + '-' + date.toString());
    return view;
  }

  getTimeline(roomId: number, bookingId: number) {
    let view = document.getElementById(
      'timeline-' + bookingId.toString() + '-' + roomId.toString()
    );
    return view;
  }
}
