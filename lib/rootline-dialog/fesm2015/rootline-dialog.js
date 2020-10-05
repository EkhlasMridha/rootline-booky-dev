import { InjectionToken, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵstyleProp, ɵɵtextInterpolate, ɵɵelement, ɵɵproperty, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵsetClassMetadata, Component, Inject, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf, CommonModule } from '@angular/common';
import { DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective } from '@angular/flex-layout/flex';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

const DefaultConfig = {
    successColor: '#009900 ',
    errorColor: '#ff0000 ',
    warnColor: '#FFCC00 ',
    generalColor: '#242424',
    type: 'general',
    modalWidth: 'auto',
    disableClose: false,
    isLoader: false,
    loaderText: 'Loading ...',
    primaryEvent: () => { },
    secondaryEvent: () => { },
};
const ROOTLINE_MODAL_CONFIG = new InjectionToken('ModalToken');

function RootlineModalComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵstyleProp("color", ctx_r2.typeColor);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.modalConfig.matIcon);
} }
function RootlineModalComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "mat-icon", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵstyleProp("color", ctx_r3.typeColor);
    ɵɵproperty("svgIcon", ctx_r3.modalConfig.localIcon);
} }
function RootlineModalComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "span", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r4.modalConfig.headerText);
} }
function RootlineModalComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "span", 15);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.modalConfig.description);
} }
function RootlineModalComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function RootlineModalComponent_div_0_button_8_Template_button_click_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(2); return ctx_r8.secodaryButton($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r6.modalConfig.secondaryButtonName, " ");
} }
function RootlineModalComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function RootlineModalComponent_div_0_button_9_Template_button_click_0_listener($event) { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(2); return ctx_r10.primaryButton($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.modalConfig.primaryButtonName, " ");
} }
function RootlineModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵtemplate(2, RootlineModalComponent_div_0_div_2_Template, 3, 3, "div", 4);
    ɵɵtemplate(3, RootlineModalComponent_div_0_div_3_Template, 2, 3, "div", 5);
    ɵɵelementStart(4, "div", 6);
    ɵɵtemplate(5, RootlineModalComponent_div_0_div_5_Template, 3, 1, "div", 7);
    ɵɵtemplate(6, RootlineModalComponent_div_0_div_6_Template, 3, 1, "div", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 8);
    ɵɵtemplate(8, RootlineModalComponent_div_0_button_8_Template, 2, 1, "button", 9);
    ɵɵtemplate(9, RootlineModalComponent_div_0_button_9_Template, 2, 1, "button", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.modalConfig.matIcon && !ctx_r0.modalConfig.localIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.modalConfig.localIcon);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.modalConfig.headerText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.modalConfig.description);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.modalConfig.secondaryButtonName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.modalConfig.primaryButtonName);
} }
function RootlineModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelementStart(1, "div");
    ɵɵelement(2, "mat-spinner", 19);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵelementStart(4, "span", 20);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r1.modalConfig.loaderText);
} }
class RootlineModalComponent {
    constructor(config, ref) {
        this.ref = ref;
        this.modalConfig = config;
        this.typeColor = this.setModalColor(this.modalConfig);
    }
    primaryButton(event) {
        this.modalConfig.primaryEvent(event);
        this.ref.close();
        this.modalConfig = DefaultConfig;
    }
    secodaryButton(event) {
        this.modalConfig.secondaryEvent(event);
        this.ref.close();
        this.modalConfig = DefaultConfig;
    }
    setModalColor(config) {
        if (config.type == 'general') {
            return config.generalColor;
        }
        else if (config.type == 'success') {
            return config.successColor;
        }
        else if (config.type == 'warn') {
            return config.warnColor;
        }
        else if (config.type == 'error') {
            return config.errorColor;
        }
    }
}
RootlineModalComponent.ɵfac = function RootlineModalComponent_Factory(t) { return new (t || RootlineModalComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef)); };
RootlineModalComponent.ɵcmp = ɵɵdefineComponent({ type: RootlineModalComponent, selectors: [["rootline-rootline-modal"]], decls: 2, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["fxLayoutAlign", "center center", "class", "modal-icon", 4, "ngIf"], ["class", "modal-icon", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "15px"], ["fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px"], ["mat-stroked-button", "", "class", "outline-secondary-button", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "modal-icon"], [3, "svgIcon"], ["fxLayoutAlign", "center center"], [1, "text-center", "modal-header"], [1, "modal-description"], ["mat-stroked-button", "", "color", "primary", 1, "outline-secondary-button", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px"], ["color", "accent", "diameter", "40"], [2, "font-size", "16px"]], template: function RootlineModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, RootlineModalComponent_div_0_Template, 10, 6, "div", 0);
        ɵɵtemplate(1, RootlineModalComponent_div_1_Template, 6, 1, "div", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.modalConfig.isLoader);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.modalConfig.isLoader);
    } }, directives: [NgIf, DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, MatIcon, MatButton, MatSpinner], styles: [".outline-secondary-button[_ngcontent-%COMP%]{background:transparent;border-color:currentColor}.text-center[_ngcontent-%COMP%]{text-align:center}.modal-header[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal-description[_ngcontent-%COMP%]{color:#818181;font-size:14px}.modal-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:60px;height:60px;width:60px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RootlineModalComponent, [{
        type: Component,
        args: [{
                selector: 'rootline-rootline-modal',
                templateUrl: './rootline-modal.component.html',
                styleUrls: ['./rootline-modal.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }]; }, null); })();

class RootlineModalService {
    constructor(dialog, token) {
        this.dialog = dialog;
        this.storedDefault = token.default;
        this.modalConfig = Object.assign(Object.assign({}, token.default), token.config);
        this.modalConfig = this.verifyConfig(this.modalConfig);
    }
    applyConfig(config) {
        config = this.verifyConfig(config);
        this.modalConfig = Object.assign(Object.assign({}, this.modalConfig), config);
    }
    dispose() {
        this.modalConfig = Object.assign({}, this.storedDefault);
    }
    verifyConfig(config) {
        if (config.isLoader) {
            config.modalWidth = 'auto';
        }
        return config;
    }
    openDialog(config) {
        this.applyConfig(config);
        return this.dialog.open(RootlineModalComponent, {
            width: this.modalConfig.modalWidth,
            disableClose: this.modalConfig.disableClose,
            data: this.modalConfig,
        });
    }
    openConfirmationModal(config) {
        return this.openDialog(config);
    }
}
RootlineModalService.ɵfac = function RootlineModalService_Factory(t) { return new (t || RootlineModalService)(ɵɵinject(MatDialog), ɵɵinject(ROOTLINE_MODAL_CONFIG)); };
RootlineModalService.ɵprov = ɵɵdefineInjectable({ token: RootlineModalService, factory: RootlineModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RootlineModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: MatDialog }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROOTLINE_MODAL_CONFIG]
            }] }]; }, null); })();

