import { Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationStatusComponent } from '../components/confirmation-status/confirmation-status.component';
import {
  ModalConfig,
  CONFIRMATION_MODAL_CONFIG,
  ModalToken,
} from '../configs/modal.config';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationStatusService {
  modalConfig: Partial<ModalConfig>;
  constructor(
    private dialog: MatDialog,
    @Inject(CONFIRMATION_MODAL_CONFIG) token: ModalToken
  ) {
    this.modalConfig = {
      ...token.default,
      ...token.config,
    };
    this.modalConfig = this.verifyConfig(this.modalConfig);
  }

  private applyConfig(config: Partial<ModalConfig>) {
    config = this.verifyConfig(config);
    this.modalConfig = {
      ...this.modalConfig,
      ...config,
    };
  }

  private verifyConfig(config: Partial<ModalConfig>) {
    if (config.isLoader) {
      config.modalWidth = 'auto';
    }
    return config;
  }

  private openDialog(config: Partial<ModalConfig>) {
    this.applyConfig(config);
    return this.dialog.open(ConfirmationStatusComponent, {
      width: this.modalConfig.modalWidth,
      disableClose: this.modalConfig.disableClose,
      data: this.modalConfig,
    });
  }

  openConfirmationModal(
    config: Partial<ModalConfig>
  ): MatDialogRef<ConfirmationStatusComponent> {
    return this.openDialog(config);
  }
}
