import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RoomApiService } from '../../services/room-api.service';
import { RoomBookComponent } from '../room-book/room-book.component';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SelectCustomerComponent implements OnInit {
  data: any;
  searchString: string;
  customerList: any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dataAPi: RoomApiService,
    private dialogRef: MatDialogRef<SelectCustomerComponent>,
    private dialog: MatDialog
  ) {
    this.data = data;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  selectCustomer(customer) {
    console.log(customer);
    this.dialog.open(RoomBookComponent, {
      width: 'auto',
      data: { room: this.data, customer: customer },
    });
    this.dialogRef.close();
  }

  getCustomer(value) {
    this.dataAPi.getCustomerByquery(value).subscribe((res) => {
      this.customerList = res;
    });
  }
}
