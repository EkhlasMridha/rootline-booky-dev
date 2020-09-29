import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { CalendarOverlayService } from 'src/app/shared-modules/calendar-popup/services/calendar-overlay.service';
import { DescriptionComponent } from '../components/description/description.component';

interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  elementRef?: ElementRef;
  viewContainerRef?: ViewContainerRef;
  positionX?: number;
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
export class DescriptionService extends CalendarOverlayService {
  constructor(public overlay: Overlay) {
    super(overlay);
  }

  open(config: FilePreviewDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    let descriptionPosition: ConnectedPosition[] = [
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetX: config.positionX,
      },
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetX: config.positionX,
      },
    ];

    this.updatePositions(descriptionPosition);

    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new FilePreviewOverlayRef(overlayRef).getOverlayRef();

    const filePreviewPortal = new ComponentPortal(
      DescriptionComponent,
      config.viewContainerRef
    );

    overlayRef.attach(filePreviewPortal);

    return dialogRef;
  }

  updatePositions(positions: ConnectedPosition[]) {
    this.positions = positions;
  }
}
