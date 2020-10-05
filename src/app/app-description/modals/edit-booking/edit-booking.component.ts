import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { RootlineModalService } from 'rootline-dialog';
import { BookingModel } from 'src/app/app-calender/models/booking.model';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { DescriptionApiService } from '../../services/description-api.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss'],
})
export class EditBookingComponent implements OnInit {
  data: any;
  booking: BookingModel;
  editBooking: FormGroup;
  error$ = {
    book_From: '',
    leave_At: '',
    adults: '',
    children: '',
    amount: '',
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<EditBookingComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private apiService: DescriptionApiService,
    private modalService: ConfirmationStatusService
  ) {
    this.data = data;
  }

  ngOnInit(): void {
    this.tryAgain = this.tryAgain.bind(this);
    this.editBooking = this.createForm();
    this.formService.handleFormError(
      this.editBooking,
      this.error$,
      this.errorGenerator
    );
  }

  errorGenerator(type: string, owner: string) {
    switch (owner) {
      case 'book_From':
        return 'Required field';
      case 'leave_At':
        return 'Required field';
      case 'adults':
        return 'Invalid input';
      case 'amount':
        return 'Invalid amount';
    }
  }

  createForm() {
    return this.formBuilder.group({
      book_From: [this.data.booked.booking.book_From, Validators.required],
      leave_At: [this.data.booked.booking.leave_At, Validators.required],
      adults: [
        this.data.booked.booking.adults,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      children: [this.data.booked.booking.children],
      amount: [this.data.booked.booking.amount, Validators.required],
    });
  }

  onSubmit() {
    if (!this.editBooking.valid) {
      this.formService.checkFormStatus(this.editBooking);
      return;
    }

    const result = Object.assign({}, this.editBooking.value);

    this.booking = result;
    let preparedData = this.prepareBookingModel(this.booking);

    let ref = this.modalService.openConfirmationModal({
      isLoader: true,
      loaderText: 'Updating booking ...',
      disableClose: true,
    });

    this.apiService
      .updateBooking(preparedData, this.data.booked.roomId)
      .subscribe(
        (res) => {
          this.dialogRef.close(res);
          ref.close();
          this.modalService.dispose();
        },
        (err) => {
          ref.close();
          this.modalService.dispose();
          this.errorModal();
        }
      );
  }

  errorModal() {
    this.modalService.openConfirmationModal({
      matIcon: 'error_outline',
      type: 'error',
      headerText: 'Error in updating booking information',
      description:
        'Check if you are setting the same date as start and end, also has possibility that there is another booking exists in this range or something else happen.',
      primaryButtonName: 'Try again',
      modalWidth: '550px',
      primaryEvent: this.tryAgain,
    });
  }

  tryAgain() {
    this.modalService.dispose();
  }

  prepareBookingModel(data: BookingModel) {
    let booking = this.data.booked.booking;
    data.booked_Date = booking.booked_Date;
    data.id = booking.id;
    data.customerId = booking.customerId;
    data.stateId = booking.stateId;
    data.book_From = new Date(data.book_From).toLocaleDateString('en');
    data.leave_At = new Date(data.leave_At).toLocaleDateString('en');

    return data;
  }

  close() {
    this.dialogRef.close();
  }
}
