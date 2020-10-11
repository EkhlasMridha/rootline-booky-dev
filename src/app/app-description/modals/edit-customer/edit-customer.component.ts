import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerModel } from '../../models/customer.model';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { DescriptionApiService } from '../../services/description-api.service';
import { RootlineModalService } from 'rootline-dialog';
import { BexioContact } from '../../models/bexio-contact.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  data: BexioContact;
  editForm: FormGroup;

  error$ = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<EditCustomerComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private descriptionApi: DescriptionApiService,
    private modalService: RootlineModalService
  ) {
    this.data = data;
    console.log(data)
  }

  ngOnInit(): void {
    this.tryAgain = this.tryAgain.bind(this);
    this.editForm = this.createForm();
    this.formService.handleFormError(
      this.editForm,
      this.error$,
      this.errorGenerator
    );
  }

  errorGenerator(type: string, owner: string) {
    switch (owner) {
      case 'firstname':
        return 'First name is required';
      case 'lastname':
        return 'Last name is required';
      case 'email':
        if (type == 'required') {
          return 'Email id required';
        } else {
          return 'Invalid email';
        }
      case 'phoneNumber':
        return 'Phone number is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      firstname: [this.data.name_1, Validators.required],
      lastname: [this.data.name_2, Validators.required],
      email: [
        this.data.mail,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phoneNumber: [this.data.phone_mobile, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.editForm.valid) {
      this.formService.checkFormStatus(this.editForm);
      return;
    }

    const result = Object.assign({}, this.editForm.value);
    this.data.name_1 = result.firstname;
    this.data.name_2 = result.lastname;
    this.data.mail = result.email;
    this.data.phone_mobile = result.phoneNumber;

    console.log(this.data);

    let ref = this.modalService.openConfirmationModal({
      isLoader: true,
      loaderText: 'Updating customer info ...',
      disableClose: true,
    });

    this.descriptionApi.updateCustomer(this.data).subscribe(
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
      headerText: 'Error ocurred while updating customer',
      primaryButtonName: 'Try again',
      modalWidth: '550px',
      primaryEvent: this.tryAgain,
    });
  }

  tryAgain() {
    this.modalService.dispose();
  }
}
