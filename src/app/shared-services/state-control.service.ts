import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateControlService {
  private state: Subject<any> = new Subject<any>();

  stateObserver$ = this.state.asObservable();
  constructor() {}

  sendState(data: any) {
    this.state.next(data);
  }
}
