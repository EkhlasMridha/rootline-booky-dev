import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './components/description/description.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import {
  DESCRIPTION_POPUP_CONFIG,
  FilePreviewDialogConfig,
  DEFAULT_CONFIG,
} from './description.config';
import { DescriptionService } from './services/DescriptionService';
import { MatRadioModule } from '@angular/material/radio';
import { EditCustomerComponent } from './modals/edit-customer/edit-customer.component';
import { EditBookingComponent } from './modals/edit-booking/edit-booking.component';
import { FormsMaterialModule } from '../shared-modules/shared-materials/forms-material/forms-material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';
// import { RootlineDialogModule, RootlineModalService } from 'rootline-dialog';

export const DefaultComponentConfig: Partial<FilePreviewDialogConfig> = {
  ...DEFAULT_CONFIG,
};

@NgModule({
  declarations: [
    DescriptionComponent,
    EditCustomerComponent,
    EditBookingComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    OverlayModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxSkeletonLoaderModule,
    // RootlineDialogModule.forChild({ warnColor: '#ce4e05' }),
    ConfirmationStatusModalModule.forChild({ warnColor: '#ce4e05' }),
  ],
  entryComponents: [DescriptionComponent],
})
export class AppDescriptionModule {
  static forChild(
    config: FilePreviewDialogConfig = {}
  ): ModuleWithProviders<AppDescriptionModule> {
    return {
      ngModule: AppDescriptionModule,
      providers: [
        {
          provide: DESCRIPTION_POPUP_CONFIG,
          useValue: {
            default: DefaultComponentConfig,
            config,
          },
        },
      ],
    };
  }
}
