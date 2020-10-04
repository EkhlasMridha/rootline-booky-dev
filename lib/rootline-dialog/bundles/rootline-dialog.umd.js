(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/dialog'), require('@angular/common'), require('@angular/flex-layout/flex'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/progress-spinner'), require('@angular/common/http'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('rootline-dialog', ['exports', '@angular/core', '@angular/material/dialog', '@angular/common', '@angular/flex-layout/flex', '@angular/material/icon', '@angular/material/button', '@angular/material/progress-spinner', '@angular/common/http', '@angular/flex-layout'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['rootline-dialog'] = {}, global.ng.core, global.ng.material.dialog, global.ng.common, global.ng.flexLayout.flex, global.ng.material.icon, global.ng.material.button, global.ng.material.progressSpinner, global.ng.common.http, global.ng.flexLayout));
}(this, (function (exports, i0, i1, i2, i3, i4, i5, i6, http, flexLayout) { 'use strict';

    var DefaultConfig = {
        successColor: '#009900 ',
        errorColor: '#ff0000 ',
        warnColor: '#FFCC00 ',
        generalColor: '#242424',
        type: 'general',
        modalWidth: 'auto',
        disableClose: false,
        isLoader: false,
        loaderText: 'Loading ...',
        primaryEvent: function () { },
        secondaryEvent: function () { },
    };
    var ROOTLINE_MODAL_CONFIG = new i0.InjectionToken('ModalToken');

    function RootlineModalComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("color", ctx_r2.typeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r2.modalConfig.matIcon);
        }
    }
    function RootlineModalComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵelement(1, "mat-icon", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("color", ctx_r3.typeColor);
            i0.ɵɵproperty("svgIcon", ctx_r3.modalConfig.localIcon);
        }
    }
    function RootlineModalComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "span", 14);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r4.modalConfig.headerText);
        }
    }
    function RootlineModalComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "span", 15);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r5.modalConfig.description);
        }
    }
    function RootlineModalComponent_div_0_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function RootlineModalComponent_div_0_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.secodaryButton($event); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r6.modalConfig.secondaryButtonName, " ");
        }
    }
    function RootlineModalComponent_div_0_button_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 17);
            i0.ɵɵlistener("click", function RootlineModalComponent_div_0_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.primaryButton($event); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r7.modalConfig.primaryButtonName, " ");
        }
    }
    function RootlineModalComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵtemplate(2, RootlineModalComponent_div_0_div_2_Template, 3, 3, "div", 4);
            i0.ɵɵtemplate(3, RootlineModalComponent_div_0_div_3_Template, 2, 3, "div", 5);
            i0.ɵɵelementStart(4, "div", 6);
            i0.ɵɵtemplate(5, RootlineModalComponent_div_0_div_5_Template, 3, 1, "div", 7);
            i0.ɵɵtemplate(6, RootlineModalComponent_div_0_div_6_Template, 3, 1, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 8);
            i0.ɵɵtemplate(8, RootlineModalComponent_div_0_button_8_Template, 2, 1, "button", 9);
            i0.ɵɵtemplate(9, RootlineModalComponent_div_0_button_9_Template, 2, 1, "button", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.matIcon && !ctx_r0.modalConfig.localIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.localIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.headerText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.description);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.secondaryButtonName);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.primaryButtonName);
        }
    }
    function RootlineModalComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelement(2, "mat-spinner", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵelementStart(4, "span", 20);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx_r1.modalConfig.loaderText);
        }
    }
    var RootlineModalComponent = /** @class */ (function () {
        function RootlineModalComponent(config, ref) {
            this.ref = ref;
            this.modalConfig = config;
            this.typeColor = this.setModalColor(this.modalConfig);
        }
        RootlineModalComponent.prototype.primaryButton = function (event) {
            this.modalConfig.primaryEvent(event);
            this.ref.close();
            this.modalConfig = DefaultConfig;
        };
        RootlineModalComponent.prototype.secodaryButton = function (event) {
            this.modalConfig.secondaryEvent(event);
            this.ref.close();
            this.modalConfig = DefaultConfig;
        };
        RootlineModalComponent.prototype.setModalColor = function (config) {
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
        };
        return RootlineModalComponent;
    }());
    RootlineModalComponent.ɵfac = function RootlineModalComponent_Factory(t) { return new (t || RootlineModalComponent)(i0.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
    RootlineModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RootlineModalComponent, selectors: [["rootline-rootline-modal"]], decls: 2, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["fxLayoutAlign", "center center", "class", "modal-icon", 4, "ngIf"], ["class", "modal-icon", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "15px"], ["fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px"], ["mat-stroked-button", "", "class", "outline-secondary-button", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "modal-icon"], [3, "svgIcon"], ["fxLayoutAlign", "center center"], [1, "text-center", "modal-header"], [1, "modal-description"], ["mat-stroked-button", "", "color", "primary", 1, "outline-secondary-button", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px"], ["color", "accent", "diameter", "40"], [2, "font-size", "16px"]], template: function RootlineModalComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, RootlineModalComponent_div_0_Template, 10, 6, "div", 0);
                i0.ɵɵtemplate(1, RootlineModalComponent_div_1_Template, 6, 1, "div", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.modalConfig.isLoader);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.modalConfig.isLoader);
            }
        }, directives: [i2.NgIf, i3.DefaultLayoutDirective, i3.DefaultLayoutGapDirective, i3.DefaultLayoutAlignDirective, i4.MatIcon, i5.MatButton, i6.MatSpinner], styles: [".outline-secondary-button[_ngcontent-%COMP%]{background:transparent;border-color:currentColor}.text-center[_ngcontent-%COMP%]{text-align:center}.modal-header[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal-description[_ngcontent-%COMP%]{color:#818181;font-size:14px}.modal-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:60px;height:60px;width:60px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RootlineModalComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'rootline-rootline-modal',
                        templateUrl: './rootline-modal.component.html',
                        styleUrls: ['./rootline-modal.component.scss'],
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }, { type: i1.MatDialogRef }];
        }, null);
    })();

    var RootlineModalService = /** @class */ (function () {
        function RootlineModalService(dialog, token) {
            this.dialog = dialog;
            this.storedDefault = token.default;
            this.modalConfig = Object.assign(Object.assign({}, token.default), token.config);
            this.modalConfig = this.verifyConfig(this.modalConfig);
        }
        RootlineModalService.prototype.applyConfig = function (config) {
            config = this.verifyConfig(config);
            this.modalConfig = Object.assign(Object.assign({}, this.modalConfig), config);
        };
        RootlineModalService.prototype.dispose = function () {
            this.modalConfig = Object.assign({}, this.storedDefault);
        };
        RootlineModalService.prototype.verifyConfig = function (config) {
            if (config.isLoader) {
                config.modalWidth = 'auto';
            }
            return config;
        };
        RootlineModalService.prototype.openDialog = function (config) {
            this.applyConfig(config);
            return this.dialog.open(RootlineModalComponent, {
                width: this.modalConfig.modalWidth,
                disableClose: this.modalConfig.disableClose,
                data: this.modalConfig,
            });
        };
        RootlineModalService.prototype.openConfirmationModal = function (config) {
            return this.openDialog(config);
        };
        return RootlineModalService;
    }());
    RootlineModalService.ɵfac = function RootlineModalService_Factory(t) { return new (t || RootlineModalService)(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(ROOTLINE_MODAL_CONFIG)); };
    RootlineModalService.ɵprov = i0.ɵɵdefineInjectable({ token: RootlineModalService, factory: RootlineModalService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RootlineModalService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () {
            return [{ type: i1.MatDialog }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ROOTLINE_MODAL_CONFIG]
                        }] }];
        }, null);
    })();

    var DefaultComponentConfig = Object.assign({}, DefaultConfig);
    var RootlineDialogModule = /** @class */ (function () {
        function RootlineDialogModule() {
        }
        RootlineDialogModule.forChild = function (config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: RootlineDialogModule,
                providers: [
                    {
                        provide: ROOTLINE_MODAL_CONFIG,
                        useValue: {
                            default: DefaultComponentConfig,
                            config: config,
                        },
                    },
                ],
            };
        };
        return RootlineDialogModule;
    }());
    RootlineDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: RootlineDialogModule });
    RootlineDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RootlineDialogModule_Factory(t) { return new (t || RootlineDialogModule)(); }, providers: [RootlineModalService], imports: [[
                i2.CommonModule,
                i5.MatButtonModule,
                http.HttpClientModule,
                i4.MatIconModule,
                i1.MatDialogModule,
                flexLayout.FlexLayoutModule,
                i6.MatProgressSpinnerModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RootlineDialogModule, { declarations: [RootlineModalComponent], imports: [i2.CommonModule,
                i5.MatButtonModule,
                http.HttpClientModule,
                i4.MatIconModule,
                i1.MatDialogModule,
                flexLayout.FlexLayoutModule,
                i6.MatProgressSpinnerModule], exports: [RootlineModalComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RootlineDialogModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [RootlineModalComponent],
                        imports: [
                            i2.CommonModule,
                            i5.MatButtonModule,
                            http.HttpClientModule,
                            i4.MatIconModule,
                            i1.MatDialogModule,
                            flexLayout.FlexLayoutModule,
                            i6.MatProgressSpinnerModule,
                        ],
                        providers: [RootlineModalService],
                        exports: [RootlineModalComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of rootline-dialog
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DefaultComponentConfig = DefaultComponentConfig;
    exports.RootlineDialogModule = RootlineDialogModule;
    exports.RootlineModalComponent = RootlineModalComponent;
    exports.RootlineModalService = RootlineModalService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rootline-dialog.umd.js.map
