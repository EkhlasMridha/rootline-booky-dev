import { OverlayRef } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DescriptionService } from 'src/app/app-description/services/DescriptionService';
import { TimelineControlService } from 'src/app/shared-services/timeline-control.service';

import { TimelineModel } from '../../models/timeline.model';

@Component({
  selector: 'app-custom-timeline',
  templateUrl: './custom-timeline.component.html',
  styleUrls: ['./custom-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTimelineComponent implements OnInit {
  @Input() timelines: TimelineModel[];
  descriptionRef: OverlayRef;
  subscription: Subscription;
  constructor(
    private descriptionService: DescriptionService,
    private viewContainer: ViewContainerRef,
    private timelineControler: TimelineControlService,
    private ch: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.deleteTimeline();
  }

  openDescription(line, elm) {
    let eleRef: ElementRef = elm.elementRef;

    this.descriptionRef = this.descriptionService.open({
      elementRef: eleRef,
      viewContainerRef: this.viewContainer,
      positionX: 0,
      data: line,
    });

    this.subscription = this.descriptionRef.backdropClick().subscribe((res) => {
      this.descriptionRef.dispose();
      this.subscription.unsubscribe();
    });
  }

  deleteTimeline() {
    this.timelineControler.timelineDelete$.subscribe((res) => {
      let timeline: TimelineModel = res;
      let room =
        this.timelines.length != 0 ? this.timelines[0].booked.roomId : null;
      if (!room || room != timeline.booked.roomId) return;
      this.timelines = this.timelines.filter((line) => {
        if (timeline.booked.bookingId != line.booked.bookingId) {
          return line;
        }
      });
      this.ch.detectChanges();
      this.descriptionRef.dispose();
      this.subscription.unsubscribe();
    });
  }
}
