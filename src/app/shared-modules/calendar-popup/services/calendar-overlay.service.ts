import {
  ConnectedPosition,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  ViewContainerRef,
} from '@angular/core';
import {
  DEFAULT_CONFIG,
  FilePreviewDialogConfig,
} from 'src/app/app-description/description.config';
import { CalendarToken, TOOLBAR_CALENDAR_DATA } from '../calendar.config';
import { CalendarComponent } from '../components/calendar/calendar.component';

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
  cData: CalendarToken;
  constructor(
    public overlay?: Overlay,
    @Inject(TOOLBAR_CALENDAR_DATA) caledarData?: CalendarToken
  ) {
    this.cData = caledarData;
  }

  open(config: FilePreviewDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    this.cData.config = config;

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
