import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateControlService {
  private state: Subject<any> = new Subject<any>();
  private roomCreation: Subject<any> = new Subject<any>();
  private deleteRoom: Subject<any> = new Subject<any>();

  stateObserver$ = this.state.asObservable();
  roomCreationObserver$ = this.roomCreation.asObservable();
  deleteRoomListener$ = this.deleteRoom.asObservable();
  constructor() {}

  sendState(data: any) {
    this.state.next(data);
  }

  sendRoomCreationSignal(data: any) {
    this.roomCreation.next(data);
  }

  deleteRoomSignal(data:any) {
    this.deleteRoom.next(data);
  }
}
