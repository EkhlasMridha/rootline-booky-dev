import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalConfig, ModalToken } from './root-line-modal.config';
import { RootlineModalComponent } from './rootline-modal/rootline-modal.component';
import * as i0 from "@angular/core";
export declare class RootlineModalService {
    private dialog;
    modalConfig: Partial<ModalConfig>;
    storedDefault: Partial<ModalConfig>;
    constructor(dialog: MatDialog, token: ModalToken);
    private applyConfig;
    dispose(): void;
    private verifyConfig;
    private openDialog;
    openConfirmationModal(config: Partial<ModalConfig>): MatDialogRef<RootlineModalComponent>;
    static ɵfac: i0.ɵɵFactoryDef<RootlineModalService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RootlineModalService>;
}
//# sourceMappingURL=rootline-modal.service.d.ts.map