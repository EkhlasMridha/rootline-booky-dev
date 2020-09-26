import { Component, OnInit } from '@angular/core';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { TesService } from '../../services/tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor(
    private iconService: IconService,
    private testService: TesService
  ) {
    this.iconService.loadIcons(['like']);
  }

  ngOnInit(): void {}
}
