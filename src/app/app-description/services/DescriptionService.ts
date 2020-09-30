import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ElementRef,
  Inject,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { CalendarOverlayService } from 'src/app/shared-modules/calendar-popup/services/calendar-overlay.service';
import { DescriptionComponent } from '../components/description/description.component';
import {
  FilePreviewDialogConfig,
  DEFAULT_CONFIG,
  DESCRIPTION_POPUP_CONFIG,
  DescriptionToken,
} from '../description.config';

export class FilePreviewOverlayRef {
  constructor(private overlayRef: OverlayRef) {}

  close(): void {
    this.overlayRef.dispose();
  }

  getOverlayRef() {
    return this.overlayRef;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DescriptionService extends CalendarOverlayService {
  descriptionConfig: DescriptionToken;
  refinedConfig: FilePreviewDialogConfig;
  constructor(
    public overlay: Overlay,
    @Inject(DESCRIPTION_POPUP_CONFIG) token: DescriptionToken
  ) {
    super(overlay);
    this.descriptionConfig = token;
    this.refinedConfig = {
      ...this.descriptionConfig.default,
      ...this.descriptionConfig.config,
    };
  }

  open(config: FilePreviewDialogConfig = {}) {
    const dialogConfig = { ...this.refinedConfig, ...config };
    this.descriptionConfig.config = { ...dialogConfig };

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
