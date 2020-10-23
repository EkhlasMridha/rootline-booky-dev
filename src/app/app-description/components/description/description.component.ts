import { Component, Inject, OnInit } from '@angular/core';
import { BookedModel } from 'src/app/app-calender/models/booked.model';
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
import { cloneDeep,round} from 'lodash-es';

import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookedRoomModel } from '../../models/booked-room.model';
import { BookingModel } from 'src/app/app-calender/models/booking.model';
import { MatDialog } from '@angular/material/dialog';
import { EditBookingComponent } from '../../modals/edit-booking/edit-booking.component';
import { EditCustomerComponent } from '../../modals/edit-customer/edit-customer.component';
import { RootlineModalService } from 'rootline-dialog';
import { GuestModel } from 'src/app/app-calender/models/guest.model';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  popConfig: FilePreviewDialogConfig;
  data: BookedModel;
  bookingModel: BookingModel;
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
  editBookingData: any;
  stateColors: any[];
  guestList: Partial<GuestModel>[];

  constructor(
    @Inject(DESCRIPTION_POPUP_CONFIG) token: DescriptionToken,
    private descriptionAPI: DescriptionApiService,
    private timelineControler: TimelineControlService,
    private dialog: MatDialog,
    private confirmationModal: RootlineModalService
  ) {
    this.popConfig = token.config;
    this.data = token.config.data.booked;
    this.timelineData = cloneDeep(token.config.data);
    this.editBookingData = token.config.data;
    this.months = DomainService.domains.Months;
    this.stateColors = DomainService.domains.StateColors;
  }

  ngOnInit(): void {
    this.tryAgain = this.tryAgain.bind(this);
    this.initContent();
    this.executeDelete = this.executeDelete.bind(this);
  }

  editBooking() {
    let dialogRef = this.dialog.open(EditBookingComponent, {
      width: 'auto',
      data: this.editBookingData,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        // this.editBookingData.booked.booking = res;
        this.bookingModel = res;
        this.bookingModel.state = this.data.booking.state;
        this.data.booking = this.bookingModel;
        this.initBookingInfo();
        this.updateTimelineData();
      }
    });
  }

  updateTimelineData() {
    let pre = cloneDeep(this.timelineData.booked);
    this.timelineData.booked = this.data;
    let cur = this.timelineData;

    this.timelineControler.updateTimeline({ current: cur, previous: pre });
  }

  editCustomer() {
    let ref = this.dialog.open(EditCustomerComponent, {
      width: 'auto',
      data: this.customer,
    });

    let subscription = ref.afterClosed().subscribe((res) => {
      if (res) {
        this.customer = res;
      }
      subscription.unsubscribe();
    });
  }

  deleteBooking() {
    this.confirmationModal.openConfirmationModal({
      headerText: 'Are you sure to delete this booking?',
      description:
        'This will delete the booking related information for this customer. But the customer detail will be still available',
      matIcon: 'warning',
      type: 'warn',
      modalWidth: '500px',
      primaryButtonName: 'Yes',
      secondaryButtonName: 'No',
      primaryEvent: this.executeDelete,
      secondaryEvent: this.deleteCancel,
    });
  }

  deleteCancel(event: MouseEvent) {
    this.confirmationModal.dispose();
  }

  executeDelete(event) {
    let booked: BookingModel;
    let bookedRoom: BookedRoomModel = { bookingId: null, roomId: null };
    booked = this.timelineData.booked.booking;
    bookedRoom.bookingId = this.timelineData.booked.bookingId;
    bookedRoom.roomId = this.timelineData.booked.roomId;
    booked.bookedRoom = [];
    booked.bookedRoom.push(bookedRoom);

    let dialogRef = this.confirmationModal.openConfirmationModal({
      isLoader: true,
      loaderText: 'Deleting booking ...',
      disableClose: true,
    });

    this.descriptionAPI.deleteBookedRoom(booked).subscribe((res) => {
      this.timelineControler.deleteTimeline(this.timelineData);
      dialogRef.close();
      this.confirmationModal.dispose();
    });
  }

  initContent() {
    this.getDescriptionData();
    this.initBookingInfo();
  }

  initBookingInfo() {
    this.bookingDate = this.getBookingDate();
    this.nights = this.getNights();
    this.amount = round(this.data.booking.amount, 3);
    this.totalCost = this.calculateTotalCost(this.nights, this.amount);
    this.bookedDate = this.getBookedDate(this.data.booking.booked_Date);
    this.bookedDate = this.createDateFormate(this.bookedDate);
    this.typeColor = this.getTypeColor(this.data.booking.state);
  }

  calculateTotalCost(nights: number, amount: number) {
    let total = round(nights * amount, 3);
    return total;
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
      this.descriptionAPI.getGuestByBooking(this.data.booking.id).pipe(tap(res => {
        this.guestList = res;
        this.analyzeGuestList(res);
      }))
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

  analyzeGuestList(guestList:Partial<GuestModel>[]) {
    let adults = 0;
    let childrens = 0;

    guestList.forEach(guest => {
      if (guest.age > 15) {
        adults += 1;
      } else {
        childrens += 1;
      }
    })

    this.data.booking.adults = adults;
    this.data.booking.children = childrens;
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

    let updateData = cloneDeep(this.timelineData);
    updateData.booked.booking.state = state;
    updateData.booked.booking.stateId = state.id;

    info.current = updateData;
    info.previous = this.data;

    let ref = this.confirmationModal.openConfirmationModal({
      isLoader: true,
      loaderText: 'Updating state ...',
      disableClose: true,
    });

    this.descriptionAPI
      .updateBookingState(info.current.booked.booking)
      .subscribe(
        (res) => {
          this.typeColor = this.getTypeColor(state);
          this.timelineControler.updateTimeline(info);
          ref.close();
          this.confirmationModal.dispose();
        },
        (err) => {
          ref.close();
          this.confirmationModal.dispose();
          this.errorModal();
        }
      );
  }

  errorModal() {
    this.confirmationModal.openConfirmationModal({
      matIcon: 'error_outline',
      type: 'error',
      headerText: 'Error ocurred while updating state',
      primaryButtonName: 'Try again',
      modalWidth: '550px',
      primaryEvent: this.tryAgain,
    });
  }

  tryAgain(event) {
    this.confirmationModal.dispose();
  }
}
