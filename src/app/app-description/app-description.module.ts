import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './components/description/description.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';

@NgModule({
  declarations: [DescriptionComponent],
  imports: [CommonModule, SharedMaterialModule, OverlayModule],
  exports: [DescriptionComponent],
})
export class AppDescriptionModule {}
