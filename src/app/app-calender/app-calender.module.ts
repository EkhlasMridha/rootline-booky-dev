import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { RoomsComponent } from './components/rooms/rooms.component';
import { IndividualRoomComponent } from './components/individual-room/individual-room.component';
import { TimelineDirective } from './directives/timeline.directive';
import { CustomTimelineComponent } from './components/custom-timeline/custom-timeline.component';

@NgModule({
  declarations: [
    CalendarComponent,
    RoomsComponent,
    IndividualRoomComponent,
    TimelineDirective,
    CustomTimelineComponent,
  ],
  imports: [CommonModule, SharedMaterialModule],
  exports: [CalendarComponent],
})
export class AppCalenderModule {}
