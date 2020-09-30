import { ElementRef, InjectionToken, ViewContainerRef } from '@angular/core';

export interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  elementRef?: ElementRef;
  viewContainerRef?: ViewContainerRef;
  positionX?: number;
  data?: any;
}

export const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'mat-datepicker-popup',
};

export interface DescriptionToken {
  config: FilePreviewDialogConfig;
  default: FilePreviewDialogConfig;
}

export const DESCRIPTION_POPUP_CONFIG = new InjectionToken<DescriptionToken>(
  'DescriptionToken'
);
