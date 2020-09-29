import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { AppDescriptionModule } from '../app-description/app-description.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule, SharedMaterialModule, AppDescriptionModule],
  exports: [TimelineComponent],
})
export class AppTimelineModule {}
