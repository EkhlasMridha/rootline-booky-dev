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
import { element } from 'protractor';
import { DescriptionService } from 'src/app/app-description/services/DescriptionService';
import { TimelineControlService } from 'src/app/shared-services/timeline-control.service';
import { BookedModel } from '../../models/booked.model';

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
  constructor(
    private descriptionService: DescriptionService,
    private viewContainer: ViewContainerRef,
    private timelineControler: TimelineControlService,
    private ch: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.updateTimeline();
  }

  openDescription(line, elm) {
    let eleRef: ElementRef = elm.elementRef;

    this.descriptionRef = this.descriptionService.open({
      elementRef: eleRef,
      viewContainerRef: this.viewContainer,
      positionX: 0,
      data: line,
    });

    this.descriptionRef.keydownEvents().subscribe((res) => {
      console.log('event');
    });
    let subscription = this.descriptionRef.backdropClick().subscribe((res) => {
      this.descriptionRef.dispose();
      subscription.unsubscribe();
    });
  }
}
