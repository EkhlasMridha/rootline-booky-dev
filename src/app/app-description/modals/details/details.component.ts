import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  bookingData: any;
  constructor (@Inject(MAT_DIALOG_DATA) data: any, private dialogRef: MatDialogRef<DetailsComponent>) {
    this.bookingData = data.booking;
   }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
