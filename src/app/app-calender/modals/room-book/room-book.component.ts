import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { BookedModel } from '../../models/booked.model';
import { BookingModel } from '../../models/booking.model';
import { CustomerModel } from 'src/app/shared-modules/models/customer.model';
import { RoomApiService } from '../../services/room-api.service';
import { debounceTime, filter, map, mergeMap, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import * as lds from 'lodash-es';
import { RootlineModalService } from 'rootline-dialog';

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

  startDate: Date;
  public bookedRooms: BookedModel[] = [];
  public customerListFilterCtrl: FormControl = new FormControl();
  customerList$: ReplaySubject<any[]> = new ReplaySubject(1);
  searching: boolean = false;

  get selectedCustomer(): FormControl {
    return this.bookingForm.get('customerId') as FormControl;
  }

  errorObservers$ = {
    customerId: '',
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
    private bookingService: RoomApiService,
    private iconService: IconService,
    private dialog: MatDialog,
    private caledarControl: CalendarControlService,
    private modalService: RootlineModalService
  ) {
    this.data = data;
    this.iconService.loadIcons(['user']);
  }

  ngOnInit(): void {
    this.bookedDates = this.bookedDates.bind(this);
    this.errorDialogEvent = this.errorDialogEvent.bind(this);

    this.bookedRooms = lds.cloneDeep(this.data.data.bookedRooms);
    this.startDate = new Date(
      this.data.date.year,
      this.data.date.month,
      this.data.date.Day
    );
    this.bookingForm = this.createBookingForm();
    this.formService.handleFormError(
      this.bookingForm,
      this.errorObservers$,
      this.errorTypeGenerator
    );
    this.getCustomerList().subscribe(
      (res) => {
        this.customerList$.next(res);
      },
      (error) => {
        this.searching = false;
      }
    );
  }

  getCustomerList() {
    return this.customerListFilterCtrl.valueChanges.pipe(
      filter((search) => !!search),
      tap(() => (this.searching = true)),
      debounceTime(200),
      mergeMap((res) => {
        return this.bookingService
          .getCustomerByquery(res)
          .pipe(tap(() => (this.searching = false)));
      })
    );
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'customerId':
        return 'Please select a customer';
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
        customerId: [null, Validators.required],
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

  createCustomer() {
    this.dialog.open(CreateCustomerComponent, {
      width: 'auto',
      disableClose: true,
      panelClass: 'modal-body',
    });
  }

  onSubmit() {
    if (!this.bookingForm.valid || this.bookingForm.errors != null) {
      this.formService.checkFormStatus(this.bookingForm);
      return;
    }
    const result = lds.cloneDeep(this.bookingForm.value);
    result.customerId = this.bookingForm.value.customerId.id;

    let payload = this.prepareBookingPayload(result);

    let dialogRef = this.modalService.openConfirmationModal({
      isLoader: true,
      loaderText: 'Creating booking ...',
      disableClose: true,
    });

    this.bookingService.createBooking(payload).subscribe(
      (res) => {
        this.caledarControl.updateCaledar(res);
        this.dialogRef.close();
        dialogRef.close();
        this.modalService.dispose();
      },
      (err) => {
        this.dialogRef.close();
        dialogRef.close();
        this.modalService.dispose();
        this.errorModal();
      }
    );
  }

  errorModal() {
    this.modalService.openConfirmationModal({
      matIcon: 'error_outline',
      type: 'error',
      headerText: 'Booking creation failed',
      description:
        'Check if there is already a booking exists in this range or if you entered everything correctly or not.',
      primaryButtonName: 'Okay',
      modalWidth: '550px',
      primaryEvent: this.errorDialogEvent,
    });
  }

  errorDialogEvent(event) {
    this.modalService.dispose();
  }

  prepareBookingPayload(data: any) {
    let booking = this.prepareBookingModel(data);
    let bookedModel: Partial<BookedModel> = {};
    bookedModel.bookingId = booking.id;
    bookedModel.roomId = this.data.data.id;
    booking.bookedRoom = [];
    booking.bookedRoom.push(bookedModel);

    return booking;
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
    booking.customerId = data.customerId;
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
    let enabled: boolean = true;
    if (caledarDate.getTime() <= new Date(this.startDate).getTime()) {
      enabled = false;
      return enabled;
    } else {
      enabled = true;
    }
    if (this.bookedRooms.length == 0) return enabled;
    this.bookedRooms.map((room) => {
      let from = new Date(room.booking.book_From);
      let to = new Date(room.booking.leave_At);
      let currentDate = new Date(caledarDate).getTime();

      if (currentDate > from.getTime() && currentDate < to.getTime()) {
        enabled = false;
      }
    });
    return enabled;
  }
}
