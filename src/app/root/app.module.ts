import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, PLATFORM_ID } from '@angular/core';
import { RootRoutingModule } from '../root-routing/RT-route-system/root-routing.module';
import { AppComponent } from './components/root-component/app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContentComponent } from './components/app-content/app-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DomainService } from '../shared-services/utilities/domain.service';
import { AppLoaderModule } from '../app-tools/app-loader/app-loader.module';
import { NonavLayoutComponent } from './components/nonav-layout/nonav-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from '../shared-services/interceptors/interceptor.provider';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CalendarPopupModule } from '../shared-modules/calendar-popup/calendar-popup.module';
import { MatDialogModule } from '@angular/material/dialog';
import { RoomCreateComponent } from './modals/room-create/room-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';
// import { RootlineDialogModule } from 'rootline-dialog';

export function initializer(domainService: DomainService) {
  return () => {
    new Promise((resolve, reject) => {
      if (DomainService.domains) {
        resolve();
      }
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AppContentComponent,
    PageLayoutComponent,
    NonavLayoutComponent,
    MainLayoutComponent,
    NotFoundComponent,
    RoomCreateComponent,
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    AppLoaderModule,
    MatIconModule,
    OverlayModule,
    MatNativeDateModule,
    CalendarPopupModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    // RootlineDialogModule.forChild(),
    ConfirmationStatusModalModule.forChild(),
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    interceptorProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PLATFORM_ID, DomainService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
