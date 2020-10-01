import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FormService } from 'src/app/shared-services/utilities/form.service';

@Component({
  selector: 'app-room-book',
  templateUrl: './room-book.component.html',
  styleUrls: ['./room-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomBookComponent implements OnInit {
  data: any;
  bookingForm: FormGroup;

  errorObservers$ = {
    firstname: '',
    lastname: '',
    dateRange: '',
    adults: '',
    children: '',
    chf: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private dialogRef: MatDialogRef<RoomBookComponent>
  ) {
    this.data = data;
  }

  ngOnInit(): void {
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
      case 'firstname':
        return 'First name is required';
      case 'lastname':
        return 'Last name is required';
      case 'dateRange':
        return 'Date range required';
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
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        dateRange: this.formBuilder.group({
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
        }),
        adults: [
          0,
          Validators.compose([Validators.required, Validators.min(1)]),
        ],
        children: [0],
        chf: ['', Validators.required],
      },
      {
        validators: [
          this.watchDateRangeErrorState('startDate', 'endDate'),
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
    console.log(this.bookingForm.errors);
    this.formService.checkFormStatus(this.bookingForm);
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
        console.log(formGroup);
        return { errorCapcity: true };
      }
    };
  }
}
