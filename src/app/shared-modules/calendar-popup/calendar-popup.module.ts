import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
  exports: [CalendarComponent],
})
export class CalendarPopupModule {}
