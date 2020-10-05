import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FilePreviewDialogConfig,
  DEFAULT_CONFIG,
} from 'src/app/app-description/description.config';
import { TOOLBAR_CALENDAR_DATA } from './calendar.config';

export const DefaultComponentConfig: Partial<FilePreviewDialogConfig> = {
  ...DEFAULT_CONFIG,
};

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
  exports: [CalendarComponent],
  providers: [
    {
      provide: TOOLBAR_CALENDAR_DATA,
      useValue: {
        default: DefaultComponentConfig,
      },
    },
  ],
})
export class CalendarPopupModule {}
