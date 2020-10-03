import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { StateControlService } from 'src/app/shared-services/state-control.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
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
  allStates: any[];
  stateColors: any[];
  isLoading: boolean;

  constructor(
    private roomService: RoomApiService,
    private stateControler: StateControlService,
    private calendarControl: CalendarControlService
  ) {
    this.getData();
    this.stateColors = DomainService.domains.StateColors;
  }

  ngOnInit(): void {
    this.updateCalendarData();
  }

  getView(date: number) {
    let view = document.getElementById(date.toString());
    return view;
  }

  getData() {
    let apis = [
      this.roomService.getAllRoomData().pipe(
        tap((res) => {
          this.guestRooms = res;
          console.log(this.guestRooms);
        })
      ),
      this.roomService.getAllStates().pipe(
        tap((res) => {
          this.allStates = res;
        })
      ),
    ];

    this.isLoading = true;
    forkJoin(apis).subscribe((res) => {
      this.isLoading = false;
      this.stateControler.sendState(this.allStates);
    });
  }

  updateCalendarData() {
    this.calendarControl.calendarUpdate$.subscribe((res) => {
      console.log(res);
    });
  }
}
