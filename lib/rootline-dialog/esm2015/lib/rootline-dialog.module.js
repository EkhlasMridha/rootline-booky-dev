import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RootlineModalComponent } from './rootline-modal/rootline-modal.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DefaultConfig, ROOTLINE_MODAL_CONFIG, } from './root-line-modal.config';
import { RootlineModalService } from './rootline-modal.service';
import * as i0 from "@angular/core";
export const DefaultComponentConfig = Object.assign({}, DefaultConfig);
export class RootlineDialogModule {
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
RootlineDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: RootlineDialogModule });
RootlineDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RootlineDialogModule_Factory(t) { return new (t || RootlineDialogModule)(); }, providers: [RootlineModalService], imports: [[
            CommonModule,
            MatButtonModule,
            HttpClientModule,
            MatIconModule,
            MatDialogModule,
            FlexLayoutModule,
            MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RootlineDialogModule, { declarations: [RootlineModalComponent], imports: [CommonModule,
        MatButtonModule,
        HttpClientModule,
        MatIconModule,
        MatDialogModule,
        FlexLayoutModule,
        MatProgressSpinnerModule], exports: [RootlineModalComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RootlineDialogModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdGxpbmUtZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJIOi9Sb290LWxpbmUvUm9vdC1saW5lIG1hdGVyaWFscy9Bbmd1bGFyIGxpYnMvY3VzdG9tLWRpYWxvZy9wcm9qZWN0cy9yb290bGluZS1kaWFsb2cvc3JjLyIsInNvdXJjZXMiOlsibGliL3Jvb3RsaW5lLWRpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFFTCxhQUFhLEVBQ2IscUJBQXFCLEdBQ3RCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWhFLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixxQkFDOUIsYUFBYSxDQUNqQixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FDYixTQUErQixFQUFFO1FBRWpDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUU7d0JBQ1IsT0FBTyxFQUFFLHNCQUFzQjt3QkFDL0IsTUFBTTtxQkFDUDtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3dEQWhCVSxvQkFBb0I7dUhBQXBCLG9CQUFvQixtQkFIcEIsQ0FBQyxvQkFBb0IsQ0FBQyxZQVR4QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtTQUN6Qjt3RkFJVSxvQkFBb0IsbUJBYmhCLHNCQUFzQixhQUVuQyxZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix3QkFBd0IsYUFHaEIsc0JBQXNCO2tEQUVyQixvQkFBb0I7Y0FkaEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IFJvb3RsaW5lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3Jvb3RsaW5lLW1vZGFsL3Jvb3RsaW5lLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge1xuICBNb2RhbENvbmZpZyxcbiAgRGVmYXVsdENvbmZpZyxcbiAgUk9PVExJTkVfTU9EQUxfQ09ORklHLFxufSBmcm9tICcuL3Jvb3QtbGluZS1tb2RhbC5jb25maWcnO1xuaW1wb3J0IHsgUm9vdGxpbmVNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3Jvb3RsaW5lLW1vZGFsLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdENvbXBvbmVudENvbmZpZzogUGFydGlhbDxNb2RhbENvbmZpZz4gPSB7XG4gIC4uLkRlZmF1bHRDb25maWcsXG59O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtSb290bGluZU1vZGFsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbUm9vdGxpbmVNb2RhbFNlcnZpY2VdLFxuICBleHBvcnRzOiBbUm9vdGxpbmVNb2RhbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJvb3RsaW5lRGlhbG9nTW9kdWxlIHtcbiAgc3RhdGljIGZvckNoaWxkKFxuICAgIGNvbmZpZzogUGFydGlhbDxNb2RhbENvbmZpZz4gPSB7fVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvb3RsaW5lRGlhbG9nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSb290bGluZURpYWxvZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUk9PVExJTkVfTU9EQUxfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBEZWZhdWx0Q29tcG9uZW50Q29uZmlnLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==