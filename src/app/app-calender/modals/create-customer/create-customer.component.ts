import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidatorsService } from '../../services/validators.service';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { RoomApiService } from '../../services/room-api.service';
import { RootlineModalService } from 'rootline-dialog';
import { BexioCustomer } from '../../models/bexio-customer.model';
import { BexioCountry } from '../../models/bexio-country.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  data: any;
  countries: BexioCountry[] = [];
  isCountryLoading: boolean;
  salutationList: any[] = [
    {
      key: 1,
      value:"Mr."
    },
    {
      key: 2,
      value:"Mrs."
    },
    {
      key: 3,
      value:"Family"
    },
    {
      key: 4,
      value:"Mr. and Mrs."
    }
  ]

  get selectedSalutation(): FormControl{
    return this.customerForm.get("salutation_id") as FormControl;
  }

  get selectedCountry(): FormControl{
    return this.customerForm.get("country") as FormControl;
  }

  set selectedCountry(value) {
    this.customerForm.setValue({ "country": value });
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<CreateCustomerComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private apiService: RoomApiService,
    private modalService: RootlineModalService,
    private validators:ValidatorsService
  ) {
    this.data = data;
  }

  errorObservers$ = {
    salutation_id:"",
    name_1: '',
    name_2: '',
    mail: '',
    phone_mobile: '',
    country:""
  };

  ngOnInit(): void {
    this.tryAgain = this.tryAgain.bind(this);
    this.customerForm = this.createForm();
    this.formService.handleFormError(
      this.customerForm,
      this.errorObservers$,
      this.errorTagSetter
    );
    this.getBexioCountries();
  }

  getBexioCountries() {
    this.isCountryLoading = false;
    this.apiService.getBexioCountry().subscribe(res => {
      this.countries = res;
      this.isCountryLoading = true;
      this.customerForm.get("country").setValue(res[0]);
    })
  }

  errorTagSetter(type: string, owner: string) {
    switch (owner) {
      case "salutation_id": return "Salutaion is required"
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
      case "country": return "Country selection required";
    }
  }

  createForm() {
    return this.formBuilder.group({
      salutation_id:[this.salutationList[0],Validators.required],
      name_1: ['', Validators.required],
      name_2: ['', Validators.required],
      mail: [
        '',
        Validators.compose([ Validators.email]),
      ],
      phone_mobile: [
        '',
        Validators.compose([ Validators.minLength(8)]),
      ],
      country:[0,Validators.required]
    });
  }

  onSubmit() {
    if (!this.customerForm.valid) {
      this.formService.checkFormStatus(this.customerForm);
      return;
    }
    const customer = Object.assign({}, this.customerForm.value);
    let bexioContact = new BexioCustomer();

    bexioContact.name_2 = customer.name_1;
    bexioContact.name_1 = customer.name_2;
    bexioContact.mail = customer.mail;
    bexioContact.phone_mobile = customer.phone_mobile;
    bexioContact.salutation_id = customer.salutation_id.key;
    bexioContact.country_id = customer.country.id;

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
        modalRef.close();
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

  // checkMail({ value }: AbstractControl): Observable<ValidationErrors | null> {
  //   return this.validators.isMailExists(value);
  // }

  // checkPhone({ value }: AbstractControl): Observable<ValidationErrors | null> {
  //   return this.validators.isPhoneExists(value);
  // }
}
