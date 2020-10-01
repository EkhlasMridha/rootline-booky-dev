import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/shared-services/utilities/form.service';

@Component({
  selector: 'app-room-book',
  templateUrl: './room-book.component.html',
  styleUrls: ['./room-book.component.scss'],
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
    private formService: FormService
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
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateRange: this.formBuilder.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
      }),
      adults: ['', Validators.required],
      children: [''],
      chf: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.bookingForm.value);
    this.formService.checkFormStatus(this.bookingForm);
  }
}
