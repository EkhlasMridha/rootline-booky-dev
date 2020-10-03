import { CdkConnectedOverlay, OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  MatDatepickerBase,
  MatDatepickerControl,
} from '@angular/material/datepicker/datepicker-base';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/app-calender/services/calendar.service';
import { CalendarOverlayService } from 'src/app/shared-modules/calendar-popup/services/calendar-overlay.service';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { UserManagerService } from 'src/app/shared-services/user-manager.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { RoomCreateComponent } from '../../modals/room-create/room-create.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  appName: string;
  startDate = new Date(1990, 0, 1);
  currentDateValue: string;
  popUpRef: OverlayRef;
  selectedDate: any;
  monthNames: string[] = [];
  constructor(
    private userManagerService: UserManagerService,
    private router: Router,
    private iconService: IconService,
    private calendarControl: CalendarControlService,
    private datePickerService: CalendarOverlayService,
    private _viewContainer: ViewContainerRef,
    private dialog: MatDialog
  ) {
    this.iconService.loadIcons(['signout']);
    this.appName = DomainService.domains.AppName;
    this.monthNames = DomainService.domains.Months;
  }

  ngOnInit(): void {
    this.currentDateValue = this.generateCurrentDate(new Date());
    this.selectedDate = new Date();
    this.updateObservertoolbar();
    this.observeCalendarDateChange();
  }

  updateObservertoolbar() {
    this.calendarControl.toolbarDateObserver$.subscribe((res) => {
      this.currentDateValue = this.generateCurrentDate(res);
      this.selectedDate = res;
    });
  }

  nextWeek() {
    this.calendarControl.nextWeek();
  }

  previous() {
    this.calendarControl.previousWeek();
  }

  todayCalendar() {
    this.calendarControl.today();
  }

  signoutUser() {
    this.userManagerService.signout().subscribe((res) => {
      this.router.navigate(['signin']);
    });
  }

  observeCalendarDateChange() {
    this.calendarControl.updateDateObserver$.subscribe((res) => {
      let dateValue = new Date(res);
      this.calendarControl.updateToolbardate(dateValue);
      this.popUpRef.dispose();
    });
  }

  generateCurrentDate(date: Date) {
    let month = date.getMonth();
    let currentMonth = this.monthNames[month];
    let currentYear = date.getFullYear().toString();
    let finalValue = currentMonth + ' ' + currentYear;
    return finalValue;
  }

  addRoom() {
    let dialogRef = this.dialog.open(RoomCreateComponent, {
      width: '350px',
    });
  }

  openDatePicker(elm) {
    console.log(elm);
    let ref = elm._elementRef;
    this.popUpRef = this.datePickerService.open({
      elementRef: ref,
      viewContainerRef: this._viewContainer,
      panelClass: 'date-picker',
      data: this.selectedDate,
    });

    this.calendarControl.transmitDateFromToolbar(this.selectedDate);

    let subscription = this.popUpRef.backdropClick().subscribe((res) => {
      this.popUpRef.dispose();
      subscription.unsubscribe();
    });
  }
}
