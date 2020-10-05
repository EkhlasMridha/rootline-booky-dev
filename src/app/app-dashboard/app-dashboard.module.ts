import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppCalenderModule } from '../app-calender/app-calender.module';

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
  imports: [CommonModule, AppCalenderModule, RouterModule.forChild(routes)],
})
export class AppDashboardModule {}
