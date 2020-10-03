import { Component, Inject, OnInit } from '@angular/core';
import { BookedModel } from 'src/app/app-calender/models/booked.model';
import { TypeColor } from 'src/app/app-calender/models/type.color';
import { TimelineControlService } from 'src/app/shared-services/timeline-control.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import {
  DescriptionToken,
  DESCRIPTION_POPUP_CONFIG,
  FilePreviewDialogConfig,
} from '../../description.config';
import { DateModel } from '../../models/date.model';
import { UpdateModel } from '../../models/update.model';
import { DescriptionApiService } from '../../services/description-api.service';
import * as _ from 'lodash';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookedRoomModel } from '../../models/booked-room.model';
import { BookingModel } from 'src/app/app-calender/models/booking.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  popConfig: FilePreviewDialogConfig;
  data: BookedModel;
  months: string[];
  bookingDate: any;
  nights: any;
  amount: any;
  totalCost: number;
  isLoading: boolean;
  customer: any;
  bookedDate: any;

  typeColor: string;
  currentState: any;
  stateList: any;
  timelineData: any;
  stateColors: any[];

  constructor(
    @Inject(DESCRIPTION_POPUP_CONFIG) token: DescriptionToken,
    private descriptionAPI: DescriptionApiService,
    private timelineControler: TimelineControlService
  ) {
    this.popConfig = token.config;
    this.data = token.config.data.booked;
    this.timelineData = token.config.data;
    this.months = DomainService.domains.Months;
    this.stateColors = DomainService.domains.StateColors;
  }

  ngOnInit(): void {
    this.initContent();
  }

  editDescription() {
    console.log('edit');
  }

  deleteBooking() {
    let booked: BookingModel;
    let bookedRoom: BookedRoomModel = { bookingId: null, roomId: null };
    booked = this.timelineData.booked.booking;
    bookedRoom.bookingId = this.timelineData.booked.bookingId;
    bookedRoom.roomId = this.timelineData.booked.roomId;
    booked.bookedRoom = [];
    booked.bookedRoom.push(bookedRoom);

    this.descriptionAPI.deleteBookedRoom(booked).subscribe((res) => {
      this.timelineControler.deleteTimeline(this.timelineData);
    });
    console.log(booked);
  }

  initContent() {
    this.getDescriptionData();
    this.bookingDate = this.getBookingDate();
    this.nights = this.getNights();
    this.amount = this.data.booking.amount.toPrecision(2);
    this.totalCost = this.calculateTotalCost(this.nights, this.amount);
    this.bookedDate = this.getBookedDate(this.data.booking.booked_Date);
    this.bookedDate = this.createDateFormate(this.bookedDate);
    this.typeColor = this.getTypeColor(this.data.booking.state);
  }

  calculateTotalCost(nights: number, amount: number) {
    return nights * amount;
  }

  getDescriptionData() {
    let obsArray = [
      this.descriptionAPI.getAvailableStates().pipe(
        tap((res) => {
          this.stateList = res;
        })
      ),
      this.descriptionAPI.getCustomer(this.data.booking.customerId).pipe(
        tap((res) => {
          this.customer = res;
        })
      ),
    ];

    this.isLoading = true;
    forkJoin(obsArray).subscribe((res) => {
      this.currentState = this.verifyBookingState(
        this.data.booking.state,
        this.stateList
      );
      this.isLoading = false;
    });
  }

  private verifyBookingState(state: any, stateList: any[]) {
    let currentState: string = null;
    stateList.map((st) => {
      if (st.id == state.id) {
        currentState = st;
      }
    });
    return currentState;
  }

  getNights() {
    let from = new Date(this.data.booking.book_From).getTime();
    let to = new Date(this.data.booking.leave_At).getTime();

    let oneDay = 1000 * 60 * 60 * 24;

    let count = Math.abs(to - from);
    let nights = count / oneDay;

    return nights;
  }

  getBookingDate() {
    let dateFrom: Partial<DateModel> = {};
    let dateTo: Partial<DateModel> = {};

    dateFrom = this.getBookedDate(this.data.booking.book_From);
    dateTo = this.getBookedDate(this.data.booking.leave_At);

    let fromDate = dateFrom.day + '. ' + dateFrom.month;
    let toDate = this.createDateFormate(dateTo);

    return { from: fromDate, to: toDate };
  }

  getBookedDate(date: any) {
    let processedDate = new Date(date);

    let finalDate: Partial<DateModel> = {};

    finalDate.day = processedDate.getDate();
    finalDate.month = this.months[processedDate.getMonth()];
    finalDate.year = processedDate.getFullYear();

    return finalDate;
  }

  createDateFormate(date: Partial<DateModel>) {
    let bookedAt = date.day + '. ' + date.month + ' ' + date.year;
    return bookedAt;
  }

  getTypeColor(state: any) {
    if (state.id >= this.stateColors.length) {
      return this.stateColors[0];
    }

    return this.stateColors[state.id];
  }

  updateState(state) {
    let info: Partial<UpdateModel> = {};

    let updateData = _.cloneDeep(this.timelineData);
    updateData.booked.booking.state = state;
    updateData.booked.booking.stateId = state.id;

    info.current = updateData;
    info.previous = this.data;

    this.descriptionAPI
      .updateBookingState(info.current.booked.booking)
      .subscribe((res) => {
        console.log(info.current.booked.booking);
        this.typeColor = this.getTypeColor(state);
        this.timelineControler.updateTimeline(info);
      });
  }
}
