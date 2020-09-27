import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/app-calender/services/calendar.service';
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
  constructor(
    private userManagerService: UserManagerService,
    private router: Router,
    private iconService: IconService,
    private calendarControl: CalendarControlService
  ) {
    this.iconService.loadIcons(['signout']);
    this.appName = DomainService.domains.AppName;
  }

  ngOnInit(): void {}

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
}
