import { Component, Input, OnInit } from '@angular/core';
import { RoomApiService } from '../../services/room-api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  @Input() substituteDate: any;
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  guestRooms: any[];

  constructor(private roomService: RoomApiService) {
    this.getAllRooms();
  }

  ngOnInit(): void {
    console.log(this.substituteDate);
  }

  getView(date: number) {
    let view = document.getElementById(date.toString());
    return view;
  }

  getAllRooms() {
    this.roomService.getAllRoomData().subscribe((res) => {
      console.log(res);
      this.guestRooms = res;
    });
  }
}
