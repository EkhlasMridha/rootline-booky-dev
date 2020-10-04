import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationStatusService } from '../../services/confirmation-status.service';
import {
  CONFIRMATION_MODAL_CONFIG,
  DefaultConfig,
  ModalConfig,
  ModalToken,
} from '../../configs/modal.config';

@Component({
  selector: 'app-confirmation-status',
  templateUrl: './confirmation-status.component.html',
  styleUrls: ['./confirmation-status.component.scss'],
})
export class ConfirmationStatusComponent implements OnInit {
  modalConfig: Partial<ModalConfig>;
  typeColor: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) config: Partial<ModalConfig>,
    private ref: MatDialogRef<ConfirmationStatusService>
  ) {
    this.modalConfig = config;
    this.typeColor = this.setModalColor(this.modalConfig);
    console.log(this.modalConfig);
  }

  ngOnInit(): void {}

  primaryButton(event: MouseEvent) {
    this.modalConfig.primaryEvent(event);
    this.ref.close();
    this.modalConfig = DefaultConfig;
  }
  secodaryButton(event: MouseEvent) {
    this.modalConfig.secondaryEvent(event);
    this.ref.close();
    this.modalConfig = DefaultConfig;
  }

  private setModalColor(config: Partial<ModalConfig>) {
    if (config.type == 'general') {
      return config.generalColor;
    } else if (config.type == 'success') {
      return config.successColor;
    } else if (config.type == 'warn') {
      return config.warnColor;
    } else if (config.type == 'error') {
      return config.errorColor;
    }
  }
}
