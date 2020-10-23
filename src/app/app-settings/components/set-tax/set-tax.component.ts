import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor (private formBuilder:FormBuilder,private taxApi:SettignsService) { }
  
  createForm() {
    return this.formBuilder.group({
      adultsTax: [this.tax.adultsTax?this.tax.adultsTax:0],
      childrensTax:[this.tax.childrensTax?this.tax.childrensTax:0]
    })
  }

  getTaxUnit() {
    this.taxApi.getTax().subscribe(res => {
      this.tax = res;
      this.taxForm.get("adultsTax").setValue(this.tax.adultsTax);
      this.taxForm.get("childrensTax").setValue(this.tax.childrensTax);
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
    this.tax.adultsTax = result.adultsTax;
    this.tax.childrensTax = result.childrensTax;
    console.log(this.tax);
    this.taxApi.savetax(this.tax).subscribe(res => {
      console.log(res);
    })
  }
}
