import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-room-book',
  templateUrl: './room-book.component.html',
  styleUrls: ['./room-book.component.scss'],
})
export class RoomBookComponent implements OnInit {
  data: any;
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
