import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { element } from 'protractor';
import { DescriptionService } from 'src/app/app-description/services/DescriptionService';

import { TimelineModel } from '../../models/timeline.model';

@Component({
  selector: 'app-custom-timeline',
  templateUrl: './custom-timeline.component.html',
  styleUrls: ['./custom-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTimelineComponent implements OnInit {
  @Input() timelines: TimelineModel[];
  constructor(
    private descriptionService: DescriptionService,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  openDescription(line, elm) {
    console.log(elm);
    let eleRef: ElementRef = elm.elementRef;

    this.descriptionService.open({
      elementRef: eleRef,
      viewContainerRef: this.viewContainer,
      positionX: 50,
    });
  }
}
