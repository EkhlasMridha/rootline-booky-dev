import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { RoomsComponent } from './components/rooms/rooms.component';
import { IndividualRoomComponent } from './components/individual-room/individual-room.component';
import { TimelineDirective } from './directives/timeline.directive';
import { CustomTimelineComponent } from './components/custom-timeline/custom-timeline.component';
import { AppDescriptionModule } from '../app-description/app-description.module';
import { AppTimelineModule } from '../app-timeline/app-timeline.module';
import { RoomBookComponent } from './modals/room-book/room-book.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsMaterialModule } from '../shared-modules/shared-materials/forms-material/forms-material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateCustomerComponent } from './modals/create-customer/create-customer.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { RootlineDialogModule } from 'rootline-dialog';
import {MatMenuModule} from "@angular/material/menu";
import { EditRoomComponent } from './modals/edit-room/edit-room.component'
import { TruncatePipe } from './pipes/truncate.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextFieldModule } from '@angular/cdk/text-field';
@NgModule({
  declarations: [
    CalendarComponent,
    RoomsComponent,
    IndividualRoomComponent,
    TimelineDirective,
    CustomTimelineComponent,
    RoomBookComponent,
    CreateCustomerComponent,
    EditRoomComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    AppDescriptionModule.forChild({ panelClass: 'description-popup' }),
    AppTimelineModule,
    MatDialogModule,
    FormsMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatMenuModule,
    MatTooltipModule,
    TextFieldModule,
    RootlineDialogModule.forChild(),
  ],
  exports: [CalendarComponent],
})
export class AppCalenderModule {
  constructor(private injector: Injector) {}
}
