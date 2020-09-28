import {
  Component,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
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
  constructor(private timlineService: TimelineService) {}

  ngOnInit(): void {
    console.log(this.hotelRoom.bookedRooms);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.updateTimeline();
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
    console.log(this.hotelRoom.id);
    console.log(this.timlineService.getRoomCell(this.hotelRoom.id, 29));
  }

  @HostListener('window:resize', ['event$'])
  onResize(event) {
    this.updateTimeline();
  }

  test() {
    console.log('Cell click');
  }
}
