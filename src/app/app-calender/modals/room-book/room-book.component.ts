import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import * as _ from 'lodash';
import { BookedModel } from '../../models/booked.model';
import { BookingModel } from '../../models/booking.model';
import { CustomerModel } from 'src/app/shared-modules/models/customer.model';
import { RoomApiService } from '../../services/room-api.service';

@Component({
  selector: 'app-room-book',
  templateUrl: './room-book.component.html',
  styleUrls: ['./room-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookComponent implements OnInit {
  data: any;
  customer: any;
  bookingForm: FormGroup;
  public static bookedRooms: BookedModel[] = [];

  errorObservers$ = {
    toDate: '',
    adults: '',
    children: '',
    chf: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private dialogRef: MatDialogRef<RoomBookComponent>,
    private bookingService: RoomApiService
  ) {
    this.data = data.room;
    this.customer = data.customer;
  }

  ngOnInit(): void {
    RoomBookComponent.bookedRooms = _.cloneDeep(this.data.data.bookedRooms);
    console.log(this.data);
    this.bookingForm = this.createBookingForm();
    this.formService.handleFormError(
      this.bookingForm,
      this.errorObservers$,
      this.errorTypeGenerator
    );
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'toDate':
        return 'Selcet a date';
      case 'adults':
        return 'Set number of adults';
      case 'chf':
        return 'Set amount';
      case 'bookingForm':
        return `This room is for ${this.data.data.capacity} person only`;
    }
  }

  createBookingForm() {
    return this.formBuilder.group(
      {
        toDate: ['', Validators.required],
        adults: [
          0,
          Validators.compose([Validators.required, Validators.min(1)]),
        ],
        children: [0],
        chf: ['', Validators.required],
      },
      {
        validators: [
          this.validateRoomCapacity(
            'adults',
            'children',
            this.data.data.capacity
          ),
        ],
      }
    );
  }

  onSubmit() {
    console.log(this.data);
    if (!this.bookingForm.valid && this.bookingForm.errors != null) {
      this.formService.checkFormStatus(this.bookingForm);
      return;
    }
    const result = _.cloneDeep(this.bookingForm.value);
    let payload = this.prepareBookingPayload(result);
    console.log(payload);
    // this.bookingService.createBookingWithCustomer(payload).subscribe((res) => {
    //   console.log(res);
    // });
  }

  prepareBookingPayload(data: any) {
    let booking = this.prepareBookingModel(data);
    let customer = this.prepareCustomerModel(data);
    customer.booking = [];
    customer.booking.push(booking);
    let bookedModel: Partial<BookedModel> = {};
    bookedModel.bookingId = booking.id;
    bookedModel.roomId = this.data.data.id;
    booking.bookedRoom = [];
    booking.bookedRoom.push(bookedModel);
    console.log(customer);
    return customer;
  }

  prepareBookingModel(data: any) {
    let booking: Partial<BookingModel> = {};
    booking.book_From = new Date(
      this.data.date.year,
      this.data.date.month,
      this.data.date.Day
    ).toLocaleDateString('en');
    booking.leave_At = new Date(data.toDate).toLocaleDateString('en');
    booking.adults = data.adults;
    booking.children = data.children;
    booking.amount = data.chf;
    booking.stateId = 1;
    booking.booked_Date = new Date();
    return booking;
  }

  prepareCustomerModel(data: any): Partial<CustomerModel> {
    let customer: Partial<CustomerModel> = {};

    customer.firstname = data.firstname;
    customer.lastname = data.lastname;

    return customer;
  }

  close() {
    this.dialogRef.close();
  }

  watchDateRangeErrorState(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      if (
        formGroup.controls.dateRange.value[value1] == '' ||
        formGroup.controls.dateRange.value[value1] == null
      ) {
        return formGroup.controls.dateRange.setErrors({ required: true });
      }
    };
  }

  validateRoomCapacity(ctrl1: string, ctrl2: string, roomCapacity: number) {
    return (formGroup: FormGroup) => {
      const control1 = formGroup.controls[ctrl1];
      const control2 = formGroup.controls[ctrl2];

      let totalLoad = control1.value + control2.value;
      if (totalLoad > roomCapacity) {
        return { errorCapcity: true };
      }
    };
  }

  bookedDates(caledarDate: Date): boolean {
    let disabled: boolean = true;
    if (RoomBookComponent.bookedRooms.length == 0) return disabled;
    RoomBookComponent.bookedRooms.map((room) => {
      let from = new Date(room.booking.book_From);
      let to = new Date(room.booking.leave_At);
      let currentDate = new Date(caledarDate).getTime();

      if (currentDate > from.getTime() && currentDate < to.getTime()) {
        disabled = false;
      }
    });
    return disabled;
  }
}
