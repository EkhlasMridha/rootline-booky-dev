import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettignsComponent } from './components/settigns/settigns.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsMaterialModule } from '../shared-modules/shared-materials/forms-material/forms-material.module';

const routes:Routes=[
  {
    path:"",
    component:SettignsComponent,
    data: {
      breadCrumb: '',
    },
  }
]

@NgModule({
  declarations: [SettignsComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AppSettingsModule { }
