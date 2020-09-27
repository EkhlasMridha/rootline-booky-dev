import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { RoomsComponent } from './components/rooms/rooms.component';

@NgModule({
  declarations: [CalendarComponent, RoomsComponent],
  imports: [CommonModule, SharedMaterialModule],
  exports: [CalendarComponent],
})
export class AppCalenderModule {}
