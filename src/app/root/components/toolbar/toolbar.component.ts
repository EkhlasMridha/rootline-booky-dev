import { CdkConnectedOverlay, OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  MatDatepickerBase,
  MatDatepickerControl,
} from '@angular/material/datepicker/datepicker-base';
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/app-calender/services/calendar.service';
import { CalendarOverlayService } from 'src/app/shared-modules/calendar-popup/services/calendar-overlay.service';
import { CalendarControlService } from 'src/app/shared-services/calendar-control.service';
import { UserManagerService } from 'src/app/shared-services/user-manager.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';

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
  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor(
    private userManagerService: UserManagerService,
    private router: Router,
    private iconService: IconService,
    private calendarControl: CalendarControlService,
    private datePickerService: CalendarOverlayService,
    private _viewContainer: ViewContainerRef
  ) {
    this.iconService.loadIcons(['signout']);
    this.appName = DomainService.domains.AppName;
  }

  @ViewChild(CdkConnectedOverlay, { static: true })
  cdkOverlay: CdkConnectedOverlay;

  ngOnInit(): void {
    this.currentDateValue = this.generateCurrentDate(new Date());
    this.observeCalendarDateChange();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
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
      this.currentDateValue = this.generateCurrentDate(dateValue);
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

  openDatePicker(elm) {
    console.log(elm);
    let ref = elm._elementRef;
    this.popUpRef = this.datePickerService.open({
      elementRef: ref,
      viewContainerRef: this._viewContainer,
      panelClass: 'date-picker',
    });

    let subscription = this.popUpRef.backdropClick().subscribe((res) => {
      this.popUpRef.dispose();
      subscription.unsubscribe();
    });
  }
}
