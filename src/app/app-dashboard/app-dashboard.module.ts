import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadCrumb: '',
    },
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HttpClientModule,
    ConfirmationStatusModalModule.forChild({
      modalWidth: '500px',
    }),
    RouterModule.forChild(routes),
  ],
})
export class AppDashboardModule {}
