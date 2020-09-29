import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { DayModel } from '../../models/day.model';
import { RoomModel } from '../../models/room.model';
import { TimelineModel } from '../../models/timeline.model';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'individual-room',
  templateUrl: './individual-room.component.html',
  styleUrls: ['./individual-room.component.scss'],
})
export class IndividualRoomComponent implements OnInit, OnChanges {
  @Input() hotelRoom: RoomModel;
  @Input() calendarDates: DayModel[];
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  timelines: TimelineModel[];

  constructor(private timlineService: TimelineService) {}

  ngOnChanges(changes: SimpleChanges): void {
    let timeline = this.timlineService.getTimelineStartEnd(
      this.hotelRoom,
      this.calendarDates
    );

    this.timelines = Array.from(timeline);
  }

  ngOnInit(): void {
    this.updateTimeline();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  updateTimeline() {
    // if (this.hotelRoom == 15) {
    //   let elm = this.getView(24, this.from);
    //   let corX = elm.offsetLeft;
    //   let width = elm.offsetWidth / 2;
    //   let start = corX + width;
    //   this.start = start;
    //   this.end = start + width;
    //   console.log(this.start + '  ' + this.end);
    // }
  }

  @HostListener('window:resize', ['event$'])
  onResize(event) {
    this.updateTimeline();
  }

  test() {
    console.log('Cell click');
  }
}
