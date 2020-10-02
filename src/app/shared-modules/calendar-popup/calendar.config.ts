import { ElementRef, InjectionToken, ViewContainerRef } from '@angular/core';

export interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  elementRef?: ElementRef;
  viewContainerRef?: ViewContainerRef;
  data?: any;
}

export const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'mat-datepicker-popup',
};

export interface CalendarToken {
  config: FilePreviewDialogConfig;
  default: FilePreviewDialogConfig;
}

export const TOOLBAR_CALENDAR_DATA = new InjectionToken<CalendarToken>(
  'CalendarConfig'
);
