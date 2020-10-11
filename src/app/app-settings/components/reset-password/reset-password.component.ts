import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared-services/utilities/form.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm:FormGroup;

  error$={
    password:"",
    confirmPassword:""
  }
  constructor(private formBuilder:FormBuilder,private formService:FormService) { }

  ngOnInit(): void {
    this.resetForm = this.createForm();
    this.formService.handleFormError(this.resetForm,this.error$,this.errorNameGenerator);
  }

  errorNameGenerator(type:string,owner:string){
    switch(owner){
      case "password": return "Password is required"
      case "confirmPassword": 
        if(type=="mustMatch"){
          return "Please type the same password"
        }
        return "Confirm password is required"
    }
  }

  createForm(){
    return this.formBuilder.group({
      password:["",Validators.required],
      confirmPassword:["",Validators.required]
    },
    {
      validators:[this.MustMatch("password","confirmPassword")]
    })
  }

  MustMatch(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      if (secondControl.errors && secondControl.errors.mustMatch) {
        return;
      }

      if (firstControl.value !== secondControl.value) {
        return secondControl.setErrors({ mustMatch: true });
      } else {
        secondControl.setErrors(null);
      }
    };
  }

  onSubmit(){
    if(!this.resetForm.valid){
      this.formService.checkFormStatus(this.resetForm);
      return;
    }

    const result = Object.assign({},this.resetForm.value);

    console.log(result);
  }

}
