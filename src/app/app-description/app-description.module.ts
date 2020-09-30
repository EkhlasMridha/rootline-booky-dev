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

export const DefaultComponentConfig: Partial<FilePreviewDialogConfig> = {
  ...DEFAULT_CONFIG,
};

@NgModule({
  declarations: [DescriptionComponent],
  imports: [CommonModule, SharedMaterialModule, OverlayModule],
  exports: [DescriptionComponent, OverlayModule],
  providers: [DescriptionService],
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
