import { Component, Inject, OnInit } from '@angular/core';
import { BookedModel } from 'src/app/app-calender/models/booked.model';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import {
  DescriptionToken,
  DESCRIPTION_POPUP_CONFIG,
  FilePreviewDialogConfig,
} from '../../description.config';
import { DateModel } from '../../models/date.model';
import { DescriptionApiService } from '../../services/description-api.service';

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
  constructor(
    @Inject(DESCRIPTION_POPUP_CONFIG) token: DescriptionToken,
    private descriptionAPI: DescriptionApiService
  ) {
    this.popConfig = token.config;
    this.data = token.config.data.booked;
    this.months = DomainService.domains.Months;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.descriptionAPI
      .getCustomer(this.data.booking.customerId)
      .subscribe((res) => {
        this.customer = res;
        this.isLoading = false;
      });
    this.bookingDate = this.getBookingDate();
    this.nights = this.getNights();
    this.amount = this.data.booking.amount.toPrecision(2);
    this.totalCost = this.calculateTotalCost(this.nights, this.amount);
  }

  editDescription() {
    console.log('edit');
  }

  deleteBooking() {
    console.log('delete');
  }

  calculateTotalCost(nights: number, amount: number) {
    return nights * amount;
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
    let from = new Date(this.data.booking.book_From);
    let to = new Date(this.data.booking.leave_At);
    let dateFrom: Partial<DateModel> = {};
    let dateTo: Partial<DateModel> = {};

    let monthFrom = from.getMonth();
    let monthTo = to.getMonth();

    dateFrom.month = this.months[monthFrom];
    dateFrom.day = from.getDate();
    dateFrom.year = from.getFullYear();

    dateTo.month = this.months[monthTo];
    dateTo.day = to.getDate();
    dateTo.year = to.getFullYear();

    let fromDate = dateFrom.day + '. ' + dateFrom.month;
    let toDate = dateTo.day + '. ' + dateTo.month + ' ' + dateTo.year;

    return { from: fromDate, to: toDate };
  }
}
