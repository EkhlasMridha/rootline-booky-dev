import { Inject, Injectable } from '@angular/core';
import { ROOTLINE_MODAL_CONFIG } from './root-line-modal.config';
import { RootlineModalComponent } from './rootline-modal/rootline-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class RootlineModalService {
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
RootlineModalService.ɵfac = function RootlineModalService_Factory(t) { return new (t || RootlineModalService)(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(ROOTLINE_MODAL_CONFIG)); };
RootlineModalService.ɵprov = i0.ɵɵdefineInjectable({ token: RootlineModalService, factory: RootlineModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RootlineModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.MatDialog }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROOTLINE_MODAL_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdGxpbmUtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJIOi9Sb290LWxpbmUvUm9vdC1saW5lIG1hdGVyaWFscy9Bbmd1bGFyIGxpYnMvY3VzdG9tLWRpYWxvZy9wcm9qZWN0cy9yb290bGluZS1kaWFsb2cvc3JjLyIsInNvdXJjZXMiOlsibGliL3Jvb3RsaW5lLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUtuRixNQUFNLE9BQU8sb0JBQW9CO0lBRy9CLFlBQ1UsTUFBaUIsRUFDTSxLQUFpQjtRQUR4QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBR3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxtQ0FDWCxLQUFLLENBQUMsT0FBTyxHQUNiLEtBQUssQ0FBQyxNQUFNLENBQ2hCLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxXQUFXLENBQUMsTUFBNEI7UUFDOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsbUNBQ1gsSUFBSSxDQUFDLFdBQVcsR0FDaEIsTUFBTSxDQUNWLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxXQUFXLHFCQUFRLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU8sWUFBWSxDQUFDLE1BQTRCO1FBQy9DLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUM1QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBNEI7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzlDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDbEMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTtZQUMzQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFCQUFxQixDQUNuQixNQUE0QjtRQUU1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7d0ZBL0NVLG9CQUFvQix5Q0FLckIscUJBQXFCOzREQUxwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZuQixNQUFNO2tEQUVQLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQU1JLE1BQU07dUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNb2RhbENvbmZpZywgTW9kYWxUb2tlbiB9IGZyb20gJy4vcm9vdC1saW5lLW1vZGFsLmNvbmZpZyc7XG5pbXBvcnQgeyBST09UTElORV9NT0RBTF9DT05GSUcgfSBmcm9tICcuL3Jvb3QtbGluZS1tb2RhbC5jb25maWcnO1xuaW1wb3J0IHsgUm9vdGxpbmVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcm9vdGxpbmUtbW9kYWwvcm9vdGxpbmUtbW9kYWwuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJvb3RsaW5lTW9kYWxTZXJ2aWNlIHtcbiAgbW9kYWxDb25maWc6IFBhcnRpYWw8TW9kYWxDb25maWc+O1xuICBzdG9yZWREZWZhdWx0OiBQYXJ0aWFsPE1vZGFsQ29uZmlnPjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBASW5qZWN0KFJPT1RMSU5FX01PREFMX0NPTkZJRykgdG9rZW46IE1vZGFsVG9rZW5cbiAgKSB7XG4gICAgdGhpcy5zdG9yZWREZWZhdWx0ID0gdG9rZW4uZGVmYXVsdDtcbiAgICB0aGlzLm1vZGFsQ29uZmlnID0ge1xuICAgICAgLi4udG9rZW4uZGVmYXVsdCxcbiAgICAgIC4uLnRva2VuLmNvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMubW9kYWxDb25maWcgPSB0aGlzLnZlcmlmeUNvbmZpZyh0aGlzLm1vZGFsQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlDb25maWcoY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPikge1xuICAgIGNvbmZpZyA9IHRoaXMudmVyaWZ5Q29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5tb2RhbENvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMubW9kYWxDb25maWcsXG4gICAgICAuLi5jb25maWcsXG4gICAgfTtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5tb2RhbENvbmZpZyA9IHsgLi4udGhpcy5zdG9yZWREZWZhdWx0IH07XG4gIH1cblxuICBwcml2YXRlIHZlcmlmeUNvbmZpZyhjb25maWc6IFBhcnRpYWw8TW9kYWxDb25maWc+KSB7XG4gICAgaWYgKGNvbmZpZy5pc0xvYWRlcikge1xuICAgICAgY29uZmlnLm1vZGFsV2lkdGggPSAnYXV0byc7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIG9wZW5EaWFsb2coY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPikge1xuICAgIHRoaXMuYXBwbHlDb25maWcoY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3BlbihSb290bGluZU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogdGhpcy5tb2RhbENvbmZpZy5tb2RhbFdpZHRoLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLm1vZGFsQ29uZmlnLmRpc2FibGVDbG9zZSxcbiAgICAgIGRhdGE6IHRoaXMubW9kYWxDb25maWcsXG4gICAgfSk7XG4gIH1cblxuICBvcGVuQ29uZmlybWF0aW9uTW9kYWwoXG4gICAgY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPlxuICApOiBNYXREaWFsb2dSZWY8Um9vdGxpbmVNb2RhbENvbXBvbmVudD4ge1xuICAgIHJldHVybiB0aGlzLm9wZW5EaWFsb2coY29uZmlnKTtcbiAgfVxufVxuIl19