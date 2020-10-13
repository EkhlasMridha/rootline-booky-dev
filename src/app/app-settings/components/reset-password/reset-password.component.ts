import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RootlineModalService } from 'rootline-dialog';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { ResetPassword } from '../../models/reset.model';
import { SettignsService } from '../../services/settigns.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm:FormGroup;

  error$={
    username:"",
    password:"",
    confirmPassword:""
  }
  constructor(private formBuilder:FormBuilder,
    private formService:FormService,
    private settings:SettignsService,
    private dialogService:RootlineModalService) { }

  ngOnInit(): void {
    this.primaryModalButton = this.primaryModalButton.bind(this);
    this.resetForm = this.createForm();
    this.formService.handleFormError(this.resetForm,this.error$,this.errorNameGenerator);
  }

  errorNameGenerator(type:string,owner:string){
    switch(owner){
      case 'username' : if(type=="minlength"){
        return "Minimum length is 3"
      }
      return "Username is required"
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
      username:["",Validators.compose([Validators.required,Validators.minLength(3)])],
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
    let password:Partial<ResetPassword>={};

    console.log(result);
    password.userName = result.username;
    password.password = result.password;

    let ref = this.dialogService.openConfirmationModal({isLoader:true,loaderText:"Updating password ...",disableClose:true})
    this.settings.resetPassword(password).subscribe(res=>{
      ref.close();
      this.dialogService.dispose();
    },err=>{
      ref.close();
      this.dialogService.dispose();
      this.dialogService.openConfirmationModal({
        type:"error",
        matIcon:"error_outline",
        headerText:"Unknown error occured",
        primaryButtonName:"Try again",
        primaryEvent:this.primaryModalButton
      })
    })
  }

  primaryModalButton(){
    this.dialogService.dispose();
  }

}
