import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { TimelineControlService } from 'src/app/shared-services/timeline-control.service';
import { BookedModel } from '../../models/booked.model';
import { DayModel } from '../../models/day.model';
import { RoomModel } from '../../models/room.model';
import { TimelineModel } from '../../models/timeline.model';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'individual-room',
  templateUrl: './individual-room.component.html',
  styleUrls: ['./individual-room.component.scss'],
})
export class IndividualRoomComponent {
  @Input() hotelRoom: RoomModel;
  @Input() calendarDates: DayModel[];
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  timelines: TimelineModel[];

  constructor(
    private timlineService: TimelineService,
    private timelineControler: TimelineControlService,
    private ch: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.updateTimeline();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let timeline = this.timlineService.getTimelineStartEnd(
      this.hotelRoom,
      this.calendarDates
    );

    this.timelines = timeline;
  }

  updateTimeline() {
    let currentData: Partial<BookedModel> = {};
    let updateData: Partial<TimelineModel> = {};
    this.timelineControler.timlineUpdate$.subscribe((res) => {
      updateData = res.current;
      currentData = res.previous;
      this.hotelRoom.bookedRooms = this.hotelRoom.bookedRooms.map((line) => {
        if (
          line.bookingId == currentData.bookingId &&
          line.roomId == currentData.roomId
        ) {
          return updateData.booked;
        }
        return line;
      });

      this.timelines = this.timlineService.getTimelineStartEnd(
        this.hotelRoom,
        this.calendarDates
      );
    });
  }
}
