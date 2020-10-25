import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserManagerService } from 'src/app/shared-services/user-manager.service';
import { TokenService } from 'src/app/shared-services/utilities/token.service';
import { TaxModel } from '../../models/tax.model';
import { SettignsService } from '../../services/settigns.service';

@Component({
  selector: 'app-set-tax',
  templateUrl: './set-tax.component.html',
  styleUrls: ['./set-tax.component.scss']
})
export class SetTaxComponent implements OnInit {
  taxForm: FormGroup;
  tax: Partial<TaxModel> = {};
  constructor (private formBuilder:FormBuilder,private taxApi:SettignsService,private tokenService:TokenService) { }
  
  createForm() {
    return this.formBuilder.group({
      adultsTax: [0],
      childrensTax:[0]
    })
  }

  getTaxUnit() {
    this.taxApi.getTax().subscribe(res => {
      this.tax = res;
      if (this.tax != null) {
        this.taxForm.get("adultsTax").setValue(this.tax.adultsTax);
        this.taxForm.get("childrensTax").setValue(this.tax.childrensTax);
      }
    })
  }

  ngOnInit(): void {
    this.taxForm = this.createForm();
    this.getTaxUnit();
  }

  onSubmit() {
    if (!this.taxForm.valid) {
      return;
    }

    const result = Object.assign({}, this.taxForm.value);
    console.log(result);
    let tax: Partial<TaxModel> = {};
    if (this.tax != null) {
      tax = this.tax;
    } else {
      tax.userId = this.tokenService.getTokenInfo().userId;
    }
    
    tax.adultsTax = result.adultsTax;
    tax.childrensTax = result.childrensTax;
    console.log(tax);
    this.taxApi.savetax(this.tax).subscribe(res => {
    })
  }
}
