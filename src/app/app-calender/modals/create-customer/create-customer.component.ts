import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { RoomApiService } from '../../services/room-api.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  data: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<CreateCustomerComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private apiService: RoomApiService
  ) {
    this.data = data;
  }

  errorObservers$ = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
  };

  ngOnInit(): void {
    this.customerForm = this.createForm();
    this.formService.handleFormError(
      this.customerForm,
      this.errorObservers$,
      this.errorTagSetter
    );
  }

  errorTagSetter(type: string, owner: string) {
    switch (owner) {
      case 'firstname':
        return 'First name is required';
      case 'lastname':
        return 'Last name is required';
      case 'email':
        if (type == 'required') {
          return 'Email is required';
        } else {
          return 'Invalid email';
        }
      case 'phoneNumber':
        return 'Phone number is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phoneNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.customerForm.valid) {
      this.formService.checkFormStatus(this.customerForm);
      return;
    }
    console.log(this.customerForm.value);
    const customer = Object.assign({}, this.customerForm.value);
    this.apiService.createCustomer(customer).subscribe((res) => {
      console.log(res);
    });
    console.log(customer);
  }

  close() {
    this.dialogRef.close();
  }
}
