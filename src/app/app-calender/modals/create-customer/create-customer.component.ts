import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidatorsService } from '../../services/validators.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { RoomApiService } from '../../services/room-api.service';
import { RootlineModalService } from 'rootline-dialog';
import { BexioCustomer } from '../../models/bexio-customer.model';

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
    name_1: '',
    name_2: '',
    mail: '',
    phone_mobile: '',
  };

  ngOnInit(): void {
    this.tryAgain = this.tryAgain.bind(this);
    this.customerForm = this.createForm();
    this.formService.handleFormError(
      this.customerForm,
      this.errorObservers$,
      this.errorTagSetter
    );
  }

  errorTagSetter(type: string, owner: string) {
    switch (owner) {
      case 'name_1':
        return 'First name is required';
      case 'name_2':
        return 'Last name is required';
      case 'mail':
        if (type == 'required') {
          return 'Email is required';
        } else if (type == 'isExists') {
          return 'Already has a user with this email';
        } else {
          return 'Invalid email';
        }
      case 'phone_mobile':
        if (type == 'isExists') {
          return 'Already has a user with this phone number';
        }
        return 'Phone number is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      name_1: ['', Validators.required],
      name_2: ['', Validators.required],
      mail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone_mobile: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  onSubmit() {
    if (!this.customerForm.valid) {
      this.formService.checkFormStatus(this.customerForm);
      return;
    }
    const customer = Object.assign({}, this.customerForm.value);
    let bexioContact = new BexioCustomer();

    bexioContact.name_1 = customer.name_1;
    bexioContact.name_2 = customer.name_2;
    bexioContact.mail = customer.mail;
    bexioContact.phone_mobile = customer.phone_mobile
    console.log(bexioContact);
    let modalRef = this.modalService.openConfirmationModal({
      isLoader: true,
      loaderText: 'Creating customer ...',
      disableClose:true
    });
    this.apiService.createCustomer(bexioContact).subscribe(
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
      type: 'error',
      headerText: 'Error ocurred while creating customer',
      primaryButtonName: 'Try again',
      modalWidth: '550px',
      primaryEvent: this.tryAgain,
    });
  }

  tryAgain(event) {
    this.modalService.dispose();
  }

  close() {
    this.dialogRef.close();
  }
}
