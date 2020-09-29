import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BookedModel } from '../models/booked.model';
import { BookingModel } from '../models/booking.model';
import { DayModel } from '../models/day.model';
import { RoomModel } from '../models/room.model';
import { TimelineModel } from '../models/timeline.model';

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

  getTimelineStartEnd(room: RoomModel, weekDays: DayModel[]): TimelineModel[] {
    let dates = this.generateDateArrayFrom(weekDays);
    let bookings = this.getBookingsByWeek(room.bookedRooms, dates);
    let timelines = this.generateStartEndDate(bookings, dates);

    return timelines;
  }

  generateStartEndDate(bookings: BookedModel[], dateArray: string[]) {
    let timeline: TimelineModel = { startDate: {}, endDate: {} };
    let timelines: TimelineModel[] = [];

    bookings.forEach((book) => {
      let bookFrom = new Date(book.booking.book_From).toLocaleDateString('en');
      let bookTo = new Date(book.booking.leave_At).toLocaleDateString('en');
      timeline.booked = book;
      timeline.startDate.date = new Date(bookFrom);
      timeline.endDate.date = new Date(bookTo);

      if (bookFrom < dateArray[0]) {
        timeline.startDate.date = new Date(dateArray[0]);
        timeline.startDate.isOutside = true;
      }

      if (bookTo > dateArray[dateArray.length - 1]) {
        timeline.endDate.date = new Date(dateArray[dateArray.length - 1]);
        timeline.endDate.isOutside = true;
      }

      let copyTimeline: TimelineModel = { startDate: {}, endDate: {} };
      copyTimeline.booked = Object.assign({}, timeline.booked);
      copyTimeline.startDate = Object.assign({}, timeline.startDate);
      copyTimeline.endDate = Object.assign({}, timeline.endDate);

      timelines.push(copyTimeline);
    });

    return timelines;
  }

  getBookingsByWeek(booked: BookedModel[], dateArray: string[]) {
    let currentBookings: BookedModel[] = [];
    booked.forEach((item) => {
      let fromDate = new Date(item.booking.book_From);
      let toDate = new Date(item.booking.leave_At);

      let localFrom = fromDate.toLocaleDateString('en');
      let localTo = fromDate.toLocaleDateString('en');

      let firstDay = new Date(dateArray[0]).getTime();

      if (dateArray.includes(localFrom) || dateArray.includes(localTo)) {
        currentBookings.push(item);
      } else if (fromDate.getTime() < firstDay && toDate.getTime() > firstDay) {
        currentBookings.push(item);
      }
      console.log(toDate);
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
