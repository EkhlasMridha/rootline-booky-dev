import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BookedModel } from 'src/app/app-calender/models/booked.model';
import { TypeColor } from 'src/app/app-calender/models/type.color';
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
  bookedDate: any;

  typeColor: string;
  constructor(
    @Inject(DESCRIPTION_POPUP_CONFIG) token: DescriptionToken,
    private descriptionAPI: DescriptionApiService
  ) {
    this.popConfig = token.config;
    this.data = token.config.data.booked;
    this.months = DomainService.domains.Months;
  }

  ngOnInit(): void {
    this.initContent();
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

  initContent() {
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
    this.bookedDate = this.getBookedDate(this.data.booking.booked_Date);
    this.typeColor = this.getTypeColor(this.data.booking.state.statename);
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

  getBookedDate(date: any) {
    let processedDate = new Date(date);

    let finalDate: Partial<DateModel> = {};

    finalDate.day = processedDate.getDate();
    finalDate.month = this.months[processedDate.getMonth()];
    finalDate.year = processedDate.getFullYear();

    let bookedAt =
      finalDate.day + '. ' + finalDate.month + ' ' + finalDate.year;

    console.log(bookedAt);

    return bookedAt;
  }

  getTypeColor(type: string) {
    switch (type.toLowerCase()) {
      case 'paid':
        return new TypeColor().paid;
      case 'checked-in':
        return new TypeColor().checkedIn;
      case 'booked':
        return new TypeColor().booked;
      default:
        return new TypeColor().noMatch;
    }
  }
}
