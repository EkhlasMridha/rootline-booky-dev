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
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private ch: ChangeDetectorRef
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
        adults: ['', Validators.required],
        children: [''],
        chf: ['', Validators.required],
      },
      {
        validators: [this.watchDateRangeErrorState('startDate', 'endDate')],
      }
    );
  }

  onSubmit() {
    console.log(this.bookingForm.value);
    this.formService.checkFormStatus(this.bookingForm);
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
}
