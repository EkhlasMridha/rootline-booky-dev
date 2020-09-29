import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { TimelineDirective } from '../../directives/timeline.directive';
import { TimelineModel } from '../../models/timeline.model';

@Component({
  selector: 'app-custom-timeline',
  templateUrl: './custom-timeline.component.html',
  styleUrls: ['./custom-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTimelineComponent
  extends TimelineDirective
  implements OnInit {
  @Input() timelines: TimelineModel[];
  constructor(
    private elementRef: ElementRef,
    private rendere: Renderer2,
    @Inject(DOCUMENT) doc
  ) {
    super(elementRef, rendere, doc);
  }

  ngOnInit(): void {}
}
