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
    this.deleteTimeline();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let timeline = this.timlineService.getTimelineStartEnd(
      this.hotelRoom,
      this.calendarDates
    );

    this.timelines = Array.from(timeline);
  }

  updateTimeline() {
    let currentData: Partial<BookedModel> = {};
    let updateData: Partial<TimelineModel> = {};
    this.timelineControler.timlineUpdate$.subscribe((res) => {
      updateData = res.current;
      currentData = res.previous;
      if (this.hotelRoom.id != currentData.roomId) return;
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

  deleteTimeline() {
    this.timelineControler.timelineDelete$.subscribe((res) => {
      let timeline: TimelineModel = res;
      let bookingId = timeline.booked.bookingId;
      if (this.hotelRoom.id != timeline.booked.roomId) return;
      this.hotelRoom.bookedRooms = this.hotelRoom.bookedRooms.filter(
        (booked) => {
          if (bookingId != booked.bookingId) {
            return booked;
          }
        }
      );
    });
  }
}
