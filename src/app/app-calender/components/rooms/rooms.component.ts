import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PreloaderService } from 'src/app/app-tools/app-loader/service/preloader.service';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { StateControlService } from 'src/app/shared-services/state-control.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { AppDataQuery } from '../../models/data-get.model';
import { RoomApiService } from '../../services/room-api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  @Input() substituteDate: any;

  guestRooms: any[];
  allStates: any[];
  stateColors: any[];
  isLoading: boolean;
  currentDate: Date;

  constructor(
    private roomService: RoomApiService,
    private stateControler: StateControlService,
    private preloaderService: PreloaderService,
    private calendarControler: CalendarControlService,
  ) {
    this.getData();
    this.stateColors = DomainService.domains.StateColors;
  }

  ngOnInit(): void {
    this.deleteRoomListener();
    this.roomCreationListener();
    this.updateData();
    this.currentDate = new Date();
  }

  getAppDataByMonth(date:Date) {
    let currentDate: AppDataQuery = { query: new Date(date) };
    this.preloaderService.startAppLoader();
    this.roomService.getRoomDataByMonth(currentDate).subscribe(res => {
      this.guestRooms = res;
      this.preloaderService.stopAppLoader();
    })
  }

  getView(date: number) {
    let view = document.getElementById(date.toString());
    return view;
  }

  roomCreationListener() {
    this.stateControler.roomCreationObserver$.subscribe((res) => {
      this.guestRooms.push(res);
    });
  }

  deleteRoomListener() {
    this.stateControler.deleteRoomListener$.subscribe(res => {
      let deleteIndex = this.guestRooms.indexOf(res);
      this.guestRooms.splice(deleteIndex, 1);
    })
  }

  getData() {
    let currentDate:AppDataQuery={query:new Date()}
    let apis = [
      this.roomService.getRoomDataByMonth(currentDate).pipe(
        tap((res) => {
          this.guestRooms = res;
        })
      ),
      this.roomService.getAllStates().pipe(
        tap((res) => {
          this.allStates = res;
        })
      ),
    ];

    this.preloaderService.startAppLoader();
    forkJoin(apis).subscribe(
      (res) => {
        this.stateControler.sendState(this.allStates);
        this.preloaderService.stopAppLoader();
      },
      (error) => {
        this.preloaderService.stopAppLoader();
      }
    );
  }

  updateData(){
    this.calendarControler.updateDateObserver$.subscribe(res => {
      let updatedDate = new Date(res);
      let currenM = this.currentDate.getMonth();
      let currentY = this.currentDate.getFullYear();

      let previousM = updatedDate.getMonth();
      let previousY = updatedDate.getFullYear();
      if (currenM == previousM && currentY == previousY) {
        return;
      }
      this.currentDate = updatedDate;
      this.getAppDataByMonth(updatedDate);
    })
  }
}
