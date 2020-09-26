import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private iconService: IconService
  ) {
    this.iconService.loadIcons(['signout']);
    this.appName = DomainService.domains.AppName;
  }

  ngOnInit(): void {}

  signoutUser() {
    this.userManagerService.signout().subscribe((res) => {
      this.router.navigate(['signin']);
    });
  }
}
