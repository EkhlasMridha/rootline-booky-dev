import { MatDialogRef } from '@angular/material/dialog';
import { ModalConfig } from '../root-line-modal.config';
import * as i0 from "@angular/core";
export declare class RootlineModalComponent {
    private ref;
    modalConfig: Partial<ModalConfig>;
    typeColor: string;
    constructor(config: Partial<ModalConfig>, ref: MatDialogRef<RootlineModalComponent>);
    primaryButton(event: MouseEvent): void;
    secodaryButton(event: MouseEvent): void;
    private setModalColor;
    static ɵfac: i0.ɵɵFactoryDef<RootlineModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RootlineModalComponent, "rootline-rootline-modal", never, {}, {}, never, never>;
}
//# sourceMappingURL=rootline-modal.component.d.ts.map