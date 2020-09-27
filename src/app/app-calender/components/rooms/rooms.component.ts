import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  @Input() substituteDate: any;
  weekDayName: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  guestRooms: number[] = [12, 24, 15, 43];

  constructor() {}

  ngOnInit(): void {
    console.log(this.substituteDate);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  getView(date: number) {
    let view = document.getElementById(date.toString());
    return view;
  }
}
