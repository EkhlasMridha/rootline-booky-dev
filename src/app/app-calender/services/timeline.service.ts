import { Injectable } from '@angular/core';
import { BookedModel } from '../models/booked.model';
import { BookingModel } from '../models/booking.model';
import { DayModel } from '../models/day.model';
import { RoomModel } from '../models/room.model';

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

  getTimelineStartEnd(room: RoomModel, weekDays: DayModel[]) {
    let dates = this.generateDateArrayFrom(weekDays);
    let bookings = this.getBookingByWeek(room.bookedRooms, weekDays, dates);
    console.log(bookings);
  }

  getBookingByWeek(
    booked: BookedModel[],
    weekdays: DayModel[],
    dateArray: string[]
  ) {
    let currentBookings: BookedModel[] = [];
    booked.forEach((item) => {
      let fromDate = new Date(item.booking.book_From).toLocaleDateString('en');
      let toDate = new Date(item.booking.leave_At).toLocaleDateString('en');

      if (dateArray.includes(fromDate) || dateArray.includes(toDate)) {
        currentBookings.push(item);
      } else if (fromDate < dateArray[0] && toDate > dateArray[0]) {
        currentBookings.push(item);
      }
    });

    return currentBookings;
  }

  generateDateArrayFrom(weekDays: DayModel[]) {
    let dateArray: string[] = [];
    weekDays.forEach((date) => {
      if (date != null) {
        let refinedDate = new Date(
          date.year,
          date.month,
          date.Day
        ).toLocaleDateString('en');
        dateArray.push(refinedDate);
      }
    });
    return dateArray;
  }
}
