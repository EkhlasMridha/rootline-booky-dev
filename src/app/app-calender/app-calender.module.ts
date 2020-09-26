import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, SharedMaterialModule],
  exports: [CalendarComponent],
})
export class AppCalenderModule {}
