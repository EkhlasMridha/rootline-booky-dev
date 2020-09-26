import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as routerConfig from './root.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routerConfig.getAppRoutes())],
  exports: [RouterModule],
})
export class RootRoutingModule {}
