import {
  ConnectedPosition,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { CalendarComponent } from '../components/calendar/calendar.component';

interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  elementRef?: ElementRef;
  viewContainerRef?: ViewContainerRef;
}

export class FilePreviewOverlayRef {
  constructor(private overlayRef: OverlayRef) {}

  close(): void {
    this.overlayRef.dispose();
  }

  getOverlayRef() {
    return this.overlayRef;
  }
}

const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'mat-datepicker-popup',
};

@Injectable({
  providedIn: 'root',
})
export class CalendarOverlayService {
  positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
    },
  ];

  constructor(public overlay?: Overlay) {}

  open(config: FilePreviewDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new FilePreviewOverlayRef(overlayRef).getOverlayRef();

    const filePreviewPortal = new ComponentPortal(
      CalendarComponent,
      config.viewContainerRef
    );

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);

    // Return remote control
    return dialogRef;
  }

  public createOverlay(config: FilePreviewDialogConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  public getOverlayConfig(config: FilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(config.elementRef)
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withLockedPosition()
      .withPositions(this.positions);

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }
}
