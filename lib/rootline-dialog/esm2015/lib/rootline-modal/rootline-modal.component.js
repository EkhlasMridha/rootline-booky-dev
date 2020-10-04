import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DefaultConfig } from '../root-line-modal.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/flex-layout/flex";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/progress-spinner";
function RootlineModalComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r2.typeColor);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.modalConfig.matIcon);
} }
function RootlineModalComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "mat-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r3.typeColor);
    i0.ɵɵproperty("svgIcon", ctx_r3.modalConfig.localIcon);
} }
function RootlineModalComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "span", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.modalConfig.headerText);
} }
function RootlineModalComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "span", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.modalConfig.description);
} }
function RootlineModalComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function RootlineModalComponent_div_0_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.secodaryButton($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.modalConfig.secondaryButtonName, " ");
} }
function RootlineModalComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function RootlineModalComponent_div_0_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.primaryButton($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.modalConfig.primaryButtonName, " ");
} }
function RootlineModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
} }
function RootlineModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.modalConfig.loaderText);
} }
export class RootlineModalComponent {
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
RootlineModalComponent.ɵfac = function RootlineModalComponent_Factory(t) { return new (t || RootlineModalComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
RootlineModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RootlineModalComponent, selectors: [["rootline-rootline-modal"]], decls: 2, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["fxLayoutAlign", "center center", "class", "modal-icon", 4, "ngIf"], ["class", "modal-icon", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "15px"], ["fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px"], ["mat-stroked-button", "", "class", "outline-secondary-button", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "modal-icon"], [3, "svgIcon"], ["fxLayoutAlign", "center center"], [1, "text-center", "modal-header"], [1, "modal-description"], ["mat-stroked-button", "", "color", "primary", 1, "outline-secondary-button", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px"], ["color", "accent", "diameter", "40"], [2, "font-size", "16px"]], template: function RootlineModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RootlineModalComponent_div_0_Template, 10, 6, "div", 0);
        i0.ɵɵtemplate(1, RootlineModalComponent_div_1_Template, 6, 1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.modalConfig.isLoader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.modalConfig.isLoader);
    } }, directives: [i2.NgIf, i3.DefaultLayoutDirective, i3.DefaultLayoutGapDirective, i3.DefaultLayoutAlignDirective, i4.MatIcon, i5.MatButton, i6.MatSpinner], styles: [".outline-secondary-button[_ngcontent-%COMP%]{background:transparent;border-color:currentColor}.text-center[_ngcontent-%COMP%]{text-align:center}.modal-header[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal-description[_ngcontent-%COMP%]{color:#818181;font-size:14px}.modal-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:60px;height:60px;width:60px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RootlineModalComponent, [{
        type: Component,
        args: [{
                selector: 'rootline-rootline-modal',
                templateUrl: './rootline-modal.component.html',
                styleUrls: ['./rootline-modal.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdGxpbmUtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ikg6L1Jvb3QtbGluZS9Sb290LWxpbmUgbWF0ZXJpYWxzL0FuZ3VsYXIgbGlicy9jdXN0b20tZGlhbG9nL3Byb2plY3RzL3Jvb3RsaW5lLWRpYWxvZy9zcmMvIiwic291cmNlcyI6WyJsaWIvcm9vdGxpbmUtbW9kYWwvcm9vdGxpbmUtbW9kYWwuY29tcG9uZW50LnRzIiwibGliL3Jvb3RsaW5lLW1vZGFsL3Jvb3RsaW5lLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBZSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7SUNBbkUsK0JBS0U7SUFBQSxnQ0FBb0M7SUFBQSxZQUF5QjtJQUFBLGlCQUFXO0lBQzFFLGlCQUFNOzs7SUFETSxlQUF5QjtJQUF6Qix5Q0FBeUI7SUFBQyxlQUF5QjtJQUF6QixnREFBeUI7OztJQUUvRCwrQkFLRTtJQUFBLCtCQUdZO0lBQ2QsaUJBQU07OztJQUZGLGVBQXlCO0lBQXpCLHlDQUF5QjtJQUR6QixzREFBaUM7OztJQUtuQywrQkFDRTtJQUFBLGdDQUF1QztJQUFBLFlBRXJDO0lBQUEsaUJBQU87SUFDWCxpQkFBTTs7O0lBSG1DLGVBRXJDO0lBRnFDLG1EQUVyQzs7O0lBRUosK0JBQ0U7SUFBQSxnQ0FBZ0M7SUFBQSxZQUE2QjtJQUFBLGlCQUFPO0lBQ3RFLGlCQUFNOzs7SUFENEIsZUFBNkI7SUFBN0Isb0RBQTZCOzs7O0lBS2pFLGtDQU9FO0lBRkEsb05BQWdDO0lBRWhDLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRFAsZUFDRjtJQURFLHVFQUNGOzs7O0lBQ0Esa0NBTUU7SUFGQSxzTkFBK0I7SUFFL0IsWUFDRjtJQUFBLGlCQUFTOzs7SUFEUCxlQUNGO0lBREUscUVBQ0Y7OztJQS9DSiw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsNkVBS0U7SUFFRiw2RUFLRTtJQUtGLDhCQUNFO0lBQUEsNkVBQ0U7SUFJRiw2RUFDRTtJQUVKLGlCQUFNO0lBQ1IsaUJBQU07SUFDTiw4QkFDRTtJQUFBLG1GQU9FO0lBRUYsb0ZBTUU7SUFFSixpQkFBTTtJQUNSLGlCQUFNOzs7SUE5Q0EsZUFBcUQ7SUFBckQsa0ZBQXFEO0lBT3JELGVBQTZCO0lBQTdCLG1EQUE2QjtJQVVNLGVBQThCO0lBQTlCLG9EQUE4QjtJQUs5QixlQUErQjtJQUEvQixxREFBK0I7SUFVbEUsZUFBdUM7SUFBdkMsNkRBQXVDO0lBUXZDLGVBQXFDO0lBQXJDLDJEQUFxQzs7O0lBTzNDLCtCQUtFO0lBQUEsMkJBQ0U7SUFBQSxrQ0FBd0Q7SUFDMUQsaUJBQU07SUFDTiwyQkFDRTtJQUFBLGdDQUE4QjtJQUFBLFlBQTRCO0lBQUEsaUJBQU87SUFDbkUsaUJBQU07SUFDUixpQkFBTTs7O0lBRjRCLGVBQTRCO0lBQTVCLG1EQUE0Qjs7QURsRDlELE1BQU0sT0FBTyxzQkFBc0I7SUFHakMsWUFDMkIsTUFBNEIsRUFDN0MsR0FBeUM7UUFBekMsUUFBRyxHQUFILEdBQUcsQ0FBc0M7UUFFakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQUNELGNBQWMsQ0FBQyxLQUFpQjtRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBNEI7UUFDaEQsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDNUI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQ25DLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztTQUM1QjthQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDaEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUNqQyxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs0RkFoQ1Usc0JBQXNCLHVCQUl2QixlQUFlOzJEQUpkLHNCQUFzQjtRQ1RuQyx3RUFDRTtRQWlERix1RUFLRTs7UUF2RHdDLGdEQUE2QjtRQW1EckUsZUFBNEI7UUFBNUIsK0NBQTRCOztrREQxQ2pCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7O3NCQUtJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERlZmF1bHRDb25maWcsIE1vZGFsQ29uZmlnIH0gZnJvbSAnLi4vcm9vdC1saW5lLW1vZGFsLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Jvb3RsaW5lLXJvb3RsaW5lLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jvb3RsaW5lLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm9vdGxpbmUtbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUm9vdGxpbmVNb2RhbENvbXBvbmVudCB7XG4gIG1vZGFsQ29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPjtcbiAgdHlwZUNvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBjb25maWc6IFBhcnRpYWw8TW9kYWxDb25maWc+LFxuICAgIHByaXZhdGUgcmVmOiBNYXREaWFsb2dSZWY8Um9vdGxpbmVNb2RhbENvbXBvbmVudD5cbiAgKSB7XG4gICAgdGhpcy5tb2RhbENvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnR5cGVDb2xvciA9IHRoaXMuc2V0TW9kYWxDb2xvcih0aGlzLm1vZGFsQ29uZmlnKTtcbiAgfVxuXG4gIHByaW1hcnlCdXR0b24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLm1vZGFsQ29uZmlnLnByaW1hcnlFdmVudChldmVudCk7XG4gICAgdGhpcy5yZWYuY2xvc2UoKTtcbiAgICB0aGlzLm1vZGFsQ29uZmlnID0gRGVmYXVsdENvbmZpZztcbiAgfVxuICBzZWNvZGFyeUJ1dHRvbihldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMubW9kYWxDb25maWcuc2Vjb25kYXJ5RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMucmVmLmNsb3NlKCk7XG4gICAgdGhpcy5tb2RhbENvbmZpZyA9IERlZmF1bHRDb25maWc7XG4gIH1cblxuICBwcml2YXRlIHNldE1vZGFsQ29sb3IoY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPikge1xuICAgIGlmIChjb25maWcudHlwZSA9PSAnZ2VuZXJhbCcpIHtcbiAgICAgIHJldHVybiBjb25maWcuZ2VuZXJhbENvbG9yO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnN1Y2Nlc3NDb2xvcjtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy50eXBlID09ICd3YXJuJykge1xuICAgICAgcmV0dXJuIGNvbmZpZy53YXJuQ29sb3I7XG4gICAgfSBlbHNlIGlmIChjb25maWcudHlwZSA9PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gY29uZmlnLmVycm9yQ29sb3I7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIzMHB4XCIgKm5nSWY9XCIhbW9kYWxDb25maWcuaXNMb2FkZXJcIj5cbiAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMjBweFwiPlxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwibW9kYWxDb25maWcubWF0SWNvbiAmJiAhbW9kYWxDb25maWcubG9jYWxJY29uXCJcbiAgICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCJcbiAgICAgIGNsYXNzPVwibW9kYWwtaWNvblwiXG4gICAgPlxuICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJ0eXBlQ29sb3JcIj57eyBtb2RhbENvbmZpZy5tYXRJY29uIH19PC9tYXQtaWNvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cIm1vZGFsQ29uZmlnLmxvY2FsSWNvblwiXG4gICAgICBjbGFzcz1cIm1vZGFsLWljb25cIlxuICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxuICAgID5cbiAgICAgIDxtYXQtaWNvblxuICAgICAgICBbc3ZnSWNvbl09XCJtb2RhbENvbmZpZy5sb2NhbEljb25cIlxuICAgICAgICBbc3R5bGUuY29sb3JdPVwidHlwZUNvbG9yXCJcbiAgICAgID48L21hdC1pY29uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cbiAgICAgIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiAqbmdJZj1cIm1vZGFsQ29uZmlnLmhlYWRlclRleHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWNlbnRlciBtb2RhbC1oZWFkZXJcIj57e1xuICAgICAgICAgIG1vZGFsQ29uZmlnLmhlYWRlclRleHRcbiAgICAgICAgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiAqbmdJZj1cIm1vZGFsQ29uZmlnLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWwtZGVzY3JpcHRpb25cIj57eyBtb2RhbENvbmZpZy5kZXNjcmlwdGlvbiB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyMHB4XCI+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uXG4gICAgICBjbGFzcz1cIm91dGxpbmUtc2Vjb25kYXJ5LWJ1dHRvblwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgKm5nSWY9XCJtb2RhbENvbmZpZy5zZWNvbmRhcnlCdXR0b25OYW1lXCJcbiAgICAgIChjbGljayk9XCJzZWNvZGFyeUJ1dHRvbigkZXZlbnQpXCJcbiAgICA+XG4gICAgICB7eyBtb2RhbENvbmZpZy5zZWNvbmRhcnlCdXR0b25OYW1lIH19XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgICpuZ0lmPVwibW9kYWxDb25maWcucHJpbWFyeUJ1dHRvbk5hbWVcIlxuICAgICAgKGNsaWNrKT1cInByaW1hcnlCdXR0b24oJGV2ZW50KVwiXG4gICAgPlxuICAgICAge3sgbW9kYWxDb25maWcucHJpbWFyeUJ1dHRvbk5hbWUgfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXZcbiAgKm5nSWY9XCJtb2RhbENvbmZpZy5pc0xvYWRlclwiXG4gIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIlxuICBmeExheW91dEdhcD1cIjMwcHhcIlxuPlxuICA8ZGl2PlxuICAgIDxtYXQtc3Bpbm5lciBjb2xvcj1cImFjY2VudFwiIGRpYW1ldGVyPVwiNDBcIj48L21hdC1zcGlubmVyPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweFwiPnt7IG1vZGFsQ29uZmlnLmxvYWRlclRleHQgfX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=