import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { TimelineModel } from '../models/timeline.model';

@Directive({
  selector: '[appTimeline]',
})
export class TimelineDirective implements OnChanges {
  @Input() timeline: TimelineModel;

  document: Document;
  stateColors: any[];
  constructor(
    private elm?: ElementRef,
    private renderer?: Renderer2,
    @Inject(DOCUMENT) doc?
  ) {
    this.document = doc;
    this.stateColors = DomainService.domains.StateColors;
  }

  ngAfterViewInit(): void {
    this.updateTimeline();
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.updateTimeline();
    });
  }

  updateTimeline() {
    if (this.timeline) {
      let fromDate = new Date(this.timeline.startDate.date).getDate();
      let toDate = new Date(this.timeline.endDate.date).getDate();

      let cellIdFrom = this.getCellId(fromDate);
      let cellIdTo = this.getCellId(toDate);
      let start = this.document.getElementById(cellIdFrom);
      let end = this.document.getElementById(cellIdTo);
      let startPosX = this.generateTimelinePos(
        start,
        this.timeline.startDate.isOutside,
        true
      );
      let endPosX = this.generateTimelinePos(
        end,
        this.timeline.endDate.isOutside
      );
      this.renderTimeline(startPosX, endPosX);
    }
  }

  renderTimeline(startX: number, endX: number) {
    let dom = this.elm.nativeElement;
    let endWidth = Math.abs(endX - startX);
    this.renderer.setStyle(dom, 'left', startX + 'px');
    this.renderer.setStyle(dom, 'width', endWidth + 'px');
    let color = this.getTimelineColor(this.timeline.booked.booking.state);
    this.renderer.setStyle(dom, 'background-color', color);
  }

  getTimelineColor(state: any) {
    if (state.id >= this.stateColors.length) {
      return this.stateColors[0];
    }
    return this.stateColors[state.id];
  }

  getCellId(date: number): string {
    let cellId = this.timeline.booked.roomId.toString() + '-' + date.toString();
    return cellId;
  }

  generateTimelinePos(
    element: HTMLElement,
    isOutside: boolean,
    startType: boolean = false
  ) {
    let corX = element.offsetLeft;
    let width = element.offsetWidth;
    let position = null;

    if (isOutside) {
      if (startType) {
        position = corX;
      } else {
        position = corX + width;
      }
    } else {
      position = corX + width / 2;
    }

    return position;
  }

  @HostListener('window:resize', ['event$'])
  onResize(event) {
    this.updateTimeline();
  }
}
