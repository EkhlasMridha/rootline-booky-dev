import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './components/sigin/sigin.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { FormsMaterialModule } from '../shared-modules/shared-materials/forms-material/forms-material.module';
import { AuthGuardService } from '../shared-services/route-guards/auth-guard.service';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: 'signin',
    component: SiginComponent,
    data: {
      breadCrumb: 'SignIn',
    },
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [SiginComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes),
    FormsMaterialModule,
    MatToolbarModule,
  ],
})
export class AppAuthenticationModule {}
