import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { DayModel } from '../../models/day.model';

@Component({
  selector: 'individual-room',
  templateUrl: './individual-room.component.html',
  styleUrls: ['./individual-room.component.scss'],
})
export class IndividualRoomComponent implements OnInit {
  @Input() hotelRoom: any;
  @Input() calendarDates: DayModel[];
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  from = 28;
  to = 30;
  start: number;
  end: number;
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    if (this.hotelRoom == 15) {
      let elm = this.getView(24, this.from);
      let corX = elm.offsetLeft;
      let width = elm.offsetWidth / 2;
      let start = corX + width;
      this.start = start;
      this.end = start + width;
    }
  }

  getView(room: number, date: number) {
    let view = document.getElementById(room.toString() + '-' + date.toString());
    return view;
  }

  getTimeline(id: number) {
    let view = document.getElementById('timeline' + '-' + id.toString());
    return view;
  }

  test() {
    console.log('Cell click');
  }
}