const DefaultComponentConfig = Object.assign({}, DefaultConfig);
class RootlineDialogModule {
    static forChild(config = {}) {
        return {
            ngModule: RootlineDialogModule,
            providers: [
                {
                    provide: ROOTLINE_MODAL_CONFIG,
                    useValue: {
                        default: DefaultComponentConfig,
                        config,
                    },
                },
            ],
        };
    }
}
RootlineDialogModule.ɵmod = ɵɵdefineNgModule({ type: RootlineDialogModule });
RootlineDialogModule.ɵinj = ɵɵdefineInjector({ factory: function RootlineDialogModule_Factory(t) { return new (t || RootlineDialogModule)(); }, providers: [RootlineModalService], imports: [[
            CommonModule,
            MatButtonModule,
            HttpClientModule,
            MatIconModule,
            MatDialogModule,
            FlexLayoutModule,
            MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RootlineDialogModule, { declarations: [RootlineModalComponent], imports: [CommonModule,
        MatButtonModule,
        HttpClientModule,
        MatIconModule,
        MatDialogModule,
        FlexLayoutModule,
        MatProgressSpinnerModule], exports: [RootlineModalComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(RootlineDialogModule, [{
        type: NgModule,
        args: [{
                declarations: [RootlineModalComponent],
                imports: [
                    CommonModule,
                    MatButtonModule,
                    HttpClientModule,
                    MatIconModule,
                    MatDialogModule,
                    FlexLayoutModule,
                    MatProgressSpinnerModule,
                ],
                providers: [RootlineModalService],
                exports: [RootlineModalComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of rootline-dialog
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DefaultComponentConfig, RootlineDialogModule, RootlineModalComponent, RootlineModalService };
//# sourceMappingURL=rootline-dialog.js.map
