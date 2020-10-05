import { InjectionToken } from '@angular/core';
export interface ModalConfig {
    warnColor: string;
    successColor: string;
    errorColor: string;
    generalColor: string;
    type: 'success' | 'warn' | 'error' | 'general';
    matIcon: string;
    localIcon: string;
    headerText: string;
    description: string;
    primaryButtonName: string;
    secondaryButtonName: string;
    modalWidth: string;
    disableClose: boolean;
    isLoader: boolean;
    loaderText: string;
    primaryEvent: (event: MouseEvent) => any;
    secondaryEvent: (event: MouseEvent) => any;
}
export declare const DefaultConfig: Partial<ModalConfig>;
export interface ModalToken {
    default: ModalConfig;
    config: Partial<ModalConfig>;
}
export declare const ROOTLINE_MODAL_CONFIG: InjectionToken<ModalToken>;
//# sourceMappingURL=root-line-modal.config.d.ts.map