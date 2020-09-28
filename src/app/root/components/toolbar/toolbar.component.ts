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

  ngOnInit(): void {}

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

  openDatePicker(elm) {
    console.log(elm);
    let ref = elm._elementRef;
    let popUpRef: OverlayRef = this.datePickerService.open({
      elementRef: ref,
      viewContainerRef: this._viewContainer,
      panelClass: 'date-picker',
    });

    let subscription = popUpRef.backdropClick().subscribe((res) => {
      popUpRef.dispose();
      subscription.unsubscribe();
    });
  }
}
