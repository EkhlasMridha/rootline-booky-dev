import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
