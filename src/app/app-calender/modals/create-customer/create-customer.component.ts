import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ValidatorsService } from '../../services/validators.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { RoomApiService } from '../../services/room-api.service';
import { RootlineModalService } from 'rootline-dialog';

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
    private apiService: RoomApiService,
    private validators: ValidatorsService,
    private modalService: RootlineModalService
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
        } else if (type == 'isExists') {
          return 'Already has a user with this email';
        } else {
          return 'Invalid email';
        }
      case 'phoneNumber':
        if (type == 'isExists') {
          return 'Already has a user with this phone number';
        }
        return 'Phone number is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
        this.checkMail.bind(this),
      ],
      phoneNumber: ['', Validators.required, this.checkPhone.bind(this)],
    });
  }

  onSubmit() {
    if (!this.customerForm.valid) {
      this.formService.checkFormStatus(this.customerForm);
      return;
    }
    const customer = Object.assign({}, this.customerForm.value);
    let modalRef = this.modalService.openConfirmationModal({
      isLoader: true,
      loaderText: 'Creating customer ...',
    });
    this.apiService.createCustomer(customer).subscribe(
      (res) => {
        this.dialogRef.close();
        modalRef.close();
        this.modalService.dispose();
      },
      (err) => {
        modalRef.close;
        this.modalService.dispose();
        this.errorModal();
      }
    );
  }

  errorModal() {
    this.modalService.openConfirmationModal({
      matIcon: 'error_outline',
      headerText: 'Error ocurred while creating customer',
      primaryButtonName: 'Try again',
      modalWidth: 'auto',
      primaryEvent: this.tryAgain,
    });
  }

  tryAgain(event) {
    this.modalService.dispose();
  }

  close() {
    this.dialogRef.close();
  }

  checkMail({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.validators.isMailExists(value);
  }

  checkPhone({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.validators.isPhoneExists(value);
  }
}
