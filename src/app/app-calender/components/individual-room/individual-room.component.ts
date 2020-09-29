import {
  Component,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { DayModel } from '../../models/day.model';
import { RoomModel } from '../../models/room.model';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'individual-room',
  templateUrl: './individual-room.component.html',
  styleUrls: ['./individual-room.component.scss'],
})
export class IndividualRoomComponent implements OnInit {
  @Input() hotelRoom: RoomModel;
  @Input() calendarDates: DayModel[];
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  start: number;
  end: number;
  constructor(
    private timlineService: TimelineService,
    private calendarControl: CalendarControlService
  ) {}

  ngOnInit(): void {
    this.updateTimeline();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.timlineService.getTimelineStartEnd(this.hotelRoom, this.calendarDates);
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
